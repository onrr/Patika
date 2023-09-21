const express = require("express")
const mongoose = require("mongoose")
const fileUpload = require("express-fileupload")
const methodOverride = require("method-override")
const ejs = require("ejs")

const { getAllPhotos, getPhoto, createPhoto, updatePhoto, deletePhoto, getEditPage } = require('./controllers/photoController')
const Photo = require("./models/photoModel")

const app = express()


// Connect DB
mongoose.connect('mongodb://127.0.0.1/agency-db', {
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
app.get("/", getAllPhotos)
app.get("/photos/:id", getPhoto)
app.post("/photos", createPhoto)
app.put("/photos/:id", updatePhoto)
app.delete("/photos/:id", deletePhoto)
app.get("/photos/edit/:id", async (req, res) => {
    const photo = await Photo.findOne({ _id: req.params.id })
    res.render("edit", {
        photo,
    })
})

const PORT = 5000
app.listen(PORT, () => {
    console.log("Server is running on", PORT)
})