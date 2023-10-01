const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')

const PageRoutes = require('./routes/PageRoutes')
const UserRoutes = require('./routes/UserRoutes')

const app = express()

// Connect DB
mongoose.connect('mongodb://127.0.0.1/misfits-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('DB CONNECTED!!')
}).catch((err) => {
    console.log(err)
})

// Template Engine
app.set('view engine', 'ejs')

// Middlewares
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(
    methodOverride('_method', {
      methods: ['POST', 'GET'],
    })
  )


// Routes
app.use('/', PageRoutes);
app.use('/users', UserRoutes);


const PORT = 5000
app.listen(PORT, () => {
  console.log(`App started on: ${PORT}`)
});
