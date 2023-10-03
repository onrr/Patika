const Course = require('../models/CourseModel');

const getIndexPage = (req, res) => {
  console.log(req.session.userID)
  res.status(200).render('index', {
    page_name: 'index',
  });
};

const getCoursesPage = async (req, res) => {
  const courses = await Course.find().sort('-createdAt');
  
  res.status(200).render('courses', {
    page_name: 'courses',
    courses
  });
};

const getTrainerPage = (req, res) => {
  res.status(200).render('trainer', {
    page_name: 'trainer',
  });
};

const getGalleryPage = (req, res) => {
  res.status(200).render('gallery', {
    page_name: 'gallery',
  });
};

const getContactPage = (req, res) => {
  res.status(200).render('contact', {
    page_name: 'contact',
  });
};

const getRegisterPage = (req, res) => {
  res.status(200).render('register', {
    page_name: 'register',
  });
};

const getLoginPage = (req, res) => {
  res.status(200).render('login', {
    page_name: 'login',
  });
};


module.exports = {getIndexPage, getCoursesPage, getTrainerPage, getGalleryPage, getContactPage, getLoginPage, getRegisterPage}