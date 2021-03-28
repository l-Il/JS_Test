let X = 0;
let Y = 0;
let step = 5;

document.getElementById("box").style.left = X + 'px';
document.getElementById("box").style.top = Y + 'px';
document.addEventListener('keydown', key);
document.getElementById('container').clientWidth;

function key(k) {
    switch(k.keyCode){
         case 65: // A
             if (parseInt(box.style.left) >= step)
                 box.style.left = (parseInt(box.style.left) - step) + 'px';
             break;

         case 87: // W
             if (parseInt(box.style.top) >= step)
                 box.style.top = (parseInt(box.style.top) - step) + 'px';
             break;

         case 68: // D
             if (parseInt(box.style.left) <= document.getElementById('container').offsetWidth - document.getElementById('box').offsetWidth - step)
                 box.style.left = (parseInt(box.style.left) + step) + 'px';
             break;

         case 83: // S
             if (parseInt(box.style.top) <= document.getElementById('container').offsetHeight - document.getElementById('box').offsetHeight - step)
                 box.style.top = (parseInt(box.style.top) + step) + 'px';
             break;
    }
}