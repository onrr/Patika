const express = require('express')

const AuthControllers = require('../controllers/AuthControllers');

const router = express.Router();

router.post('/signup', AuthControllers.createUser);
router.post('/login', AuthControllers.loginUser);
router.get('/logout', AuthControllers.logoutUser);
router.get('/profile', AuthControllers.getProfile);


module.exports = router;