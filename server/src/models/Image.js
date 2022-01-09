const { Schema, model } = require('mongoose')

const Image = new Schema({
    image: {
        type: String,
    }
})


module.exports = model('Image', Image)