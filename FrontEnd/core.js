/**
 * Created by remi on 4/14/2015.
 */

core  ={};


 $( function() {

     core.addJSStyle = function (root) {

         /* Article images must link to themselves in fullscreen */

         if (!root)
             root = document;
         $(root).find('article img').each(function () {
             $(this).click(function () {
                 window.location = document.baseURI + $(this).attr('src');
             });
         })

         /* External links to open in a new tab */

         $("a").each(function () {
             var href = $(this).attr("href");
             if ( !href || href.startsWith("http://")) {
                 $(this).attr("target", "_blank");
                 $(this).addClass("ext");
             }

         })

         /* assume null href are affiliate links */
         $.getJSON("http://api.hostip.info/get_json.php", function (ipLocation) {
             $.getJSON("/products.json", function (products) {
                 $("a").each(function () {
                     if (!$(this).attr("href")) {
                         var productName = $(this).html();
                         var link = products[productName][ipLocation.country_code];
                         if (!link)
                             link = products[innerText]["default"];
                         if (!link)
                             $(this).html("XXXXX");
                         else
                             $(this).attr("href", link);
                     }
                 });
             });
         });
     };
 });


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');



ga('create', 'UA-5218760-2', 'auto');
ga('send', 'pageview');








