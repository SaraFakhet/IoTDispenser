const models = require('./models')

function postArduino(req, res) {
    // req.body.id_arduino
}

async function createProduct(req, res) {
    await models.Product.create({
        idEntreprise: req.body.idEntreprise,
        //lastFill: ,
    })
    res.send(200)
}

async function getProduct(req, res) {
    const id = req.query.id
    const product = await models.Product.findOne({ id })
    res.send(product)
}

exports.postArduino = postArduino;
exports.createProduct = createProduct;
exports.getProduct = getProduct;