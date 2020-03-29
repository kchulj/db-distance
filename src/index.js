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

function calculate(x, y)
{
    var x = document.getElementById(x);
    var y = document.getElementById(y);
    y.innerHTML = "";

    if(x.value == "Berlin"){
        var arr = ["-Select a city-","Hamburg","Hannover"];
    }

    else if(x.value == "Bremen"){
        var arr = ["-Select a city-","Hamburg","Hannover","Osnabruck"];
    }

    else if(x.value == "Duisburg"){
        var arr = ["-Select a city-","Dusseldorf","Essen","Koln"];
    }

    else if(x.value == "Essen"){
        var arr = ["-Select a city-","Dusseldorf","Duisburg","Koln"];
    }

    else if(x.value == "Dusseldorf"){
        var arr = ["-Select a city-","Duisburg","Essen","Koln"];
    }

    else if(x.value == "Hamburg"){
        var arr = ["-Select a city-","Bremen","Hannover"];
    }

    else if(x.value == "Hannover"){
        var arr = ["-Select a city-","Bremen","Hamburg"];
    }

    else if(x.value == "Koln"){
        var arr = ["-Select a city-","Dusseldorf","Duisburg","Essen"];
    }

    for(var option in arr){
        var optArr = arr[option].split();
        var newOption = document.createElement("option");
        newOption.value = optArr[0];
        newOption.innerHTML = optArr[0];
        y.options.add(newOption);
    }
}

function getDistance()
{   
    var a = document.getElementById("origin");
    var result1 = a.options[a.selectedIndex].text;

    var b = document.getElementById("dest");
    var result2 = b.options[b.selectedIndex].text;

    const b_hh = 250;
    const b_h = 286.6;

    const hb_hh = 122.3;
    const hb_h = 115.6;
    const hb_os = 1234;
    const hh_h = 181.4;
    
    //NRW north to south E -> DU -> D -> k
    const e_du = 19.4;
    const du_d = 24.2;
    const d_k = 39.5;

    //Berlin
    if (result1 == "Berlin" && result2 == "Hamburg") {
        document.getElementById("test1").innerHTML = b_hh + "km";
    }
    else if (result1 == "Berlin" && result2 == "Hannover") {
        document.getElementById("test1").innerHTML = b_h + "km";
    }

    //Bremen
    else if (result1 == "Bremen" && result2 == "Hamburg") {
        document.getElementById("test1").innerHTML = hb_hh + "km";
    }
    else if (result1 == "Bremen" && result2 == "Hannover") {
        document.getElementById("test1").innerHTML = hb_h + "km";
    }
    else if (result1 == "Bremen" && result2 == "Osnabruck") {
        document.getElementById("test1").innerHTML = hb_os + "km";
    }

    //Duisburg
    else if (result1 == "Duisburg" && result2 == "Dusseldorf") {
        document.getElementById("test1").innerHTML = du_d + "km";
    }
    else if (result1 == "Duisburg" && result2 == "Essen") {
        document.getElementById("test1").innerHTML = e_du + "km";
    }
    else if (result1 == "Duisburg" && result2 == "Koln") {
        document.getElementById("test1").innerHTML = du_d + d_k + "km";
    }

    //Dusseldorf
    else if (result1 == "Dusseldorf" && result2 == "Duisburg") {
        document.getElementById("test1").innerHTML = du_d + "km";
    }
    else if (result1 == "Dusseldorf" && result2 == "Essen") {
        document.getElementById("test1").innerHTML = e_du + du_d + "km";
    }
    else if (result1 == "Dusseldorf" && result2 == "Koln") {
        document.getElementById("test1").innerHTML = d_k + "km";
    }

    //Essen
    else if (result1 == "Essen" && result2 == "Duisburg") {
        document.getElementById("test1").innerHTML = e_du + "km";
    }
    else if (result1 == "Essen" && result2 == "Dusseldorf") {
        document.getElementById("test1").innerHTML = e_du + du_d + "km";
    }
    else if (result1 == "Essen" && result2 == "Koln") {
        document.getElementById("test1").innerHTML = e_du + du_d + d_k + "km";
    }

    // Hamburg
    else if (result1 == "Hamburg" && result2 == "Bremen") {
        document.getElementById("test1").innerHTML = hb_hh + "km";
    }
    else if (result1 == "Hamburg" && result2 == "Hannover") {
        document.getElementById("test1").innerHTML = hh_h + "km";
    }

    //Hannover
    else if (result1 == "Hannover" && result2 == "Bremen") {
        document.getElementById("test1").innerHTML = hb_h + "km";
    }
    else if (result1 == "Hannover" && result2 == "Hamburg") {
        document.getElementById("test1").innerHTML = hh_h + "km";
    }

    //Koln
    else if (result1 == "Koln" && result2 == "Duisburg") {
        document.getElementById("test1").innerHTML = du_d + d_k + "km";
    }
    else if (result1 == "Koln" && result2 == "Dusseldorf") {
        document.getElementById("test1").innerHTML = d_k + "km";
    }
    else if (result1 == "Koln" && result2 == "Essen") {
        document.getElementById("test1").innerHTML = e_du + du_d + d_k + "km";
    }
    
    else {
        document.getElementById("test1").innerHTML = "null";
    }
}