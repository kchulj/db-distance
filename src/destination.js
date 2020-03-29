function destination()
{
   var cities = {
       Bremen:["Hamburg","Hannover"],
       Hamburg:[],
       Hannover:[],
       Osnabruck:[],
   }

   var main = document.getElementById('origin'); 
   var sub = document.getElementById('dest');

   main.addEventListener('change',function(){
        var selectedOption = cities[this.value];
        while(sub.options.length > 0){
            sub.options.remove(0);
        }
        Array.from(selectedOption).forEach(function(e1){
            let option = new Option(e1, e1);
            sub.appendChild(option);
        });
   });
}