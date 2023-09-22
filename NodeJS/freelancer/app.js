const express = require("express")
const mongoose = require("mongoose")
const fileUpload = require("express-fileupload")
const methodOverride = require("method-override")
const ejs = require("ejs")

const {getAllPortfolios, getPortfolio, createPortfolio, updatePortfolio, deletePortfolio} = require('./controllers/portfolioController')
const Portfolio = require("./models/portfolioModel")

const app = express()


// Connect DB
mongoose.connect('mongodb://127.0.0.1/freelancer-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('DB CONNECTED!!')
}).catch((err) => {
    console.log(err)
})

// Template Engine
app.set("view engine", "ejs")

// Middlewares
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(fileUpload())
app.use(
    methodOverride("_method", {
        methods: ["POST", "GET"],
    })
)

// Routes
app.get("/", getAllPortfolios)
app.get("/portfolios/:id", getPortfolio)
app.post("/portfolios", createPortfolio)
app.put("/portfolios/:id", updatePortfolio)
app.delete("/portfolios/:id", deletePortfolio)
app.get("/portfolios/edit/:id", async (req, res) => {
    const portfolio = await Portfolio.findOne({ _id: req.params.id })
    res.render("edit", {
        portfolios: portfolio,
    })
})

const PORT = 5000
app.listen(PORT, () => {
    console.log("Server is running on", PORT)
})