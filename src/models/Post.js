const { Schema, model } = require('mongoose')

const Post = model('Post', new Schema({
    title: {
        type: String
    },
    text: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
}))

module.exports = Post