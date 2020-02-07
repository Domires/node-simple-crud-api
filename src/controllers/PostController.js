const Post = require('./../models/Post')

// create
function newPost(req, res) {
    Post.create({ ...req.body })
        .then(doc => res.status(200).json({ created: doc }))
        .catch(err => console.error('error', err))
}
// read
function readPosts(req, res) {
    Post.find()
        .then(doc => doc.length == false ? res.status(200).json('empty') : res.status(200).json({ posts: doc }))
        .catch(err => console.error('error', err))
}
// update
function updatePost(req, res) {
    Post.findByIdAndUpdate(
        req.params.id,
        { ...req.body },
        { new: true },
    )
        .then(doc => doc == null ? res.status(200).json('post not found') : res.status(200).json({ updated: doc }))
        .catch(err => console.error('error', err))
}
// delete
function deletePost(req, res) {
    Post.findByIdAndDelete(req.params.id)
        .then(doc => doc == null ? res.status(200).json('post not found') : res.status(200).json({ deleted: doc }))
        .catch(err => console.error('error', err))
}

module.exports = {
    newPost,
    readPosts,
    updatePost,
    deletePost
}
