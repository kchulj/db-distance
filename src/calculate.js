function calculate(x, y)
{
    var x = document.getElementById(x);
    var y = document.getElementById(y);
    y.innerHTML = "";

    if(x.value == "Berlin"){
        var arr = ["-Select a city-","Bremen via Hamburg","Bremen via Hannover","Erfurt (Sprinter)","Frankfurt am Main (Sprinter)",
        "Hamburg","Hannover","Osnabruck"];
    }

    else if(x.value == "Aachen"){
        var arr = ["-Select a city-","Koln"];
    }

    else if(x.value == "Bochum"){
        var arr = ["-Select a city-","Bremen","Dortmund","Essen"];
    }

    else if(x.value == "Bonn"){
        var arr = ["-Select a city-","Duisburg","Dusseldorf","Dusseldorf Flughafen","Essen","Koblenz","Koln"];
    }

    else if(x.value == "Bremen"){
        var arr = ["-Select a city-","Berlin via Hamburg","Berlin via Hannover","Bochum","Dortmund",
        "Duisburg via Gelsenkirchen","Duisburg via Dortmund",
        "Dusseldorf via Gelsenkirchen","Dusseldorf via Dortmund",
        "Dusseldorf Flughafen via Gelsenkirchen","Dusseldorf Flughafen via Dortmund",
        "Essen via Gelsenkirchen","Essen via Dortmund",
        "Frankfurt am Main","Frankfurt Flughafen","Hamburg","Hannover","Munster","Osnabruck"];
    }

    else if(x.value == "Dortmund"){
        var arr = ["-Select a city-","Bochum","Bremen","Munster"];
    }

    else if(x.value == "Duisburg"){
        var arr = ["-Select a city-","Bremen via Gelsenkirchen","Bremen via Dortmund",
        "Bonn","Dusseldorf","Dusseldorf Flughafen","Essen","Koblenz","Koln",
        "Osnabruck via Gelsenkirchen","Osnabruck via Dortmund",];
    }

    else if(x.value == "Dusseldorf"){
        var arr = ["-Select a city-","Bonn","Bremen via Gelsenkirchen","Bremen via Dortmund",
        "Duisburg","Dusseldorf Flughafen","Essen","Koblenz","Koln","Osnabruck via Gelsenkirchen","Osnabruck via Dortmund",];
    }

    else if(x.value == "Dusseldorf Flughafen"){
        var arr = ["-Select a city-","Bonn","Bremen via Gelsenkirchen","Bremen via Dortmund",
        "Duisburg","Dusseldorf","Essen","Koblenz","Koln"];
    }

    else if(x.value == "Erfurt"){
        var arr = ["-Select a city-","Berlin (Sprinter)","Frankfurt am Main (Sprinter)","Ingolstadt","Munchen","Nurnberg"];
    }

    else if(x.value == "Essen"){
        var arr = ["-Select a city-","Bochum","Bonn","Bremen via Gelsenkirchen","Bremen via Dortmund",
        "Duisburg","Dusseldorf","Dusseldorf Flughafen","Duisburg",
        "Koblenz","Koln","Munster via Gelsenkirchen","Munster via Dortmund",
        "Osnabruck via Gelsenkirchen","Osnabruck via Dortmund",];
    }

    else if(x.value == "Frankfurt am Main"){
        var arr = ["-Select a city-","Berlin (Sprinter)","Bremen","Erfurt (Sprinter)","Frankfurt Flughafen","Hannover","Koln"];
    }

    else if(x.value == "Frankfurt Flughafen"){
        var arr = ["-Select a city-","Bremen","Frankfurt am Main", "Hannover","Koln"];
    }

    else if(x.value == "Hamburg"){
        var arr = ["-Select a city-","Bremen","Hannover"];
    }

    else if(x.value == "Hannover"){
        var arr = ["-Select a city-","Bremen","Frankfurt am Main","Frankfurt Flughafen","Hamburg",
        "Osnabruck"];
    }

    else if(x.value == "Ingolstadt"){
        var arr = ["-Select a city-","Erfurt","Munchen","Nurnberg","Wurzburg"];
    }

    else if(x.value == "Koblenz"){
        var arr = ["-Select a city-","Bonn","Duisburg","Dusseldorf","Dusseldorf Flughafen","Essen","Koln","Mainz"];
    }

    else if(x.value == "Koln"){
        var arr = ["-Select a city-","Aachen","Bonn","Dusseldorf","Dusseldorf Flughafen",
        "Duisburg","Essen","Frankfurt am Main","Frankfurt Flughafen","Koblenz"];
    }

    else if(x.value == "Mainz"){
        var arr = ["-Select a city-","Koblenz"];
    }

    else if(x.value == "Munchen"){
        var arr = ["-Select a city-","Erfurt","Ingolstadt","Nurnberg","Wurzburg"];
    }

    else if(x.value == "Munster"){
        var arr = ["-Select a city-","Bremen","Dortmund","Essen via Gelsenkirchen","Essen via Dortmund","Osnabruck"];
    }

    else if(x.value == "Nurnberg"){
        var arr = ["-Select a city-","Erfurt","Ingolstadt","Munchen","Wurzburg"];
    }

    else if(x.value == "Osnabruck"){
        var arr = ["-Select a city-","Berlin","Bremen","Duisburg via Gelsenkirchen","Duisburg via Dortmund",
        "Dusseldorf via Gelsenkirchen","Dusseldorf via Dortmund",
        "Essen via Gelsenkirchen","Essen via Dortmund","Hannover","Munster"];
    }

    else if(x.value == "Wurzburg"){
        var arr = ["-Select a city-","Ingolstadt","Munchen","Nurnberg"];
    }

    for(var option in arr){
        var optArr = arr[option].split();
        var newOption = document.createElement("option");
        newOption.value = optArr[0];
        newOption.innerHTML = optArr[0];
        y.options.add(newOption);
    }
}