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