const Mail = require('../models/MailModel');

const getIndexPage = (req, res) => {
  console.log(req.session.userID)
  res.status(200).render('index', {
    page_name: 'index',
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

const sendEmail = async (req, res) => {
  try {
    await Mail.create({
      name: req.body.name,
      email: req.body.email,
      number: req.body.number,
      subject: req.body.subject,
      message: req.body.message,
    });

    req.flash("success", "Received your message successfully")

    res.status(201).redirect('/contact')
  } catch (error) {
    req.flash("error", `Something Wrong...: ${error}`)
    res.status(400).redirect('/contact')
  }
}

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


module.exports = { getIndexPage, getTrainerPage, getGalleryPage, getContactPage, sendEmail, getLoginPage, getRegisterPage }