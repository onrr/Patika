const Course = require('../models/CourseModel');
const User = require('../models/UserModel');


const getAllCourses = async (req, res) => {

    try {
        
        const keywords = req.query.search
        
        let filter = {}
        if (keywords) {
            filter = {name: keywords}
        }
        if (!keywords) {
            filter.name = ""
        }
        
        const courses = await Course.find({
            $or: [
                {name: { $regex: '.*' + filter.name + '.*', $options: 'i'}}
            ]
        }).sort('-createdAt').populate('user')

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

        req.flash("success", `${course.name} has been created successfully`)

        res.status(201).redirect('/users/profile')
    } catch (error) {
        req.flash("error", `Something Wrong...: ${error}`)
        res.status(400).redirect('/users/profile')
    }
};

const enrollCourse = async (req, res) => {
    try {
        const user = await User.findById(req.session.userID)
        await user.courses.push({ _id: req.body.course_id })
        await user.save()

        req.flash("success", `Successfully enrolled in the course`)
        res.status(200).redirect('/users/profile')

    } catch (error) {
        req.flash("error", `An error occurred while enrolled in the course.`)
        res.status(400).redirect('/courses')
    }
}

const releaseCourse = async (req, res) => {
    try {
        const user = await User.findById(req.session.userID)
        await user.courses.pull({ _id: req.body.course_id })
        await user.save()

        req.flash("success", `Successfully released the course`)
        res.status(200).redirect('/users/profile')

    } catch (error) {
        req.flash("error", `An error occurred while enrolled for the course.`)
        res.status(400).redirect('/users/profile')
    }
}

const deleteCourse = async (req, res) => {
    try {
        await Course.findOneAndRemove({ slug: req.params.slug })

        res.status(200).redirect('/users/profile')

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error
        })
    }
}

const updateCourse = async (req, res) => {
    try {
        const course = await Course.findOne({ slug: req.params.slug })
        course.name = req.body.name
        course.description = req.body.description
        course.save()

        res.status(200).redirect('/users/profile')

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error
        })
    }
}


module.exports = { getAllCourses, getCourse, createCourse, enrollCourse, releaseCourse, deleteCourse, updateCourse }
