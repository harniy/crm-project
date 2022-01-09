const jwt = require('jsonwebtoken')
const { secret } = require('../config')

const Images = require("../models/Image")
const Posts = require("../models/Post")

class AdminControler {
    async getMainData(req, res) {
        const token = await req.headers.authorization.split(' ')[1]
        const decodedData = await jwt.verify(token, secret)

        return res.json({id: decodedData.id, roles: decodedData.roles})
    }

    async addPost(req, res) {
        try {
            const { title, info } = JSON.parse(req.body.info)
            const imageName = req.file.filename
    
            const postImage = new Images({image: imageName})
    
            postImage.save()
    
            const post = new Posts({
                title,
                info,
                image: postImage.image
            })
    
            post.save()

            res.json({message: 'Post created!'})
        } catch (e) {
            console.log(e)
        }
    }

    async getAllPosts(req, res) {
        const posts = await Posts.find()

        res.json({posts})
    }

    async getAllImages(req, res) {
        const images = await Images.find()

        res.json({images})
    }

    async getPost(req, res) {
        const postId = req.query.post

        const post = await Posts.findOne({_id: postId})

        res.json({post})
    }
}


module.exports = new AdminControler()