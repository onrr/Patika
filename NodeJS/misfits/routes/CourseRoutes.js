const express = require('express')
const CourseControllers = require('../controllers/CourseControllers')

const router = express.Router()

router.get('/', CourseControllers.getAllCourses)
router.get('/:slug', CourseControllers.getCourse);
router.post('/', CourseControllers.createCourse)


module.exports = router;