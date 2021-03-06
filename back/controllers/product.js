const models = require('./models')

exports.postArduino = async (req, res) => {
    const idArduino = req.body.id
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
    const id = req.params.id
    const product = await models.Product.findOne({where: { id }})
    const quantityPerPush = 0.001
    res.send({product, lastQuantity: product.capacity - quantityPerPush * product.utilisation })
}

exports.refillProduct = async (req, res) => {
    const id = req.body.id
    await models.Product.update({
        utilisation: 0,
    }, { where: {id} })

    res.sendStatus(200)
}

exports.getAllProductsByIdEntreprise = async (req, res) => {
    const products = await models.Product.findAll({ where: { idEntreprise: req.params.idEntreprise }})
    res.send(products)
}