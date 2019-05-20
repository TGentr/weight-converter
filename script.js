let inPut = document.querySelector("#inputwaga");
   inPut.addEventListener('input', function(e){
       let pounds = e.target.value;
       document.getElementById("kgOutput").innerHTML = Math.round(pounds/2.2046 * 100) / 100;
   })