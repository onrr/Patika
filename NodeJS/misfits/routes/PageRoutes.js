const express = require('express')
const PageControllers = require('../controllers/PageControllers');


const router = express.Router();

router.get('/', PageControllers.getIndexPage);
router.get('/about', PageControllers.getAboutPage);
router.get('/trainer', PageControllers.getTrainerPage);
router.get('/gallery', PageControllers.getGalleryPage);
router.get('/contact', PageControllers.getContactPage);


module.exports = router;