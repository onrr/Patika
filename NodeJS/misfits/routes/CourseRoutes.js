const express = require('express')

const CourseControllers = require('../controllers/CourseControllers')
const RoleMiddleware = require('../middlewares/RoleMiddleware')

const router = express.Router()

router.get('/', CourseControllers.getAllCourses)
router.get('/:slug', CourseControllers.getCourse);
router.delete('/:slug', CourseControllers.deleteCourse);
router.put('/:slug', CourseControllers.updateCourse);
router.post('/enroll', CourseControllers.enrollCourse);
router.post('/release', CourseControllers.releaseCourse);
router.post('/', RoleMiddleware(["teacher"]), CourseControllers.createCourse)


module.exports = router;