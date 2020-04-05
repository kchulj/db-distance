function getDistance()
{   
    var a = document.getElementById("origin");
    var result1 = a.options[a.selectedIndex].text;

    var b = document.getElementById("dest");
    var result2 = b.options[b.selectedIndex].text;

    const b_hh = 250;
    const b_h = 286.6; //286.6
    const hh_h = 181.4; //181.4
    const os_h = 132.4; //132.4

    const hb_hh = 122.3; //122.3
    const hb_h = 115.6; //115.6    
    const hb_os = 122;

    const os_ms = 50.1; //50.1
    const ms_e = 82.8; //82.8

    const ms_do = 56; //55.7
    const do_bo = 19; //19.1
    const bo_e = 16.5;
    
    //NRW north to south E -> DU -> DF -> D -> k
    const e_du = 19.4; //19.4
    const du_df = 15.4; //15.4
    const df_d = 8.2; // 8.2
    const d_k = 39.5;
    const k_bn = 31.9; //31.9
    const bn_ko = 59.3; //59.3
    const ko_mz = 91.8; //91.8

    const k_aa = 70.2; //70.2

    const h_f = 345;
    const f_ff = 11.4; //11.4
    const k_ff = 169.3; //169.3

    const f_ef_spr = 267;
    const ef_b_spr = 256.5;

    //BVR N -> IN -> M
    const w_n = 102.2; //102.2
    const n_ef = 191;
    const n_in = 90.3; //90.3
    const in_m = 81;

    //Berlin
    if (result1 == "Berlin" && result2 == "Osnabruck") {
        document.getElementById("test1").innerHTML = os_h + b_h + "km";
    }
    else if (result1 == "Berlin" && result2 == "Hamburg") {
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
    else if (result1 == "Berlin" && result2 == "Erfurt (Sprinter)") {
        document.getElementById("test1").innerHTML = ef_b_spr + "km";
    }
    else if (result1 == "Berlin" && result2 == "Frankfurt am Main (Sprinter)") {
        document.getElementById("test1").innerHTML = f_ef_spr + ef_b_spr + "km";
    }

    //Aachen
    else if (result1 == "Aachen" && result2 == "Bonn") {
        document.getElementById("test1").innerHTML = k_aa + k_bn + "km";
    }
    else if (result1 == "Aachen" && result2 == "Koblenz") {
        document.getElementById("test1").innerHTML = k_aa + k_bn + bn_ko + "km";
    }
    else if (result1 == "Aachen" && result2 == "Koln") {
        document.getElementById("test1").innerHTML = k_aa + "km";
    }

    //Bochum
    else if (result1 == "Bochum" && result2 == "Bremen") {
        document.getElementById("test1").innerHTML = hb_os + os_ms + ms_do + do_bo + "km";
    }
    else if (result1 == "Bochum" && result2 == "Dortmund") {
        document.getElementById("test1").innerHTML = do_bo + "km";
    }
    else if (result1 == "Bochum" && result2 == "Duisburg") {
        document.getElementById("test1").innerHTML = bo_e + e_du + "km";
    }
    else if (result1 == "Bochum" && result2 == "Dusseldorf") {
        document.getElementById("test1").innerHTML = bo_e + e_du + du_df + df_d + "km";
    }
    else if (result1 == "Bochum" && result2 == "Dusseldorf Flughafen") {
        document.getElementById("test1").innerHTML = bo_e + e_du + du_df + "km";
    }
    else if (result1 == "Bochum" && result2 == "Essen") {
        document.getElementById("test1").innerHTML = bo_e + "km";
    }
    else if (result1 == "Bochum" && result2 == "Munster") {
        document.getElementById("test1").innerHTML = ms_do + do_bo + "km";
    }

    //Bonn
    else if (result1 == "Bonn" && result2 == "Aachen") {
        document.getElementById("test1").innerHTML = k_aa + k_bn + "km";
    }
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
    else if (result1 == "Bonn" && result2 == "Mainz") {
        document.getElementById("test1").innerHTML = bn_ko + ko_mz + "km";
    }

    //Bremen
    else if (result1 == "Bremen" && result2 == "Berlin via Hamburg") {
        document.getElementById("test1").innerHTML = hb_hh + b_hh + "km";
    }
    else if (result1 == "Bremen" && result2 == "Berlin via Hannover") {
        document.getElementById("test1").innerHTML = hb_h + b_h + "km";
    }
    else if (result1 == "Bremen" && result2 == "Bochum") {
        document.getElementById("test1").innerHTML = hb_os + os_ms + ms_do + do_bo + "km";
    }
    else if (result1 == "Bremen" && result2 == "Dortmund") {
        document.getElementById("test1").innerHTML = hb_os + os_ms + ms_do + "km";
    }
    else if (result1 == "Bremen" && result2 == "Duisburg via Gelsenkirchen") {
        document.getElementById("test1").innerHTML = hb_os + os_ms + ms_e + e_du + "km";
    }
    else if (result1 == "Bremen" && result2 == "Duisburg via Dortmund") {
        document.getElementById("test1").innerHTML = hb_os + os_ms + ms_do + do_bo + bo_e + e_du + "km";
    }
    else if (result1 == "Bremen" && result2 == "Dusseldorf via Gelsenkirchen") {
        document.getElementById("test1").innerHTML = hb_os + os_ms + ms_e + e_du + du_df + df_d + "km";
    }
    else if (result1 == "Bremen" && result2 == "Dusseldorf via Dortmund") {
        document.getElementById("test1").innerHTML = hb_os + os_ms + ms_do + do_bo + bo_e + e_du + du_df + df_d + "km";
    }
    else if (result1 == "Bremen" && result2 == "Dusseldorf Flughafen via Gelsenkirchen") {
        document.getElementById("test1").innerHTML = hb_os + os_ms + ms_e + e_du + du_df + "km";
    }
    else if (result1 == "Bremen" && result2 == "Dusseldorf Flughafen via Dortmund") {
        document.getElementById("test1").innerHTML = hb_os + os_ms + ms_do + do_bo + bo_e + e_du + du_df + "km";
    }
    else if (result1 == "Bremen" && result2 == "Essen via Gelsenkirchen") {
        document.getElementById("test1").innerHTML = hb_os + os_ms + ms_e + "km";
    }
    else if (result1 == "Bremen" && result2 == "Essen via Dortmund") {
        document.getElementById("test1").innerHTML = hb_os + os_ms + ms_do + do_bo + bo_e + "km";
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
    else if (result1 == "Bremen" && result2 == "Munster") {
        document.getElementById("test1").innerHTML = hb_os + os_ms + "km";
    }
    else if (result1 == "Bremen" && result2 == "Osnabruck") {
        document.getElementById("test1").innerHTML = hb_os + "km";
    }

    //Dortmund
    else if (result1 == "Dortmund" && result2 == "Bremen") {
        document.getElementById("test1").innerHTML = hb_os + os_ms + ms_do + "km";
    }
    else if (result1 == "Dortmund" && result2 == "Bochum") {
        document.getElementById("test1").innerHTML = do_bo + "km";
    }
    else if (result1 == "Dortmund" && result2 == "Duisburg") {
        document.getElementById("test1").innerHTML = do_bo + bo_e + e_du + "km";
    }
    else if (result1 == "Dortmund" && result2 == "Dusseldorf") {
        document.getElementById("test1").innerHTML = do_bo + bo_e + e_du + du_df + df_d + "km";
    }
    else if (result1 == "Dortmund" && result2 == "Dusseldorf Flughafen") {
        document.getElementById("test1").innerHTML = do_bo + bo_e + e_du + du_df + "km";
    }
    else if (result1 == "Dortmund" && result2 == "Essen") {
        document.getElementById("test1").innerHTML = do_bo + bo_e + "km";
    }
    else if (result1 == "Dortmund" && result2 == "Munster") {
        document.getElementById("test1").innerHTML = ms_do + "km";
    }
    else if (result1 == "Dortmund" && result2 == "Osnabruck") {
        document.getElementById("test1").innerHTML = os_ms + ms_do + "km";
    }

    //Duisburg
    else if (result1 == "Duisburg" && result2 == "Bochum") {
        document.getElementById("test1").innerHTML = bo_e + e_du + "km";
    }
    else if (result1 == "Duisburg" && result2 == "Bonn") {
        document.getElementById("test1").innerHTML = du_df + df_d + d_k + k_bn + "km";
    }
    else if (result1 == "Duisburg" && result2 == "Bremen via Gelsenkirchen") {
        document.getElementById("test1").innerHTML = hb_os + os_ms + ms_e + e_du + "km";
    }
    else if (result1 == "Duisburg" && result2 == "Bremen via Dortmund") {
        document.getElementById("test1").innerHTML = hb_os + os_ms + ms_do + do_bo + bo_e + e_du + "km";
    }
    else if (result1 == "Duisburg" && result2 == "Dortmund") {
        document.getElementById("test1").innerHTML = do_bo + bo_e + e_du + "km";
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
    else if (result1 == "Duisburg" && result2 == "Munster via Gelsenkirchen") {
        document.getElementById("test1").innerHTML = ms_e + e_du + "km";
    }
    else if (result1 == "Duisburg" && result2 == "Munster via Dortmund") {
        document.getElementById("test1").innerHTML = ms_do + do_bo + bo_e + e_du + "km";
    }
    else if (result1 == "Duisburg" && result2 == "Osnabruck via Gelsenkirchen") {
        document.getElementById("test1").innerHTML = os_ms + ms_e + e_du + "km";
    }
    else if (result1 == "Duisburg" && result2 == "Osnabruck via Dortmund") {
        document.getElementById("test1").innerHTML = os_ms + ms_do + do_bo + bo_e + e_du + "km";
    }

    //Dusseldorf
    else if (result1 == "Dusseldorf" && result2 == "Bochum") {
        document.getElementById("test1").innerHTML = bo_e + e_du + du_df + df_d + "km";
    }
    else if (result1 == "Dusseldorf" && result2 == "Bonn") {
        document.getElementById("test1").innerHTML = d_k + k_bn + "km";
    }
    else if (result1 == "Dusseldorf" && result2 == "Bremen via Gelsenkirchen") {
        document.getElementById("test1").innerHTML = hb_os + os_ms + ms_e + e_du + du_df + df_d + "km";
    }
    else if (result1 == "Dusseldorf" && result2 == "Bremen via Dortmund") {
        document.getElementById("test1").innerHTML = hb_os + os_ms + ms_do + do_bo + bo_e + e_du + du_df + df_d + "km";
    }
    else if (result1 == "Dusseldorf" && result2 == "Dortmund") {
        document.getElementById("test1").innerHTML = do_bo + bo_e + e_du + du_df + df_d + "km";
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
    else if (result1 == "Dusseldorf" && result2 == "Osnabruck via Gelsenkirchen") {
        document.getElementById("test1").innerHTML = os_ms + ms_e + e_du + du_df + df_d + "km";
    }
    else if (result1 == "Dusseldorf" && result2 == "Osnabruck via Dortmund") {
        document.getElementById("test1").innerHTML = os_ms + ms_do + do_bo + bo_e + e_du + du_df + df_d + "km";
    }


    //Dusseldorf Flughafen
    else if (result1 == "Dusseldorf Flughafen" && result2 == "Bochum") {
        document.getElementById("test1").innerHTML = bo_e + e_du + du_df + "km";
    }
    else if (result1 == "Dusseldorf Flughafen" && result2 == "Bonn") {
        document.getElementById("test1").innerHTML = df_d + d_k + k_bn + "km";
    }
    else if (result1 == "Dusseldorf Flughafen" && result2 == "Bremen via Gelsenkirchen") {
        document.getElementById("test1").innerHTML = hb_os + os_ms + ms_e + e_du + du_df + "km";
    }
    else if (result1 == "Dusseldorf Flughafen" && result2 == "Bremen via Dortmund") {
        document.getElementById("test1").innerHTML = hb_os + os_ms + ms_do + do_bo + bo_e + e_du + du_df + "km";
    }
    else if (result1 == "Dusseldorf Flughafen" && result2 == "Duisburg") {
        document.getElementById("test1").innerHTML = du_df + "km";
    }
    else if (result1 == "Dusseldorf Flughafen" && result2 == "Dortmund") {
        document.getElementById("test1").innerHTML = do_bo + bo_e + e_du + du_df + "km";
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
    else if (result1 == "Erfurt" && result2 == "Berlin (Sprinter)") {
        document.getElementById("test1").innerHTML = ef_b_spr + "km";
    }
    else if (result1 == "Erfurt" && result2 == "Frankfurt am Main (Sprinter)") {
        document.getElementById("test1").innerHTML = f_ef_spr + "km";
    }
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
    else if (result1 == "Essen" && result2 == "Bochum") {
        document.getElementById("test1").innerHTML = bo_e + "km";
    }
    else if (result1 == "Essen" && result2 == "Bonn") {
        document.getElementById("test1").innerHTML = e_du + du_df + df_d + d_k + k_bn + "km";
    }
    else if (result1 == "Essen" && result2 == "Bremen via Gelsenkirchen") {
        document.getElementById("test1").innerHTML = hb_os + os_ms + ms_e + "km";
    }
    else if (result1 == "Essen" && result2 == "Bremen via Dortmund") {
        document.getElementById("test1").innerHTML = hb_os + os_ms + ms_do + do_bo + bo_e + "km";
    }
    else if (result1 == "Essen" && result2 == "Dortmund") {
        document.getElementById("test1").innerHTML = do_bo + bo_e + "km";
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
    else if (result1 == "Essen" && result2 == "Munster via Gelsenkirchen") {
        document.getElementById("test1").innerHTML = ms_e + "km";
    }
    else if (result1 == "Essen" && result2 == "Munster via Dortmund") {
        document.getElementById("test1").innerHTML = ms_do + do_bo + bo_e + "km";
    }
    else if (result1 == "Essen" && result2 == "Osnabruck via Gelsenkirchen") {
        document.getElementById("test1").innerHTML = os_ms + ms_e + "km";
    }
    else if (result1 == "Essen" && result2 == "Osnabruck via Dortmund") {
        document.getElementById("test1").innerHTML = os_ms + ms_do + do_bo + bo_e + "km";
    }

    //Frankfurt am Main
    else if (result1 == "Frankfurt am Main" && result2 == "Berlin (Sprinter)") {
        document.getElementById("test1").innerHTML = f_ef_spr + ef_b_spr + "km";
    }
    else if (result1 == "Frankfurt am Main" && result2 == "Bremen") {
        document.getElementById("test1").innerHTML = hb_h + h_f + "km";
    }
    else if (result1 == "Frankfurt am Main" && result2 == "Erfurt (Sprinter)") {
        document.getElementById("test1").innerHTML = f_ef_spr + "km";
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
    else if (result1 == "Hannover" && result2 == "Osnabruck") {
        document.getElementById("test1").innerHTML = os_h + "km";
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
    else if (result1 == "Koblenz" && result2 == "Aachen") {
        document.getElementById("test1").innerHTML = k_aa + k_bn + bn_ko + "km";
    }
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
    else if (result1 == "Mainz" && result2 == "Bonn") {
        document.getElementById("test1").innerHTML = bn_ko + ko_mz + "km";
    }
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

    //Munster
    else if (result1 == "Munster" && result2 == "Bochum") {
        document.getElementById("test1").innerHTML = ms_do + do_bo + "km";
    }
    else if (result1 == "Munster" && result2 == "Bremen") {
        document.getElementById("test1").innerHTML = hb_os + os_ms + "km";
    }
    else if (result1 == "Munster" && result2 == "Dortmund") {
        document.getElementById("test1").innerHTML = ms_do + "km";
    }
    else if (result1 == "Munster" && result2 == "Duisburg via Gelsenkirchen") {
        document.getElementById("test1").innerHTML = ms_e + e_du + "km";
    }
    else if (result1 == "Munster" && result2 == "Duisburg via Dortmund") {
        document.getElementById("test1").innerHTML = ms_do + do_bo + bo_e + e_du + "km";
    }
    else if (result1 == "Munster" && result2 == "Essen via Gelsenkirchen") {
        document.getElementById("test1").innerHTML = ms_e + "km";
    }
    else if (result1 == "Munster" && result2 == "Essen via Dortmund") {
        document.getElementById("test1").innerHTML = ms_do + do_bo + bo_e + "km";
    }
    else if (result1 == "Munster" && result2 == "Osnabruck") {
        document.getElementById("test1").innerHTML = os_ms + "km";
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
    else if (result1 == "Osnabruck" && result2 == "Berlin") {
        document.getElementById("test1").innerHTML = os_h + b_h + "km";
    }
    else if (result1 == "Osnabruck" && result2 == "Bremen") {
        document.getElementById("test1").innerHTML = hb_os + "km";
    }
    else if (result1 == "Osnabruck" && result2 == "Dortmund") {
        document.getElementById("test1").innerHTML = os_ms + ms_do + "km";
    }
    else if (result1 == "Osnabruck" && result2 == "Duisburg via Gelsenkirchen") {
        document.getElementById("test1").innerHTML = os_ms + ms_e + e_du + "km";
    }
    else if (result1 == "Osnabruck" && result2 == "Duisburg via Dortmund") {
        document.getElementById("test1").innerHTML = os_ms + ms_do + do_bo + bo_e + e_du + "km";
    }
    else if (result1 == "Osnabruck" && result2 == "Dusseldorf via Gelsenkirchen") {
        document.getElementById("test1").innerHTML = os_ms + ms_e + e_du + du_df + df_d + "km";
    }
    else if (result1 == "Osnabruck" && result2 == "Dusseldorf via Dortmund") {
        document.getElementById("test1").innerHTML = os_ms + ms_do + do_bo + bo_e + e_du + du_df + df_d + "km";
    }
    else if (result1 == "Osnabruck" && result2 == "Essen via Gelsenkirchen") {
        document.getElementById("test1").innerHTML = os_ms + ms_e + "km";
    }
    else if (result1 == "Osnabruck" && result2 == "Essen via Dortmund") {
        document.getElementById("test1").innerHTML = os_ms + ms_do + do_bo + bo_e + "km";
    }
    else if (result1 == "Osnabruck" && result2 == "Hannover") {
        document.getElementById("test1").innerHTML = os_h + "km";
    }
    else if (result1 == "Osnabruck" && result2 == "Munster") {
        document.getElementById("test1").innerHTML = os_ms + "km";
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