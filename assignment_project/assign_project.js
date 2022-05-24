$(document).ready(function () {
    $('[name*=question]').submit(function () {
        var totalChecked = 0;
        var totalRadioGroups = 0;
        var previousName = '';
        $.each($('[name*=question]'), function (index, value) {
            var radioName = $(this).attr('name');
            var radioId = this.id;
            if (previousName != radioName) {
                totalRadioGroups++;
            }
            if ($('#' + radioId).is(':checked')) {
                totalChecked++;
            }
            previousName = radioName;
        });
    });
});

function check() {
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;
    if (question1 == "99") {
        correct++;
    }
    if (question2 == "Anatomy") {
        correct++;
    }
    if (question3 == "Delhi") {
        correct++;
    }
    var pictures = ["img/giphy (1).gif", "img/giphy.gif", "img/giphy (2).gif"];
    var messages = ["Excellent, Great Job", "Good, Thats Okay", "Poor, You really need to do better "];
        var score;
        if (correct == 0) {
            score = 2;
        }
        if (correct > 0 && correct < 3) {
            score = 1;
        }
        if (correct == 3) {
            score = 0;
        }
        document.getElementById("after_submit").style.visibility = "visible";
        document.getElementById("message").innerHTML = messages[score];
        document.getElementById("number_correct").innerHTML = "You got " + correct + "correct.";
        document.getElementById("picture").src = pictures[score];
        if (question1 != "99") {
            document.getElementById("" + question1).style.backgroundColor = "red";
            document.getElementById("a1").style.backgroundColor = "Yellow";
        } else
            document.getElementById("a1").style.backgroundColor = "Yellow";
        if (question3 != "Delhi") {
            document.getElementById("a3").style.backgroundColor = "Yellow";
            document.getElementById("" + question3).style.backgroundColor = "red";
        } else
            document.getElementById("a3").style.backgroundColor = "Yellow";
        if (question2 != "Anatomy") {
            document.getElementById("" + question2).style.backgroundColor = "red";
            document.getElementById("a2").style.backgroundColor = "Yellow";
        } else
            document.getElementById("a2").style.backgroundColor = "Yellow";
    }