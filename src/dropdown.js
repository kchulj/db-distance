var select = document.getElementById("dest"),
    arr = ["html","css","java","javascript","php","c++","node.js","ASP","JSP","SQL"];
        for(var i = 0; i < arr.length; i++) {
            var option = document.createElement("OPTION"),
            txt = document.createTextNode(arr[i]);
            option.appendChild(txt);
            option.setAttribute("value",arr[i]);
            select.insertBefore(option,select.lastChild);
}