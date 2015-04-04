/**
 * Created by ltregan on 4/4/15.
 */



function openLightBox( obj ){
    

    var div = document.createElement('div');

    div.style.position = "fixed";
    div.style.left = '0px';
    div.style.top = '0px';
    div.style.width = window.innerWidth;
    div.style.minWidth = window.innerWidth;
    div.style.height = window.innerHeight;
    div.style.minHeight = window.innerHeight;
    div.classList.add("lightbox");
//    div.innerHTML = "<img src=\""+obj.src+"\" style=\"max-width:10%;max-height:10%;transform:scale(10%);\" >";
    div.innerHTML = "<img src=\""+obj.src+"\" >";
    div.onclick = closeLightBox;
    document.body.appendChild(div);
    div.focus();
}

function closeLightBox( ){
    this.parentNode.removeChild(this);
}
