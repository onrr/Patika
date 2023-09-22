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
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    }
})

const Portfolio = mongoose.model("Portfolio", PortfolioSchema)

module.exports = Portfolio;