/**
 * Created by remi on 4/14/2015.
 */

core  ={};


$( function() {

    core.loadImages = function ( root ) {

      //  alert($.getJSON("http://ipinfo.io/")["country"] );

        if( ! root )
            root = document;
        $(root).find('article img').each(function () {
            $(this).click(function () {
                window.location = document.baseURI + "/" + $(this).attr('src');
             });
        })

        $("a").each( function(){
           if( $(this).attr("href").startsWith("http://") ){
               $(this).attr("target", "_blank");
               $(this).addClass("ext");
           }

        })


    };


} );


