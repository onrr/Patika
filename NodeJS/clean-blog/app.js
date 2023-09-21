const express = require('express')
const mongoose = require('mongoose')

// const path = require('path')
// const ejs = require('ejs')
const methodOverride = require('method-override')

const postControllers = require('./controllers/postControllers')
const pageControllers = require('./controllers/pageControllers')

const app = express()
const port = 3000


// Connect DB
mongoose.connect('mongodb://127.0.0.1/cleanblog-test-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
})

// TEMPLATE ENGINES
app.set("view engine", "ejs")


// MIDDLEWARES
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method', {
    methods: ['POST', 'GET']
}))

// ROUTES
app.get('/', postControllers.getAllPosts)
app.get('/posts/:id', postControllers.getPost)
app.post('/posts', postControllers.createPost)
app.put('/posts/:id', postControllers.updatePost)
app.delete('/posts/:id', postControllers.deletePost)

app.get('/about', pageControllers.getAboutPage)
app.get('/add_post', pageControllers.getAddPostPage)
app.get('/post/edit/:id', pageControllers.getEditPage)


app.listen(port, () => {
    console.log(`Server ${port} listening..`)
})
