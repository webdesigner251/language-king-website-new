import express from 'express'
import {
  getTestimonialVideo,
  createOrUpdateTestimonialVideo,
  deleteTestimonialVideo
} from '../controller/testimonialVideoController.js'

const router = express.Router()

router.get('/testimonial-video', getTestimonialVideo)
router.post('/testimonial-video', createOrUpdateTestimonialVideo)
router.delete('/testimonial-video', deleteTestimonialVideo)

export default router
