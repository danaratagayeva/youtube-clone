import express from 'express'
import { verifyToken } from '../verifyToken.js'
import {
  addVideo,
  updateVideo,
  deleteVideo,
  getVideo,
  trend,
  random,
  sub,
} from '../controllers/video.js'

const router = express.Router()

//create a video

router.post('/', verifyToken, addVideo)

router.put('/:id', verifyToken, updateVideo)

router.delete('/:id', verifyToken, deleteVideo)

router.get('/find/:id', getVideo)

router.put('/view/:id')

router.get('/trend', trend)

router.get('/random', random)

router.get('/sub', verifyToken, sub)

export default router
