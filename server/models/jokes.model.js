const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema({
    setup:{
        type: String,
        required:[true, "Joke content is required!"],
        min: [10,"Setup must be at least 10 characters long"]
    },
    punchine: {
        type: String,
        required:[true, "Punchine is required"],
        min: [3, "Punchnie must be at least 3 characters"]
    }
});

const Joke = mongoose.model('Joke', JokesSchema);

module.exports = Joke;