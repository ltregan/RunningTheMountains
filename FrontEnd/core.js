/**
 * Created by remi on 4/14/2015.
 */

core  ={};


function updateAffiliateLinks(ipLocation, products){

    $("#status").html("updateAffiliateLinks.."+ ipLocation);


    if( ipLocation.country_code === "CH")
        ipLocation.country_code = "DE";

    $("a").each(function () {
        if ( $(this).attr("href"))
            return;
        var productName = $(this).text().trim();
        if( ! productName )
            return;
        if( ! products[productName] ) {
            alert("unknown product '" + productName + "'");
            return;
        }

        var link = products[productName][ipLocation.country_code];
        if (!link)
            link = products[productName]["default"];
        $(this).attr("href", link);
        $(this).addClass("ext");
    });
}


 $( function() {

     core.addJSStyle = function (root) {

         $("#status").html("adding jsstyle..");

         /* Article images must link to themselves in fullscreen */

         if (!root)
             root = document;
         $(root).find('article img').each(function () {
             $(this).click(function () {
                 if( $(this).attr('src').startsWith("http://") )
                     window.location = $(this).attr('src');
                 else
                    window.location = document.baseURI + $(this).attr('src');
             });
         })

         $("#status").html("as..");

         /* External links to open in a new tab */

         var n=0;

         $("a").each(function () {
             n = n+1;
             try {
                 $("#status").html("n=" + n);
                 var href = $(this).attr("href");
                 if (!href || href.startsWith("http://")) {
                     $(this).attr("target", "_blank");
                     $(this).addClass("ext");
                 }
             }catch(x){
                 $("#status2").html(x);
             }

         })

         /* assume null href are affiliate links */
         $("#status").html("getJSON 0..");
         $.getJSON("http://api.hostip.info/get_json.php", function (ipLocation) {
             $("#status").html("getJSON 1..");
             $.getJSON("/products.json", function (products) {
                 $("#status").html("gotJSON 1");
                 updateAffiliateLinks( ipLocation, products )
             });
             $("#status").html("getJSON 2..");
             $.getJSON("http://localhost:63342/RunningTheAlps/FrontEnd/products.json", function (products) {
                 $("#status").html("gotJSON 2");
                 updateAffiliateLinks( ipLocation, products )
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








