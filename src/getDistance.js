function getDistance()
{   
    var a = document.getElementById("origin");
    var result1 = a.options[a.selectedIndex].text;

    var b = document.getElementById("dest");
    var result2 = b.options[b.selectedIndex].text;

    const b_hh = 250;
    const b_h = 287; //286.6

    const hb_hh = 122; //122.3
    const hb_h = 116; //115.6
    const hb_os = 122;
    const hh_h = 181; //181.4
    
    //NRW north to south E -> DU -> DF -> D -> k
    const e_du = 19; //19.4
    const du_df = 15; //15.4
    const df_d = 8 // 8.2
    const d_k = 39.5;
    const k_bn = 32; //31.9
    const bn_ko = 59; //59.3
    const ko_mz = 92; //91.8

    const h_f = 345;
    const f_ff = 11; //11.4
    const k_ff = 169; //169.3
    const k_aa = 70; //70.2

    //BVR N -> IN -> M
    const w_n = 102; //102.2
    const n_ef = 191;
    const n_in = 90; //90.3
    const in_m = 81;

    //Berlin
    if (result1 == "Berlin" && result2 == "Hamburg") {
        document.getElementById("test1").innerHTML = b_hh + "km";
    }
    else if (result1 == "Berlin" && result2 == "Hannover") {
        document.getElementById("test1").innerHTML = b_h + "km";
    }
    else if (result1 == "Berlin" && result2 == "Bremen via Hamburg") {
        document.getElementById("test1").innerHTML = hb_hh + b_hh + "km";
    }
    else if (result1 == "Berlin" && result2 == "Bremen via Hannover") {
        document.getElementById("test1").innerHTML = hb_h + b_h + "km";
    }

    //Aachen
    else if (result1 == "Aachen" && result2 == "Koln") {
        document.getElementById("test1").innerHTML = k_aa + "km";
    }

    //Bonn
    else if (result1 == "Bonn" && result2 == "Duisburg") {
        document.getElementById("test1").innerHTML = du_df + df_d + d_k + k_bn + "km";
    }
    else if (result1 == "Bonn" && result2 == "Dusseldorf") {
        document.getElementById("test1").innerHTML = d_k + k_bn + "km";
    }
    else if (result1 == "Bonn" && result2 == "Dusseldorf Flughafen") {
        document.getElementById("test1").innerHTML = df_d + d_k + k_bn + "km";
    }
    else if (result1 == "Bonn" && result2 == "Essen") {
        document.getElementById("test1").innerHTML = e_du + du_df + df_d + d_k + k_bn + "km";
    }
    else if (result1 == "Bonn" && result2 == "Koblenz") {
        document.getElementById("test1").innerHTML = bn_ko + "km";
    }
    else if (result1 == "Bonn" && result2 == "Koln") {
        document.getElementById("test1").innerHTML = k_bn + "km";
    }

    //Bremen
    else if (result1 == "Bremen" && result2 == "Berlin via Hamburg") {
        document.getElementById("test1").innerHTML = hb_hh + b_hh + "km";
    }
    else if (result1 == "Bremen" && result2 == "Berlin via Hannover") {
        document.getElementById("test1").innerHTML = hb_h + b_h + "km";
    }
    else if (result1 == "Bremen" && result2 == "Frankfurt am Main") {
        document.getElementById("test1").innerHTML = hb_h + h_f + "km";
    }
    else if (result1 == "Bremen" && result2 == "Frankfurt Flughafen") {
        document.getElementById("test1").innerHTML = hb_h + h_f + f_ff + "km";
    }
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
    else if (result1 == "Duisburg" && result2 == "Bonn") {
        document.getElementById("test1").innerHTML = du_df + df_d + d_k + k_bn + "km";
    }
    else if (result1 == "Duisburg" && result2 == "Dusseldorf") {
        document.getElementById("test1").innerHTML = du_df + df_d + "km";
    }
    else if (result1 == "Duisburg" && result2 == "Dusseldorf Flughafen") {
        document.getElementById("test1").innerHTML = du_df + "km";
    }
    else if (result1 == "Duisburg" && result2 == "Essen") {
        document.getElementById("test1").innerHTML = e_du + "km";
    }
    else if (result1 == "Duisburg" && result2 == "Koblenz") {
        document.getElementById("test1").innerHTML = du_df + df_d + d_k + k_bn + bn_ko + "km";
    }
    else if (result1 == "Duisburg" && result2 == "Koln") {
        document.getElementById("test1").innerHTML = du_df + df_d + d_k + "km";
    }

    //Dusseldorf
    else if (result1 == "Dusseldorf" && result2 == "Bonn") {
        document.getElementById("test1").innerHTML = d_k + k_bn + "km";
    }
    else if (result1 == "Dusseldorf" && result2 == "Duisburg") {
        document.getElementById("test1").innerHTML = du_df + df_d + "km";
    }
    else if (result1 == "Dusseldorf" && result2 == "Dusseldorf Flughafen") {
        document.getElementById("test1").innerHTML = df_d + "km";
    }
    else if (result1 == "Dusseldorf" && result2 == "Essen") {
        document.getElementById("test1").innerHTML = e_du + du_df + df_d + "km";
    }
    else if (result1 == "Dusseldorf" && result2 == "Koblenz") {
        document.getElementById("test1").innerHTML = d_k + k_bn + bn_ko + "km";
    }
    else if (result1 == "Dusseldorf" && result2 == "Koln") {
        document.getElementById("test1").innerHTML = d_k + "km";
    }


    //Dusseldorf Flughafen
    else if (result1 == "Dusseldorf Flughafen" && result2 == "Bonn") {
        document.getElementById("test1").innerHTML = df_d + d_k + k_bn + "km";
    }
    else if (result1 == "Dusseldorf Flughafen" && result2 == "Duisburg") {
        document.getElementById("test1").innerHTML = du_df + "km";
    }
    else if (result1 == "Dusseldorf Flughafen" && result2 == "Dusseldorf") {
        document.getElementById("test1").innerHTML = df_d + "km";
    }
    else if (result1 == "Dusseldorf Flughafen" && result2 == "Essen") {
        document.getElementById("test1").innerHTML = e_du + du_df + "km";
    }
    else if (result1 == "Dusseldorf Flughafen" && result2 == "Koblenz") {
        document.getElementById("test1").innerHTML = df_d + d_k + k_bn + bn_ko + "km";
    }
    else if (result1 == "Dusseldorf Flughafen" && result2 == "Koln") {
        document.getElementById("test1").innerHTML = df_d + d_k + "km";
    }

    //Erfurt
    else if (result1 == "Erfurt" && result2 == "Nurnberg") {
        document.getElementById("test1").innerHTML = n_ef + "km";
    }
    else if (result1 == "Erfurt" && result2 == "Ingolstadt") {
        document.getElementById("test1").innerHTML = n_in + n_ef + "km";
    }
    else if (result1 == "Erfurt" && result2 == "Munchen") {
        document.getElementById("test1").innerHTML = n_in + n_ef + in_m + "km";
    }

    //Essen
    else if (result1 == "Essen" && result2 == "Bonn") {
        document.getElementById("test1").innerHTML = e_du + du_df + df_d + d_k + k_bn + "km";
    }
    else if (result1 == "Essen" && result2 == "Duisburg") {
        document.getElementById("test1").innerHTML = e_du + "km";
    }
    else if (result1 == "Essen" && result2 == "Dusseldorf") {
        document.getElementById("test1").innerHTML = e_du + du_df + df_d + "km";
    }
    else if (result1 == "Essen" && result2 == "Dusseldorf Flughafen") {
        document.getElementById("test1").innerHTML = e_du + du_df + "km";
    }
    else if (result1 == "Essen" && result2 == "Koblenz") {
        document.getElementById("test1").innerHTML = e_du + du_df + df_d + d_k + k_bn + bn_ko + "km";
    }
    else if (result1 == "Essen" && result2 == "Koln") {
        document.getElementById("test1").innerHTML = e_du + du_df + df_d + d_k + "km";
    }

    //Frankfurt am Main
    else if (result1 == "Frankfurt am Main" && result2 == "Bremen") {
        document.getElementById("test1").innerHTML = hb_h + h_f + "km";
    }
    else if (result1 == "Frankfurt am Main" && result2 == "Frankfurt Flughafen") {
        document.getElementById("test1").innerHTML = f_ff + "km";
    }
    else if (result1 == "Frankfurt am Main" && result2 == "Hannover") {
        document.getElementById("test1").innerHTML = h_f + "km";
    }
    else if (result1 == "Frankfurt am Main" && result2 == "Koln") {
        document.getElementById("test1").innerHTML = f_ff + k_ff + "km";
    }

    //Frankfurt Flughafen
    else if (result1 == "Frankfurt Flughafen" && result2 == "Bremen") {
        document.getElementById("test1").innerHTML = hb_h + h_f + f_ff + "km";
    }
    else if (result1 == "Frankfurt Flughafen" && result2 == "Hannover") {
        document.getElementById("test1").innerHTML = h_f + f_ff + "km";
    }
    else if (result1 == "Frankfurt Flughafen" && result2 == "Frankfurt am Main") {
        document.getElementById("test1").innerHTML = f_ff + "km";
    }
    else if (result1 == "Frankfurt Flughafen" && result2 == "Koln") {
        document.getElementById("test1").innerHTML = k_ff + "km";
    }

    //Hamburg
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
    else if (result1 == "Hannover" && result2 == "Frankfurt am Main") {
        document.getElementById("test1").innerHTML = h_f + "km";
    }
    else if (result1 == "Hannover" && result2 == "Frankfurt Flughafen") {
        document.getElementById("test1").innerHTML = h_f + f_ff + "km";
    }
    else if (result1 == "Hannover" && result2 == "Hamburg") {
        document.getElementById("test1").innerHTML = hh_h + "km";
    }

    //Ingolstadt
    else if (result1 == "Ingolstadt" && result2 == "Erfurt") {
        document.getElementById("test1").innerHTML = n_in + n_ef + "km";
    }
    else if (result1 == "Ingolstadt" && result2 == "Munchen") {
        document.getElementById("test1").innerHTML = in_m + "km";
    }
    else if (result1 == "Ingolstadt" && result2 == "Nurnberg") {
        document.getElementById("test1").innerHTML = n_in + "km";
    }
    else if (result1 == "Ingolstadt" && result2 == "Wurzburg") {
        document.getElementById("test1").innerHTML = w_n + n_in + "km";
    }

    //Koblenz
    else if (result1 == "Koblenz" && result2 == "Bonn") {
        document.getElementById("test1").innerHTML = bn_ko + "km";
    }
    else if (result1 == "Koblenz" && result2 == "Duisburg") {
        document.getElementById("test1").innerHTML = du_df + df_d + d_k + k_bn + bn_ko + "km";
    }
    else if (result1 == "Koblenz" && result2 == "Dusseldorf") {
        document.getElementById("test1").innerHTML = d_k + k_bn + bn_ko + "km";
    }
    else if (result1 == "Koblenz" && result2 == "Dusseldorf Flughafen") {
        document.getElementById("test1").innerHTML = df_d + d_k + k_bn + bn_ko + "km";
    }
    else if (result1 == "Koblenz" && result2 == "Essen") {
        document.getElementById("test1").innerHTML = e_du + du_df + df_d + d_k + k_bn + bn_ko + "km";
    }
    else if (result1 == "Koblenz" && result2 == "Koln") {
        document.getElementById("test1").innerHTML = k_bn + bn_ko + "km";
    }
    else if (result1 == "Koblenz" && result2 == "Mainz") {
        document.getElementById("test1").innerHTML = ko_mz + "km";
    }

    //Koln
    else if (result1 == "Koln" && result2 == "Aachen") {
        document.getElementById("test1").innerHTML = k_aa + "km";
    }
    else if (result1 == "Koln" && result2 == "Bonn") {
        document.getElementById("test1").innerHTML = k_bn + "km";
    }
    else if (result1 == "Koln" && result2 == "Duisburg") {
        document.getElementById("test1").innerHTML = du_df + df_d + d_k + "km";
    }
    else if (result1 == "Koln" && result2 == "Dusseldorf") {
        document.getElementById("test1").innerHTML = d_k + "km";
    }
    else if (result1 == "Koln" && result2 == "Dusseldorf Flughafen") {
        document.getElementById("test1").innerHTML = df_d + d_k + "km";
    }
    else if (result1 == "Koln" && result2 == "Essen") {
        document.getElementById("test1").innerHTML = e_du + du_df + df_d + d_k + "km";
    }
    else if (result1 == "Koln" && result2 == "Frankfurt am Main") {
        document.getElementById("test1").innerHTML = k_ff + f_ff + "km";
    }
    else if (result1 == "Koln" && result2 == "Frankfurt Flughafen") {
        document.getElementById("test1").innerHTML = k_ff + "km";
    }
    else if (result1 == "Koln" && result2 == "Koblenz") {
        document.getElementById("test1").innerHTML = k_bn + bn_ko + "km";
    }

    //Mainz
    else if (result1 == "Mainz" && result2 == "Koblenz") {
        document.getElementById("test1").innerHTML = ko_mz + "km";
    }

    //Munchen
    else if (result1 == "Munchen" && result2 == "Erfurt") {
        document.getElementById("test1").innerHTML = n_in + n_ef + in_m + "km";
    }
    else if (result1 == "Munchen" && result2 == "Ingolstadt") {
        document.getElementById("test1").innerHTML = in_m + "km";
    }
    else if (result1 == "Munchen" && result2 == "Nurnberg") {
        document.getElementById("test1").innerHTML = n_in + in_m + "km";
    }
    else if (result1 == "Munchen" && result2 == "Wurzburg") {
        document.getElementById("test1").innerHTML = w_n + n_in + in_m + "km";
    }

    //Nurnberg
    else if (result1 == "Nurnberg" && result2 == "Erfurt") {
        document.getElementById("test1").innerHTML = n_ef + "km";
    }
    else if (result1 == "Nurnberg" && result2 == "Ingolstadt") {
        document.getElementById("test1").innerHTML = n_in + "km";
    }
    else if (result1 == "Nurnberg" && result2 == "Munchen") {
        document.getElementById("test1").innerHTML = n_in + in_m + "km";
    }
    else if (result1 == "Nurnberg" && result2 == "Wurzburg") {
        document.getElementById("test1").innerHTML = w_n + "km";
    }

    //Osnabruck
    else if (result1 == "Osnabruck" && result2 == "Bremen") {
        document.getElementById("test1").innerHTML = hb_os + "km";
    }

    //Wurzburg
    else if (result1 == "Wurzburg" && result2 == "Ingolstadt") {
        document.getElementById("test1").innerHTML = w_n + n_in + "km";
    }
    else if (result1 == "Wurzburg" && result2 == "Munchen") {
        document.getElementById("test1").innerHTML = w_n + n_in + in_m + "km";
    }
    else if (result1 == "Wurzburg" && result2 == "Nurnberg") {
        document.getElementById("test1").innerHTML = w_n + "km";
    }
    
    else {
        document.getElementById("test1").innerHTML = "null";
    }
}