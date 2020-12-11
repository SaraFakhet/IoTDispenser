const models = require('./models')

exports.postArduino = async (req, res) => {
    console.log('GG CLEMOU TU AS REUSSI TON POST')
    const idArduino = req.query.idArduino
    await models.Product.increment('utilisation', { where: { idArduino }})
    res.sendStatus(200)
}

exports.createProduct = async (req, res) => {
    await models.Product.create({
        idArduino: req.body.idArduino,
        idEntreprise: req.body.idEntreprise,
    })
    res.send(200)
}

exports.getProduct = async (req, res) => {
    const id = req.query.id
    const product = await models.Product.findOne({ id })
    res.send(product)
}
