const express = require('express')
const router = express.Router()

const multer  = require('multer')

const storage = multer.diskStorage({
  destination: './src/public',
  filename: function (req, file, cb) {
      return cb(null, Date.now() + '--' + file.originalname)
  }
});

const upload = multer({ storage: storage })


const adminController = require('../controllers/adminControllers')

router.get('/', adminController.getMainData)
router.post('/add', upload.single('image'), adminController.addPost)
router.get('/all-posts', adminController.getAllPosts)
router.get('/all-images', adminController.getAllImages)
router.get('/get-post', adminController.getPost)


module.exports = router