$(document).ready(function() {

    var randomNum;
    var numOptions = [10, 5, 8, 3];
    var crystal = $("#crystal-row");

    function pickAddUpNum() {
        randomNum = Math.floor(Math.random() * 102) + 19;
        $("#add-up-num").text(randomNum);
    }
    pickAddUpNum();


    for(var i = 0; i < numOptions.length; i++) {

        var crystalImg = $("<div>");
        crystalImg.addClass("col m1 crystal-img");
        crystalImg.attr("data-crystal-value", numOptions[i]);
        crystal.append(crystalImg);
    }

    crystal.on("click", ".crystal-img", function() {
        console.log("HAS BEEN CLICKED");
    });



});