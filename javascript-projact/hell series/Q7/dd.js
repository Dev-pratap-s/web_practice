var textarea = document.querySelector("textarea");
var count = document.querySelector("#count");


textarea.addEventListener("input",function(){
    count.textContent=textarea.value.length;
})