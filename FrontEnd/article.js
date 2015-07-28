/**
 * Created by remi on 4/14/2015.
 */

function fillInAfiliates(){
    $("a")
}


function onLoad() {
    window.document.getElementById("status").innerHTML = "loaded";
    window.document.getElementById("status2").innerHTML = "loadedX";
}







$("#status").html("loading core..");

$.getScript("../core.js", function() {

    $("#status").html("addJStyle..");

    core.addJSStyle();


});




