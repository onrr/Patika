const Post = require('../models/Post')

exports.getAboutPage = (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'temp/index.html'))
    res.render('about')
}

exports.getAddPostPage = (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'temp/index.html'))
    res.render('add_post')
}

exports.getEditPage = async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id })
    res.render('edit', {
        post
    })
}