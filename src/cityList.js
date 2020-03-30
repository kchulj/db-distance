var cityList = document.getElementById('origin'),
    cityArr = ["-Select a city-","Berlin","Bremen","Duisburg","Dusseldorf","Essen","Hamburg","Hannover","Koln"];
             
    for(var i = 0; i < cityArr.length; i++)
        {
            var option1 = document.createElement("OPTION"),
            txt = document.createTextNode(cityArr[i]);
            option1.appendChild(txt);
            option1.setAttribute("value",cityArr[i]);
            cityList.insertBefore(option1,cityList.lastChild);
        }