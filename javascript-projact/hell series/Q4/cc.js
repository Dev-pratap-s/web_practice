var add= document.querySelector("#add");
var remove = document.querySelector("#remove");
var inp = document.querySelector("#inp")

add.addEventListener("click",function(){
    if(inp.Value.trim() === ''){

    }
    else{
        var li = document.createElement("li")
        li.textContent=inp.Value;
        console.log(li)
    }
})