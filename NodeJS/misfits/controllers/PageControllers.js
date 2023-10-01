const Course = require('../models/CourseModel');

const getIndexPage = async (req, res) => {
  
  const courses = await Course.find().sort('-createdAt').limit(2);

  res.status(200).render('index', {
    page_name: 'index',
    courses,
  });
};

const getAboutPage = (req, res) => {
  res.status(200).render('about', {
    page_name: 'about',
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
module.exports = {getIndexPage, getAboutPage, getTrainerPage, getGalleryPage, getContactPage}