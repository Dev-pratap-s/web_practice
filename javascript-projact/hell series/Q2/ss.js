
var btn = document.querySelector('button')



btn.addEventListener('click', function(){
    let img1 = document.getElementById('img1');
    let img2 = document.getElementById('img2');
            
            let tempSrc = img1.src;
            img1.src = img2.src;
            img2.src = tempSrc;
})