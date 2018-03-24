//require dependencies
const axios = require('axios');

function getArticles(data){
    //the parameters are being passed in as an object aka 'data'
    return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=2c99f7b00de64c928d565956a9b7132f&?q=${data.query}&?begin_date=${data.startDate}&?end_date=${data.endDate}&?sort=newest`);
};

function saveArticle(article){
    return axios.post('/save', article);
};

function getSaved(){
    return axios.get('/savedArticles');
};

function baleted(id){
    return axios.put('/deleteArticle', id);
}