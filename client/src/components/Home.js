import API from "../requests.js";

class Home extends Component{
    state = {
        query = "",
        endDate = Date.now,
        startDate = Date.now,
        articles = []
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]:value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const requestForArticles = {
            query:this.state.query,
            endDate:this.state.endDate,
            startDate:this.state.startDate
        };
        API.getArticles(requestForArticles)
        .then(data => 
        setState({
            articles:data
        }));
    };
};