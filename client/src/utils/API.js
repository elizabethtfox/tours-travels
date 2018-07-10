import axios from "axios";

const BASEURL = "https://api.yelp.com/v3/businesses/search?term=";
const APIKEY = "Ff2DG34Ij4UNMiNjWk69X9me3l_bAQpqxas-EbRM3L9xqNWeQsdKYIhrfIcAHMpAlE-Q-HMxB-iDFLDehkpz1Zuvxs_lbIAX-kxiDVlyMrp7s_ZwMzTqSUiH2bk3W3Yx";



// //search request
// const searchRequest = {
//   term: "",
//   location: ""
// };
// Export an object containing methods we'll use for accessing the Yelp API

export default {
  // getRandomDog: function() {
  //   return axios.get("https://dog.ceo/api/breeds/image/random");
  // },
  getRestaurantsOfTerm: function(term, location) {
    //  return axios.get("https://api.yelp.com/v3/businesses/search?term=" + term + "&location=" + location);
    return axios.get(BASEURL + term + "&location=" + location + APIKEY);

   
  },
  getBaseLocationList: function() {
    return axios.get("https://api.yelp.com/v3/businesses/list");
  }
};


//yelp API//
// https://api.yelp.com/v3/businesses/search?term=healthy&location=atlanta

// Client ID
// 4j194aaGpZTqCxBW8ZuPeg


// API Key

// Ff2DG34Ij4UNMiNjWk69X9me3l_bAQpqxas-EbRM3L9xqNWeQsdKYIhrfIcAHMpAlE-Q-HMxB-iDFLDehkpz1Zuvxs_lbIAX-kxiDVlyMrp7s_ZwMzTqSUiH2bk3W3Yx


//In postman: has to include the word bearer before the API Key as shown below
// Bearer Ff2DG34Ij4UNMiNjWk69X9me3l_bAQpqxas-EbRM3L9xqNWeQsdKYIhrfIcAHMpAlE-Q-HMxB-iDFLDehkpz1Zuvxs_lbIAX-kxiDVlyMrp7s_ZwMzTqSUiH2bk3W3Yx