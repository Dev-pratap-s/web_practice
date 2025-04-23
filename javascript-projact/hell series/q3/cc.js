var inps = document.querySelectorAll('input[type="Text"]')
var form = document.querySelector("form");
var h4 =document.querySelector("h4")

form.addEventListener("submit", function(ev){
    ev.preventDefault();
    for(var i=0;i<inps.length;i++){
        h4.textContent="error";
        h4.style.color="red"
        break;

    }
})