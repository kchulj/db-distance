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