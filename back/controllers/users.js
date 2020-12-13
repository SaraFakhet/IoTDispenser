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
    console.log("people : " + people);
    const user= await models.Users.findOne({where: {password, people: people}});

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