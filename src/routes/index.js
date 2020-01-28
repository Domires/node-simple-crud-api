const PostController = require('../controllers/PostController')

const router = require('express').Router()

// create read update delete
router.post('/new-post', PostController.newPost) // create
router.get('/posts', PostController.readPosts) // read
router.put('/update-post/:id', PostController.updatePost) // update
router.delete('/delete-post/:id', PostController.deletePost) // delete

module.exports = router