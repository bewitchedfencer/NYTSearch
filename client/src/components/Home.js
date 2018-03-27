import React, {Component} from 'react';
import Panel from "./Panel.js";
import Button from "./Button.js";
import Input from "./Input.js";
import ArticleBox from "./ArticleBox.js";
import ArticleItem from "./ArticleItem.js";
import API from "../requests.js";

class Home extends Component{
    state = {
        query : "",
        endDate : "",
        startDate : "",
        articles : [],
        savedArticles : []
    };

    // componentDidMount = () => {
    //     // let alreadySaved = API.getSaved();
    //     this.setState({
    //         savedArticles:alreadySaved
    //     });
    // };

    handleInputChange = event => {
        console.log("handleInputChange");
        const {name, value} = event.target;
        this.setState({
            [name]:value
        });
    };

    handleFormSubmit = event => {
        console.log("handleFormSubmit");
        event.preventDefault();
        const requestForArticles = {
            query:this.state.query,
            endDate:this.state.endDate,
            startDate:this.state.startDate
        };
        console.log("requestForArticles:", requestForArticles);
        API.getArticles(requestForArticles)
        .then(data => {
            // console.log(data);
            this.setState({articles:data.data.response.docs})
        });
    };

    handleSaveSubmit = event => {
        event.preventDefault();
        const savedArt = {
            title:this.state.articles.headline.main,
            url:this.state.article.web_url,
            date:this.state.article.pub_date
        };
        API.savedArticle(savedArt);
    };

    handleDelete = (event, id) => {
        event.preventDefault();
        API.baleted(id);
    };
    render() {
        return (
            <div className="container fluid">
                <div className="jumbotron">
                    <h1>New York Times Article Scrubber</h1>
                    <h3>Search for and save articles of interest</h3>
                </div>
                <Panel panelHeading="Search">
                    <form>
                        <h4>Topic</h4>
                        <br/>
                        <Input
                            value={this.state.query}
                            onChange={this.handleInputChange}
                            name="query"
                            placeholder="Topic"
                        />
                        <br/>
                        <h4>Start Date</h4>
                        <br/>
                        <Input
                            value={this.state.startDate}
                            onChange={this.handleInputChange}
                            name="startDate"
                            placeholder="Start Date"
                        />
                        <br/>
                        <h4>End Date</h4>
                        <br/>
                        <Input
                            value={this.state.endDate}
                            onChange={this.handleInputChange}
                            name="endDate"
                            placeholder="End Date"
                        />
                        <br/>
                        <Button name="SearchBtn" buttonType ={"submit"} handleFormSubmit={this.handleFormSubmit}>Search</Button>
                    </form>    
                </Panel>
                <Panel panelHeading="Results">
                {this.state.articles.length ? (
                    <ArticleBox>
                        {this.state.articles.map(article => (
                            <ArticleItem key={article._id}>
                                <a href={article.web_url}><span><h3><strong>{article.headline.main}</strong></h3> <h4>{article.pub_date}</h4></span></a>
                                <Button onClick={()=>this.handleSaveSubmit()}>Save</Button>
                            </ArticleItem>
                        ))}
                    </ArticleBox>
                ) : (
                    <h3>Search to find more articles to save.</h3>
                )}
                </Panel>
                {/* <Panel panelHeading="Saved Articles">
                {this.state.savedArticles.length ? (
                    <ArticleBox>
                        {this.state.savedArticles.map(article => (
                            <ArticleItem key={article._id}>
                                <a href={article.url}><span><h3><strong>{article.title}</strong></h3> <h4>{article.date}</h4></span></a>
                                <Button onClick={id=>this.handleDelete(id)}>Remove</Button>
                            </ArticleItem>
                        ))}
                    </ArticleBox>
                ):(
                    <h3>Save more articles for later.</h3>
                )};
                </Panel> */}
            </div>
    )}
};

export default Home;