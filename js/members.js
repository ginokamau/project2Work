$(document).ready(function() {
  $('#doctor').click("submit", findDoctor);
  function findDoctor(){
    // yelp works
    var zipCode = $('#zip').val();
    console.log(zipCode);
    var yelpApiKey = "oy6hhHsq3Rftgnl-vLTLO0vfP8VKnoGjq4a_AhrqhbfG4Q3Mothi8_PzIv_GmBntG9J0gBmx04lCPmhZi2xn4mJW_CRHtohDxdhGOoUS4GGErey7MesWAQLgAYWBXXYx";
    var queryURL = "https://cors-anywhere.herokuapp.com/http://api.yelp.com/v3/businesses/search?term=doctors&location="+zipCode;
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
            for (var i = 1; i < 6; i ++){
              console.log(Results.businesses[i].name);
              console.log(Results.businesses[i].location.address1);
              console.log(Results.businesses[i].location.city);
              console.log(Results.businesses[i].location.zip_code);
              console.log(Results.businesses[i].phone);
              console.log(Results.businesses[i].url);

             
              $(".servicesResults").append(i+" Business Name:     "+Results.businesses[i].name);
              $(".servicesResults").append("<br />Business Address:     "+Results.businesses[i].address1);
              $(".servicesResults").append("<br />Business City:     "+Results.businesses[i].location.city);
              $(".servicesResults").append("<br />Business ZipCode:     "+Results.businesses[i].location.zip_code);
              $(".servicesResults").append("<br />Business Phone:     "+Results.businesses[i].phone);
              $(".servicesResults").append("<br /><a href='"+Results.businesses[i].url+"' target='_blank'>View Yelp Reviews</a>");
              $(".servicesResults").append("<br><hr><br>");
            }
          });
        }

        $('#dentist').click("submit", findDentist);
        function findDentist(){
          // yelp works
          var zipCode = $('#zip').val();
          console.log(zipCode);
          var yelpApiKey = "oy6hhHsq3Rftgnl-vLTLO0vfP8VKnoGjq4a_AhrqhbfG4Q3Mothi8_PzIv_GmBntG9J0gBmx04lCPmhZi2xn4mJW_CRHtohDxdhGOoUS4GGErey7MesWAQLgAYWBXXYx";
          var queryURL = "https://cors-anywhere.herokuapp.com/http://api.yelp.com/v3/businesses/search?term=dentists&location="+zipCode;
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
                  for (var i = 1; i < 6; i ++){
                    console.log(Results.businesses[i].name);
                    console.log(Results.businesses[i].location.address1);
                    console.log(Results.businesses[i].location.city);
                    console.log(Results.businesses[i].location.zip_code);
                    console.log(Results.businesses[i].phone);
      
                   
                    $(".servicesResults").append(i+" Business Name:     "+Results.businesses[i].name);
                    $(".servicesResults").append("<br />Business Address:     "+Results.businesses[i].address1);
                    $(".servicesResults").append("<br />Business City:     "+Results.businesses[i].location.city);
                    $(".servicesResults").append("<br />Business ZipCode:     "+Results.businesses[i].location.zip_code);
                    $(".servicesResults").append("<br />Business Phone:     "+Results.businesses[i].phone);
                    $(".servicesResults").append("<br /><a href='"+Results.businesses[i].url+"' target='_blank'>View Yelp Reviews</a>");
                    $(".servicesResults").append("<br><hr><br>");
                  }
                });
              }


              $('#drugstore').click("submit", findDrugstore);
              function findDrugstore(){
                // yelp works
                var zipCode = $('#zip').val();
                console.log(zipCode);
                var yelpApiKey = "oy6hhHsq3Rftgnl-vLTLO0vfP8VKnoGjq4a_AhrqhbfG4Q3Mothi8_PzIv_GmBntG9J0gBmx04lCPmhZi2xn4mJW_CRHtohDxdhGOoUS4GGErey7MesWAQLgAYWBXXYx";
                var queryURL = "https://cors-anywhere.herokuapp.com/http://api.yelp.com/v3/businesses/search?term=drugstores&location="+zipCode;
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
                        for (var i = 1; i < 6; i ++){
                          console.log(Results.businesses[i].name);
                          console.log(Results.businesses[i].location.address1);
                          console.log(Results.businesses[i].location.city);
                          console.log(Results.businesses[i].location.zip_code);
                          console.log(Results.businesses[i].phone);
            
                         
                          $(".servicesResults").append(i+" Business Name:     "+Results.businesses[i].name);
                          $(".servicesResults").append("<br />Business Address:     "+Results.businesses[i].address1);
                          $(".servicesResults").append("<br />Business City:     "+Results.businesses[i].location.city);
                          $(".servicesResults").append("<br />Business ZipCode:     "+Results.businesses[i].location.zip_code);
                          $(".servicesResults").append("<br />Business Phone:     "+Results.businesses[i].phone);
                          $(".servicesResults").append("<br /><a href='"+Results.businesses[i].url+"' target='_blank'>View Yelp Reviews</a>");
                          $(".servicesResults").append("<br><hr><br>");
                        }
                      });
                    }







      });

      