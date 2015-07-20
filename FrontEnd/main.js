/**
 * Created by ltregan on 4/4/15.
 */

function applyStyles(baseId){


    var base = $( "#"+baseId);
    return function(e) {
        base.find('img').each(function () {
            var oldSrc = $(this).attr('src');
            if( oldSrc.indexOf("http://") >= 0)
                return;
            var newSrc = baseId + "/" + oldSrc;
            $(this).attr('src', newSrc);
        })

        $.getScript("core.js", function() {
            core.addJSStyle( base );
        });

    };
}

function loadArticle(baseId){
    var base = $("#" + baseId);
    base.load(baseId +" article", applyStyles( baseId ));
}


$(function(){


    loadArticle('eiger-101-race-report');
    loadArticle('favorite-ultra-kit');
    loadArticle('preparing-for-dragon-s-back');
    loadArticle('fenix-3-ultratrac-review');
    loadArticle('gear-review-inov-8-race-elite-24');

});

