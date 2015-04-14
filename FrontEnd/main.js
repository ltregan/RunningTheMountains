/**
 * Created by ltregan on 4/4/15.
 */


function loadArticleImages(baseId){
    var base = $( "#"+baseId);
    return function(e) {
        base.find('img').each(function () {
            var oldSrc = $(this).attr('src');
            var newSrc = baseId + "/" + oldSrc;
            $(this).attr('src', newSrc);
            $(this).click( function(){
                window.location = document.baseURI+"/"+newSrc;
            });
        })
    };
}

function loadArticle(baseId, title){
    var base = $("#" + baseId);
    base.load(baseId +" article", loadArticleImages(baseId));
    $(".history ol ").append("<li><a href=\""+baseId+"\">"+title+"</a></li>");
}


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
