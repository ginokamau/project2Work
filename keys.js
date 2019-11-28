console.log("this is loaded");

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};
console.log("this is loaded");

exports.googleMapsApi = {
    key: process.env.GOOGLEMAPS_KEY
};
console.log("this is loaded");

exports.yelpApi = {
    key: process.env.YELP_KEY
};
console.log("this is loaded")

exports.recipesApi = {
    key: process.env.RECIPES_KEY
};
