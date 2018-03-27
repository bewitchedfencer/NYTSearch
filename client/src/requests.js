//require dependencies
const axios = require('axios');


module.exports = {
    
getArticles: data=> {
    console.log(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=2c99f7b00de64c928d565956a9b7132f&?q=${data.query}&?begin_date=${data.startDate}&?end_date=${data.endDate}&?sort=newest`);
    return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=2c99f7b00de64c928d565956a9b7132f&?q=${data.query}&?begin_date=${data.startDate}&?end_date=${data.endDate}&?sort=newest`);
},

saveArticle: article => {
    console.log("saveArticle");
    axios.post('/save', article);
},

getSaved: () => {
    console.log("saveD articles");
    axios.get('/savedArticles');
},

baleted: id => axios.put('/deleteArticle', id),

};