const express = require('express')
const PageControllers = require('../controllers/PageControllers');
const RedirectMiddleware = require('../middlewares/RedirectMiddleware')

const router = express.Router();

router.get('/', PageControllers.getIndexPage);
router.get('/trainer', PageControllers.getTrainerPage);
router.get('/gallery', PageControllers.getGalleryPage);
router.get('/contact', PageControllers.getContactPage);
router.post('/contact', PageControllers.sendEmail);
router.get('/register', RedirectMiddleware, PageControllers.getRegisterPage);
router.get('/login', RedirectMiddleware, PageControllers.getLoginPage);

module.exports = router;