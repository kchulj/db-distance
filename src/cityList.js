var cityList = document.getElementById('origin'),
    cityArr = ["-Select a city-","Aachen","Berlin","Bochum","Bonn","Bremen",
    "Dortmund","Duisburg","Dusseldorf","Dusseldorf Flughafen",
    "Erfurt","Essen","Frankfurt am Main","Frankfurt Flughafen",
    "Hamburg","Hannover","Heidelberg","Ingolstadt","Koblenz",
    "Koln","Mainz","Mannheim","Munchen","Munster",
    "Nurnberg","Osnabruck","Stuttgart","Wurzburg"];
             
    for(var i = 0; i < cityArr.length; i++)
        {
            var option1 = document.createElement("OPTION"),
            txt = document.createTextNode(cityArr[i]);
            option1.appendChild(txt);
            option1.setAttribute("value",cityArr[i]);
            cityList.insertBefore(option1,cityList.lastChild);
        }