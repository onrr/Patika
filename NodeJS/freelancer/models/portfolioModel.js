const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const PortfolioSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    }
})

const Portfolio = mongoose.model("Portfolie", PortfolioSchema)

module.exports = Portfolio;