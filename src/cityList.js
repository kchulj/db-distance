var cityList = document.getElementById('origin'),
    cityArr = ["-Select a city-","Aachen","Berlin","Bonn","Bremen",
    "Duisburg","Dusseldorf","Dusseldorf Flughafen",
    "Erfurt","Essen","Frankfurt am Main","Frankfurt Flughafen","Hamburg","Hannover",
    "Ingolstadt","Koblenz","Koln","Munchen","Nurnberg","Osnabruck",
    "Wurzburg"];
             
    for(var i = 0; i < cityArr.length; i++)
        {
            var option1 = document.createElement("OPTION"),
            txt = document.createTextNode(cityArr[i]);
            option1.appendChild(txt);
            option1.setAttribute("value",cityArr[i]);
            cityList.insertBefore(option1,cityList.lastChild);
        }