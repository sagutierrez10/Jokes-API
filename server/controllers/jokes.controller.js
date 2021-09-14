const Joke = require("../models/jokes.model");

module.exports.helloworld = (req,res)=>{
    res.json({message: "Hello World modularized"});
}

module.exports.findAllJokes = (req, res)=>{
    Joke.find()
        .then(allJokes=>{
            res.json({results: allJokes})
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.createNewJoke = (req, res)=>{
    Joke.create(req.body)
        .then(newJokeObj=>{
            res.json({results: newJokeObj})
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.findOneJoke = (req,res)=>{
    // console.log("trying to find one joke")
    // console.log(req.params)
    Joke.findOne({_id:req.params.id})
        .then(foundJoke=>{
            res.json({results: foundJoke})
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.updateExistingJoke = (req, res)=>{
    Joke.findOneAndUpdate(
        {_id: req.params.id}, 
        req.body,
        {new: true, runValidators: true}
    )
        .then(updatedJoke => res.json({results: updatedJoke}))
        .catch(err => { 
            res.json({err:err})
        })
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(deletedJoke => res.json({ result: deletedJoke }))
        .catch(err => { 
            res.json({err:err})
        })
}

module.exports.findRandomJoke = (req,res)=>{
    console.log("trying to find random joke")
    Joke.find()
        .then(allJokes=>{
            console.log("all jokes looks like this")
            let lengthOfAllJokes= allJokes.length;
            function getRandomInt(max){
                return Math.floor(Math.random() * max);
            }
            let randomIndex= getRandomInt(lengthOfAllJokes)
            console.log(allJokes[randomIndex])
            res.json({results: allJokes[randomIndex]})
        .catch(err=>{
            res.json({err:err})
        })
        })
}