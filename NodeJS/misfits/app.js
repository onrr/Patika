const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const session = require('express-session')
const MongoStore = require('connect-mongo')

const PageRoutes = require('./routes/PageRoutes')
const UserRoutes = require('./routes/UserRoutes')
const CourseRoutes = require('./routes/CourseRoutes')

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

// Global Variable
global.userIN = null

// Middlewares
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
)
app.use(session({
  secret: 'secrey_key',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1/misfits-db' })
}))




// Routes
app.use('*', (req, res, next) => {
  userIN = req.session.userID
  next()
})
app.use('/', PageRoutes);
app.use('/users', UserRoutes);
app.use('/courses', CourseRoutes);


const PORT = 5000
app.listen(PORT, () => {
  console.log(`App started on: ${PORT}`)
});
