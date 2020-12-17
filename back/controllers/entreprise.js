const models = require('./models')

exports.getEntreprise = async (req, res) => {
    const entreprise = models.Entreprise.findOne({ where: {id: req.params.idEntreprise }})
    res.send(entreprise)
}

exports.getAllEntreprise = async (req, res) => {
    const entreprises = models.Entreprise.findAll()
    res.send(entreprises)
}

exports.createEntreprise = async (res, req) => {
    await models.Entreprise.create({
        name: req.body.name,
        siret: req.body.siret,
    })
}
