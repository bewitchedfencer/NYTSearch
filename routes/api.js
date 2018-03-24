//dependencies
const router = require('express').Router();
const articleController = require('../controllers/articleController.js');

//saving an article
router.route('/save').post(articleController.saveNew);

//getting all saved articles
router.route('/savedArticles').get(articleController.getSaved);

//deleting a saved article
router.route('/deleteArticle').put(articleController.deleteArticle);