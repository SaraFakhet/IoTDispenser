const models = require('./models')

exports.getPeople = async (req, res) => {
    const people = await models.People.findOne({where: { id: req.query.id }})
    res.send(people)
}