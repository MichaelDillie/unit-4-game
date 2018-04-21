$(document).ready(function () {

    var randomNumber = 0;
    var numOptions = [];
    var images = ["assets/images/gem-1.png", "assets/images/gem-2.png", "assets/images/gem-3.png", "assets/images/gem-4.png"];
    var crystal = $("#crystal-row");
    var count = 0;
    var wins = 0;
    var losses = 0;

    function pickNumberOptions() {
        for (var i = 0; i < 4; i++) {
            var generateNumberOp = Math.floor(Math.random() * 9) + 1;
            numOptions.push(generateNumberOp);
        }
    }
    pickNumberOptions();

// ********* Cheat Code ******* */
//    console.log(numOptions);

    function pickAddUpNumber() {
        randomNumber = Math.floor(Math.random() * 102) + 19;
        $("#add-up-num").text(randomNumber);
    }
    pickAddUpNumber();


    function resetGame() {
        randomNumber = 0;
        numOptions = [];
        count = 0;
        $(".crystal-img").remove();
        pickAddUpNumber();
        pickNumberOptions();
        genImages();
        $("#total-score").text(count);
        $("#win-loss-message").text("");
    }




    function genImages() {
        for (var i = 0; i < numOptions.length; i++) {

            var crystalImg = $("<img>");

            crystalImg.addClass("col m1 crystal-img");

            for (var j = 0; j < images.length; j++) {
                var newImage = images[i];
                crystalImg.attr("src", newImage);
            }

            crystalImg.attr("data-crystalvalue", numOptions[i]);

            crystal.append(crystalImg);
        }
    }
    genImages();





    crystal.on("click", ".crystal-img", function () {
        var crystalValue = $(this).attr("data-crystalvalue");
        crystalValue = parseInt(crystalValue);
        count += crystalValue;
        $("#total-score").text(count);

        if (count == randomNumber) {
            console.log("Win");
            wins++;
            $("#wins").text(wins);
            resetGame();
        } else if (count >= randomNumber) {
            console.log("Loss");
            losses++;
            $("#losses").text(losses);
            resetGame();
        }
    });



});