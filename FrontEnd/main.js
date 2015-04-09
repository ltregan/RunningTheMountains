/**
 * Created by ltregan on 4/4/15.
 */



function openLightBox( obj ){


    var div = document.createElement('div');
    div.classList.add("lightbox");
  //  div.innerHTML = "<div><p><img src=\""+obj.src+"\" ></div></p>";
    div.innerHTML = "<img src=\""+obj.src+"\" >";
    div.onclick = closeLightBox;
    var img = div.firstChild;
    if( img.width > img.height )
        img.width = "100%";
    else
        img.height = "100%";


    document.body.appendChild(div);



    div.focus();
}

function closeLightBox( ){
    this.parentNode.removeChild(this);
}
