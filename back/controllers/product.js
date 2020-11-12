const models = require('./models')

exports.postArduino = (req, res) => {
    console.log('GG CLEMOU TU AS REUSSI TON POST')
    res.sendStatus(200)
}

exports.createProduct = async (req, res) => {
    await models.Product.create({
        idEntreprise: req.body.idEntreprise,
        //lastFill: ,
    })
    res.send(200)
}

exports.getProduct = async (req, res) => {
    const id = req.query.id
    const product = await models.Product.findOne({ id })
    res.send(product)
}
