const Post = require('./../models/Post')

// create
async function newPost(req, res) {
    await Post.create({ ...req.body })
        .then(doc => res.status(200).json({ created: doc }))
        .catch(err => console.error('error', err))
}
// read
async function readPosts(req, res) {
    await Post.find()
        .then(doc => doc.length == false ? res.status(200).json('empty') : res.status(200).json({ posts: doc }))
        .catch(err => console.error('error', err))
}
// update
async function updatePost(req, res) {
    await Post.findByIdAndUpdate(
        req.params.id,
        { ...req.body },
        { new: true },
    )
        .then(doc => doc == null ? res.status(200).json('post not found') : res.status(200).json({ updated: doc }))
        .catch(err => console.error('error', err))
}
// delete
async function deletePost(req, res) {
    await Post.findByIdAndDelete(req.params.id)
        .then(doc => doc == null ? res.status(200).json('post not found') : res.status(200).json({ deleted: doc }))
        .catch(err => console.error('error', err))
}

module.exports = {
    newPost,
    readPosts,
    updatePost,
    deletePost
}
