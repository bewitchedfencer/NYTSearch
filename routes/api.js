//dependencies
const router = require('express').Router();
const path = require('path');
const articleController = require('../controllers/articleController.js');

//saving an article
router.route('/save').post(articleController.saveNew),

//getting all saved articles
router.route('/savedArticles').get(articleController.getSaved),

//deleting a saved article
router.route('/deleteArticle').put(articleController.deleteArticle),

router.use(function(req, res) {
    console.log("*****banana****", path.join(__dirname, "../client/build/index.html"));
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

module.exports = router;