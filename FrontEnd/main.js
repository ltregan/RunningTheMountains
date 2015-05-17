/**
 * Created by ltregan on 4/4/15.
 */

function applyStyles(baseId){


    var base = $( "#"+baseId);
    return function(e) {
        base.find('img').each(function () {
            var oldSrc = $(this).attr('src');
            var newSrc = baseId + "/" + oldSrc;
            $(this).attr('src', newSrc);
        })

        $.getScript("core.js", function() {
            core.addJSStyle( base );
        });

    };
}

function loadArticle(baseId, title){
    var base = $("#" + baseId);
    base.load(baseId +" article", applyStyles( baseId ));
}


$(function(){

    loadArticle('gear-review-inov-8-race-elite-24', 'Review: Inov-8 Race Elite 24');
    // ... more articles to come here ...
});

