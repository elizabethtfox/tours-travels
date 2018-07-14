import axios from "axios";

export default {
  // Gets all lists
  getLists: function() {
    return axios.get("/api/lists");
  },
  // Gets the list with the given id
  getList: function(id) {
    return axios.get("/api/lists/" + id);
  },
  // Deletes the list with the given id
  deleteList: function(id) {
    return axios.delete("/api/lists/" + id);
  },
  // Saves a list to the database
  saveList: function(listData) {
    return axios.post("/api/lists", listData);
  }
};
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



 








