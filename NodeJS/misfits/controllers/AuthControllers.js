const bcrypt = require('bcrypt');

const User = require('../models/UserModel');

const createUser = async (req, res) => {
    try {
        await User.create(req.body);

        res.status(201).redirect('/login');
    } catch (error) {
        console.log(error)

        res.status(400).redirect('/register');
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (user) {
            bcrypt.compare(password, user.password, (err, same) => {
                if (same) {
                    // User Session
                    req.session.userID = user._id
                    res.status(200).redirect('/');
                } else {
                    res.status(400).redirect('/login');
                }
            });
        } else {
            res.status(400).redirect('/login');
        }
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error,
        });
    }
};

const logoutUser = async (req, res) => {
    req.session.destroy(() => {
        res.redirect('/')
    })
}

module.exports = { createUser, loginUser, logoutUser }