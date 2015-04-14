/**
 * Created by remi on 4/14/2015.
 */

function loadImages(  ){

    $(document).find('article img').each(function () {
        $(this).click( function(){

            window.location = document.baseURI+"/"+$(this).attr('src') ;
        });
    })

}


$( function(){

    loadImages();

});

