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


$(function(){
    loadArticle('gear-review-inov-8-race-elite-24', 'Review: Inov-8 Race Elite 24');
});