var f = document.getElementById('box');
document.addEventListener('click', function(ev){
    f.style.left = (ev.clientX-25)+'px';
    f.style.top = (ev.clientY-25)+'px';
},false);    
