$(document).ready(function() {
  var services = ["Doctor","Dentist","Drug Store"];
  

// create the on-click*****************************************************
  $(document).on("click",".services-button",function() {
    $("#services").empty();
    $(".services-button").removeClass("active");
    $(this).addClass("active");

    var type = $(this).attr("data-type");
    var yelpApiKey = "oy6hhHsq3Rftgnl-vLTLO0vfP8VKnoGjq4a_AhrqhbfG4Q3Mothi8_PzIv_GmBntG9J0gBmx04lCPmhZi2xn4mJW_CRHtohDxdhGOoUS4GGErey7MesWAQLgAYWBXXYx";
    var queryURL = "https://cors-anywhere.herokuapp.com/http://api.yelp.com/v3/businesses/search?term=drugstores&location=Akron, OH";
        $.ajax({
            url: queryURL,
            headers: {
                "Authorization": "Bearer "+ yelpApiKey +"",
            },
            method: "GET",
            dataType: "json",
        }).then(function(response){
            Results = response;
            console.log("Results");
            console.log(Results.businesses);
        });
  });
});