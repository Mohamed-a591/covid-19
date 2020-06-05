 /*global console , alert , prompt , amount*/

 
var ipcountry = document.getElementById("ipcountry"),
    country ="egypt";

$.getJSON("https://api.covid19api.com/summary",function(data){
    if(country == "egypt")
    {
        for(i=0 ; i<248 ; i++)
        {
            if(country == data.Countries[i].Slug | country == data.Countries[i].Country | country == data.Countries[i].CountryCode)
            {
                
                document.getElementById("for-searsh").innerHTML  =
                "<div class='col-3 text-center' >"+
                    "<div>" +
                        "<img  src='https://www.countryflags.io/" + data.Countries[i].CountryCode + "/shiny/48.png'  >"+
                        "<h1>" + data.Countries[i].Country + "</h1>" +
                    "</div>" +
                "</div>" +
                "<div class='col-9'>" +
                    "<div class='row'>" +
                        "<div class='col-4 text-center'>" +
                            "<div class='mb-5'>" +
                                "<i class=''>" + data.Countries[i].TotalConfirmed + "</i>" +
                                "<p class=' mt-3'>Total Confirmed</p>" +
                            "</div>" +
                            
                            "<div>"  +
                                "<i class=' '>" + data.Countries[i].NewConfirmed  + "</i>" +
                                "<p class=' mt-3'>New Confirmed</p>" +
                            "</div>" +
                        "</div>" +
                        "<div class='col-4 text-center'>" +
                            "<div class='mb-5'>" +
                                "<i class=' '>" + data.Countries[i].TotalRecovered + "</i>" +
                                "<p class=' mt-3'> Total Recovered </p>" +
                            "</div>" +

                            "<div>" + 
                                "<i class=' '>" + data.Countries[i].NewRecovered + "</i>" +
                                "<p class=' mt-3'>New Recovered</p>" +
                            "</div>" +
                        "</div>" +
                        "<div class='col-4 text-center'>" +
                            "<div class='mb-5'>" +
                                "<i class=' '>" + data.Countries[i].TotalDeaths   + "</i>" +
                                "<p class=' mt-3'>Total Deaths</p>" +
                            "</div>" +

                            "<div>" +
                                "<i class=' '>" + data.Countries[i].NewDeaths   + "</i>" +
                                "<p class=' mt-3'> New Deaths </p>"+
                            "</div>" +
                        "</div>" + 
                        
                    "</div>" +
                "</div>" +
                "<div class='col-12 pt-2'>" +
                    "<p class=' text-left'>Date : " +  data.Countries[i].Date + "</p>" +
                "</div>" ;
            
                break ;
            }
        }
        
    }
});

ipcountry.onkeyup =function(){

    country = ipcountry.value;

    $.getJSON("https://api.covid19api.com/summary",function(data){
    
    console.log(data);
    for(i=0 ; i<248 ; i++)
    {
        if(country == data.Countries[i].Slug | country == data.Countries[i].Country | country == data.Countries[i].CountryCode)
        {
            
            document.getElementById("for-searsh").innerHTML  =  "<div class='col-3 text-center' >"+
            "<div >" +
                "<img src='https://www.countryflags.io/" + data.Countries[i].CountryCode + "/shiny/48.png'  >"+
                "<h1>" + data.Countries[i].Country + "</h1>" +
            "</div>" +
        "</div>" +
        "<div class='col-9'>" +
            "<div class='row'>" +
                "<div class='col-4 text-center'>" +
                    "<div class='mb-5' >" +
                        "<i class=''>" + data.Countries[i].TotalConfirmed + "</i>" +
                        "<p class=' mt-3'>Total Confirmed</p>" +
                    "</div>" +
                    
                    "<div>"  +
                        "<i class=' '>" + data.Countries[i].NewConfirmed  + "</i>" +
                        "<p class=' mt-3'>New Confirmed</p>" +
                    "</div>" +
                "</div>" +
                "<div class='col-4 text-center'>" +
                    "<div class='mb-5'>" +
                        "<i class=' '>" + data.Countries[i].TotalRecovered + "</i>" +
                        "<p class=' mt-3'> Total Recovered </p>" +
                    "</div>" +

                    "<div>" + 
                        "<i class=' '>" + data.Countries[i].NewRecovered + "</i>" +
                        "<p class=' mt-3'>New Recovered</p>" +
                    "</div>" +
                "</div>" +
                "<div class='col-4 text-center'>" +
                    "<div class='mb-5'>" +
                        "<i class=' '>" + data.Countries[i].TotalDeaths   + "</i>" +
                        "<p class=' mt-3'>Total Deaths</p>" +
                    "</div>" +

                    "<div>" +
                        "<i class=' '>" + data.Countries[i].NewDeaths   + "</i>" +
                        "<p class=' mt-3'> New Deaths </p>"+
                    "</div>" +
                "</div>" + 
            "</div>" +
        "</div>" ;;
            break ;
        }
    }
});}



$.getJSON("https://api.covid19api.com/summary",function(data){
    console.log(data);

    for(i=0 ; i<248 ; i++)
    {  
        document.getElementById("all").innerHTML += "<div class='col-3 my-4 text-center '>" +
        "<div class=' p-2 cell h-100'>" +
        "<img src='https://www.countryflags.io/" + data.Countries[i].CountryCode   +"/shiny/48.png' class='rounded'>" +"</img>"+
        "<h1>" + data.Countries[i].Country       + "</h1>" + 
        "<hr>"+
        "<p>" +"<span>" +  "Total Confirmed : "  + "</span>"  + data.Countries[i].TotalConfirmed  + "</p>" +
        "<p>" +"<span>" +  "Total Recovered : "  + "</span>"  + data.Countries[i].TotalRecovered  + "</p>" +
        "<p>" +"<span>" +  "NewRecovered : "     + "</span>"  + data.Countries[i].NewRecovered    + "</p>" + 
        "<p>" +"<span>" +  "Total Deaths : "     + "</span>"  + data.Countries[i].TotalDeaths     + "</p>" +
        "<p>" +"<span>" +  "NewDeaths : "        + "</span>"  + data.Countries[i].NewDeaths       + "</p>" +
        "</div>" +"</div>";
            
    }
});  
    //var country_cod="EG";
    //curl --location --request GET 'https://api.covid19api.com/dayone/country/south-africa/status/confirmed/live'
