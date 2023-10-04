const bcrypt = require('bcrypt');

const User = require('../models/UserModel');
const Course = require('../models/CourseModel')

const createUser = async (req, res) => {
    try {
        await User.create(req.body);

        req.flash("success", "User created. Please log in")
        res.status(201).redirect('/login');
    } catch (error) {
        req.flash("error", "An error occurred while creating the user. Please try again.")
        res.status(400).redirect('/register');
    }
};

const loginUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = await User.findOne({ email });
        if (user) {
            bcrypt.compare(password, user.password, (err, same) => {
                if (same) {
                    // User Session
                    req.session.userID = user._id
                    req.flash("success", `${user.name}, Welcome`)
                    res.status(200).redirect('/users/profile');
                } else {
                    req.flash("error", "Incorrect your e-mail or password")
                    res.status(400).redirect('/login');
                }
            });
        } else {
            req.flash("error", "Incorrect your e-mail or password")
            res.status(400).redirect('/login');
        }
    } catch (error) {
        req.flash("error", `Something Wrong...: ${error}`)
        res.status(400).redirect('/login');
    }
};

const logoutUser = async (req, res) => {
    req.session.destroy(() => {
        res.redirect('/')
    })
}

const getProfile = async (req, res) => {
    const user = await User.findOne({ _id: req.session.userID }).populate('courses')
    const courses = await Course.find({user:req.session.userID})

    res.status(200).render('profile', {
        page_name: 'profile',
        user,
        courses
    })
}

module.exports = { createUser, loginUser, logoutUser, getProfile }