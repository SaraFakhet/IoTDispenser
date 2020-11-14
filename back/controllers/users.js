const models = require('./models')

exports.getUsers = (req, res) => {
    res.send("It's me")
}

exports.createUser = async (req, res) => {
    const person = await models.Person.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        age: req.body.age,
    })
    console.log(person.id);
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

    await models.User.create({
        person: person.id,
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

    const user = await models.User.findOne({
        where: {
            password,
            include: [{
                attributes: {
                    exclude: ['password']
                },
                model: models.People,
                where: {
                    email
                }
            }]
        }
    })

    if (user === null) {
        res.sendStatus(404)
    }
    else {
        res.send(user)
    }
}