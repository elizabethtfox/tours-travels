import axios from "axios";

// Export an object containing methods we'll use for accessing the Yelp API

export default {
  
  getRestaurantsOfTerm: function(term, location) {
     return axios.get("https://api.yelp.com/v3/businesses/search?term=" + term + "&location=" + location);
    // return axios.get(BASEURL + term + "&location=" + location + APIKEY);

   
  },
  getBaseLocationList: function() {
    return axios.get("https://api.yelp.com/v3/businesses/list");
  }
};



 









