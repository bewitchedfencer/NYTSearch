//require the articles model
const db = require("../models");

module.exports = {
//saves a new article to the database
    saveNew: function(req, res){
        db.Articles
        .create(req.body).then(data => res.json(data));
    },

    //gets the saved articles
    getSaved: function(req, res){
        db.Articles
        .find().then(data=> res.json(data));
    },


    //removes the article from the database
    deleteArticle: function(req, res){
        db.Articles
        .findByIdAndRemove({_id:req.body.id})
        .then(()=>res.send(`Article with id ${req.body.id} has been BALETED!`));
    }

};