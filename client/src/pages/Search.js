import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";


var config = {
  headers: {'Authorization': 'Bearer API key'},
  params: {
    term: 'tacos',
    location: 'main 123st'
  }
};


// class Search extends Component {
//   state = {
//     search: "",
//     location: [],
//     term: [],
//     results: [],
//     error: ""
//   };

class YelpClient {
  constructor(apiKey){
    this.apiKey = apiKey;
  }
  
  search(parameters){
    return _send({
      url: 'https://api.yelp.com/v3/businesses/search',
      query: parameters,
      bearerToken: this.apiKey
    });
  }
  
}

const createClient = (apiKey) => {
  return new YelpClient(apiKey);
};



  // When the component mounts, get a list of all available base restaurants and update this.state.restaurants
  componentDidMount() {
    axios.get('https://api.yelp.com/v3/businesses/search', config)
    .then(response => console.log(response));
  }

  // handleInputChange = event => {
  //   this.setState({ search: event.target.value });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   API.getRestaurantsOfTerm(this.state.search)
  //     .then(res => {
  //       if (res.data.status === "error") {
  //         throw new Error(res.data.message);
  //       }
  //       this.setState({ results: res.data.message, error: "" });
  //     })
  //     .catch(err => this.setState({ error: err.message }));
  // };

  render(){
    return (
      <View>
        <Text> My first yelp authentication request </Text>
      </View>
    );
  }
}
  // render() {
  //   return (
  //     <div>
  //       <Container style={{ minHeight: "80%" }}>
  //         <h1 className="text-center">Search By Restaurant Type!</h1>
  //         <Alert
  //           type="danger"
  //           style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
  //         >
  //           {this.state.error}
  //         </Alert>
  //         <SearchForm
  //           handleFormSubmit={this.handleFormSubmit}
  //           handleInputChange={this.handleInputChange}
  //           location={this.state.location}
  //         />
  //         <SearchResults results={this.state.results} />
  //       </Container>
  //     </div>
  //   );
  // }
// }
module.exports = {
  client: createClient
};

export default Search;
