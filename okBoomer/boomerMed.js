// BoomerSandwichApp JavaScript

//	Variables
var googleMapApiKey = "AIzaSyD5fVIBa-2HNOA0W4Mii2F36eYCjT6p8Tw";
var yelpApiKey = "FwKfl6K6MbtntrK262jzahFGE8n2ocOj3d4TKpUH5QRmw4dCYQuINYYgOJd17q0-m3OTF-51QhggNTabSGjOnKUGS_sbeUYcIDD_f_gHUnkWYpCnti7pD9U_wDLcXXYx";
var recipesApiKey = "74fb628d";
var service;
var zipCode = 0;
var serviceType = "";

//	when services link is clicked
 $(".service").on("click",function(){
    $(".service").removeClass("btn-danger").addClass("btn-primary");
    serviceType = $(this).attr("value");
    console.log(serviceType);
    $(this).removeClass("btn-primary").addClass("btn-danger");
});

// Google Places API --Nearby Search: Search nearby specific area. 'coordinates'--
function getBusinessCoord(){
    var searchThis = selectedBusiness;
    var serviceResults;
    var latitude = 41.5084;
    var longitude = -81.6076;
    var businessRadius = 8000;
    var queryURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+latitude+","+longitude+"&radius="+businessRadius+"&keyword="+searchThis+"&type="+serviceType+"&key="+googleMapApiKey;
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){
        console.log("---------------------------------------");
        console.log("Google Places Nearby Search of :"+searchThis);
        console.log(response);
        console.log("---------------------------------------");
    });
};

//Function for clicking submit on options moda;
$("#submit").on("click", function(){
    zipCode = $("#zip").val();
    //Checks using regex and string legnth for proper zipcode
    if( zipCode.length == 5 && /^[0-9]+$/.test(zipCode)){
        var radius = 10;
        ajaxCallBusiness(zipCode, radius);
    }else{
        alert("Invalid zip code, please try again.");
    }
});

//Function ffor tmsapi for movies playing locally
function ajaxCallBusiness (zipCode, radius){
    var offsetBy = 0;
    var queryURL = "https://cors-anywhere.herokuapp.com/http://api.yelp.com/v3/businesses/search?term="+searchThis+"&location="+location+"&radius="+searchRadius+"&price="+price+"&categories="+foodCategory+"&sort_by=distance&limit=20&locale=en_US";
    $.ajax({
        url: queryURL,
        headers: {
            "Authorization": "Bearer "+yelpApiKey+"",
        },
        method: "GET",
        dataType: "json",
    }).then(function(response){
        serviceResults = response;
        console.log("Service Results");
        console.log(serviceResults);
        createServiceCard();
    });
}