const Course = require('../models/CourseModel');
const User = require('../models/UserModel');


const getAllCourses = async (req, res) => {

    try {
        const courses = await Course.find()
        res.status(200).render('courses', {
            courses,
            page_name: 'courses',
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error,
        })
    }
}

const getCourse = async (req, res) => {

    try {
        const user = await User.findById(req.session.userID)
        const course = await Course.findOne({ slug: req.params.slug }).populate('user')

        res.status(200).render('course', {
            course,
            user,
            page_name: 'course',
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error,
        });
    }
};

const createCourse = async (req, res) => {

    try {
        const course = await Course.create({
            name: req.body.name,
            description: req.body.description,
            user: req.session.userID
        });

        res.status(201).redirect('/users/profile')
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error,
        });
    }
};

const enrollCourse = async (req, res) => {
    try {
        const user = await User.findById(req.session.userID)
        await user.courses.push({ _id:req.body.course_id })
        await user.save()

        res.status(200).redirect('/users/profile')

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error
        })
    }
}

const releaseCourse = async (req, res) => {
    try {
        const user = await User.findById(req.session.userID)
        await user.courses.pull({ _id:req.body.course_id })
        await user.save()

        res.status(200).redirect('/users/profile')

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error
        })
    }
}

module.exports = { getAllCourses, getCourse, createCourse, enrollCourse, releaseCourse }
