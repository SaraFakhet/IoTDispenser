const models = require('./models')

exports.getEntreprise = async (req, res) => {
    const entreprise = await models.Entreprise.findOne({ where: {id: req.params.idEntreprise }})
    res.send(entreprise)
}

exports.getAllEntreprise = async (req, res) => {
    const entreprises = await models.Entreprise.findAll()
    res.send(entreprises)
}

exports.createEntreprise = async (req, res) => {
    const entreprise = await models.Entreprise.create({
        name: req.body.name,
        siret: req.body.siret,
    })
    res.send(entreprise);
}
