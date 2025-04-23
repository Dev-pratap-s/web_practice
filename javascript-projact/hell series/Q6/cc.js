var input =document.querySelector("input")

var data = [
    {name: "harsh", src:"https://images.unsplash.com/photo-1557296387-5358ad7997bb?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "harshika", src:"https://images.unsplash.com/photo-1493136289900-28660d718589?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "harshika", src:"https://plus.unsplash.com/premium_photo-1668485968590-aff3717c1dbe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "shyam", src:"https://plus.unsplash.com/premium_photo-1688497831136-0b76172b0f5f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}

]
var pers ="";
data.forEach(function(elem){
        pers += ` <div class="person">
                    <div class="img">
                        <img src="${elem.src}" alt="">
                    </div>
                    <h4>${elem.name}</h4>
                </div>`
})

document.querySelector(".people").innerHTML =pers;

input.addEventListener("input",function(){
    var matching = data.filter(function(e){
           return e.name.startsWith(input.value)

    })
    var newusers="";
    matching.forEach(function(elem){
        newusers += ` <div class="person">
                    <div class="img">
                        <img src="${elem.src}" alt="">
                    </div>
                    <h4>${elem.name}</h4>
                </div>`
})
        document.querySelector(".people").innerHTML=newusers;
})