
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

module.exports = {
  client: createClient
};