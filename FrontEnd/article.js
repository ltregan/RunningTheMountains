/**
 * Created by remi on 4/14/2015.
 */

function fillInAfiliates(){
    $("a")
}

$("#status").html("loading core..");

$.getScript("../core.js", function() {

    $("#status").html("addJStyle..");

    core.addJSStyle();


});




