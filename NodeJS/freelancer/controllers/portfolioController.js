const Portfolio = require("../models/portfolioModel")
const fs = require("fs")

const getAllPortfolios = async (req, res) => {
  const page = req.query.page || 1
  const portfoliosPerPage = 3

  const totalPortfolios = await Portfolio.find().countDocuments()

  const portfolios = await Portfolio.find({})
    .sort("-dateCreated")
    .skip((page - 1) * portfoliosPerPage)
    .limit(portfoliosPerPage)

  res.render("index", {
    portfolios,
    current: page,
    pages: Math.ceil(totalPortfolios / portfoliosPerPage),
  })
}

const getPortfolio = async (req, res) => {
  const portfolio = await Portfolio.findById(req.params.id)
  res.render("portfolio", {
    portfolio,
  })
}

const createPortfolio = async (req, res) => {
  const uploadDir = "public/uploads"

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir)
  }

  let uploadeImage = req.files.image
  let uploadPath = __dirname + "/../public/uploads/" + uploadeImage.name

  uploadeImage.mv(uploadPath, async () => {
    await Portfolio.create({
      ...req.body,
      image: "/uploads/" + uploadeImage.name,
    })
    res.redirect("/")
  })
}

const updatePortfolio = async (req, res) => {
  const portfolio = await Portfolio.findOne({ _id: req.params.id })
  portfolio.title = req.body.title
  portfolio.description = req.body.description
  portfolio.save()

  res.redirect("/")
}

const deletePortfolio = async (req, res) => {
  const portfolio = await Portfolio.findOne({ _id: req.params.id })
  let deletedImage = __dirname + "/../public" + portfolio.image
  fs.unlinkSync(deletedImage)
  await Portfolio.findByIdAndRemove(req.params.id)
  res.redirect("/")
}

module.exports = {getAllPortfolios, getPortfolio, createPortfolio, updatePortfolio, deletePortfolio}