const { Schema, model } = require('mongoose')


const Post = new Schema({
    title: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    },
    image: {
        type: String,
        ref: 'Image'
    }
})


module.exports = model('Post', Post)