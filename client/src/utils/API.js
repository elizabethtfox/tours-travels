import axios from "axios";

// Export an object containing methods we'll use for accessing the Yelp API

export default {
  getRandomDog: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  getDogsOfBreed: function(breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },
  getBaseBreedsList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
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