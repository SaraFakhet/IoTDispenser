const models = require('./models')
const {Op} = require("sequelize");

exports.getUsers = (req, res) => {
    res.send("It's me")
}

exports.createUser = async (req, res) => {
    const people = await models.People.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        age: req.body.age,
    })
    console.log(people.id);
    statCountDay = await models.StatCount.create({
        countHandwashing: 0,
        resetDelay: 42, // CHANGE LIB FIXME et transforme ça en 1 jour
        lastDelay: 42,
    })

    statCountMonth = await models.StatCount.create({
        countHandwashing: 0,
        resetDelay: 42, // CHANGE LIB FIXME et transforme ça en 1 mois
        lastDelay: 42,
    })

    await models.Users.create({
        people: people.id,
        idEntreprise: req.body.idEntreprise,
        countHandwashingDay: 0,
        role: req.body.role,
        password: req.body.password,
        countDay: statCountDay.id,
        countMonth: statCountMonth.id,
    })

    res.sendStatus(200)
}

exports.connect = async (req, res) => {
    const password = req.body.password;
    const email = req.body.email;

    /*const user = await models.Users.findOne({
        where: {
            password,
            include: [{
                model: models.People,
                on: {
                '$users.people$': { [Op.col]: 'people.id' }
                },
            }]
        }
    })*/
    const people = await models.People.findAll({ where: {email}, attributes: ['id']});
    const peoples = people.map((p) => p.id);
    console.log("peoples : " + peoples);
    const user= await models.Users.findOne({where: {password, people: peoples}});
    
    //const user = {"username":"zizou"};

    
    console.log("user : " + user);
    console.log("email : " + email);

    if (user === null) {
        console.log("too bad");
        res.sendStatus(404);
    }
    else {
        res.send(user)
    }
}

exports.handWashing = async (req, res) => {
    const user = await models.Users.findOne({where: {id: req.body.id}})
    await models.StatCount.increment('countHandwashing', { where: { id: user.countDay }})
    await models.StatCount.increment('countHandwashing', { where: { id: user.countMonth }})
    res.sendStatus(200)
}

exports.getStat = async (req, res) => {
    const id = req.params.id
    const user = await models.Users.findOne({ where: {id} })
    const statCountDay = await models.StatCount.findOne({ where: { id: user.countDay}})
    const statCountMonth = await models.StatCount.findOne({ where: { id: user.countMonth}})
    res.send({ countHandwashingDay: statCountDay.countHandwashing, countHandwashingMonth: statCountMonth.countHandwashing})
}