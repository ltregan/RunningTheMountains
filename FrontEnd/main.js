/**
 * Created by ltregan on 4/4/15.
 */

function applyStyles(baseId){

    /*
    $("img").on("click", function(){
        alert("CC");
        window.location = $(this).attr('src');
    });*/


    var base = $( "#"+baseId);
    return function(e) {
        base.find('img').each(function () {
            var oldSrc = $(this).attr('src');
            var newSrc = baseId + "/" + oldSrc;
            $(this).attr('src', newSrc);
        })

        $.getScript("core.js", function() {
            core.loadImages( base );
        });

    };
}

function loadArticle(baseId, title){
    var base = $("#" + baseId);
    base.load(baseId +" article", applyStyles( baseId ));
    $(".history ol ").append("<li><a href=\""+baseId+"\">"+title+"</a></li>");
}


$(function(){

    loadArticle('gear-review-inov-8-race-elite-24', 'Review: Inov-8 Race Elite 24');
    // ... more articles to come here ...
});