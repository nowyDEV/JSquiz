/**
 * Created by Dominik on 2016-03-31.
 */
$(document).ready(function() {
    var allQuestions = [
            {question: "Who is Prime Minister of the United Kingdom?",
                choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"],
                correctAnswer: 0},
            {question: "Who is Prime Minister of Poland?",
                choices: ["Piotr Szumlewicz", "Andrzej Gołota", "Jan Paweł 2", "Lech Wałęsa"],
                correctAnswer: 1},
            {question: "Where does Kangaroo live?",
                choices: ["North America", "Europe", "Arctic", "Africa", "Australia"],
                correctAnswer: 4},
            {question: "What's the best cRPG ever made?",
                choices: ["Baldur's Gate", "Gothic", "Morrowind", "Witcher"],
                correctAnswer: 0},
            {question: "What's the best twitch emote?",
                choices: ["Frankerz", "BibbleThump", "Kappa" ],
                correctAnswer: 2}],
        questionField = $('#question'),
        formField = $('#answers'),
        actionButton = $('#action-btn'),
        userScore = 0,
        questionNum = 0,
        questionsAmount = allQuestions.length;


    actionButton.on('click', function() {
        if (questionNum < questionsAmount) {
            actionButton.text("Next");
            score(questionNum - 1);
            create(questionNum);
            questionNum += 1;

        }
        else {
            score(questionNum - 1);
            scoreDisplay();
            userScore = 0;
        }
    });

    function create (qNumber) {
        clearForm();

        questionField.text(allQuestions[qNumber].question);

        var answersAmount = allQuestions[qNumber].choices.length;
        for (var i = 0; i < answersAmount; i++) {
            formField.append('<label for="radio' + i + '"' + '  >' + allQuestions[qNumber].choices[i] + '</label>');
            formField.append('<input type="radio" name="radiobtn" value=' + i + ' id="radio' + i + '"' + '  >');

        }
    }

    function score (qNumber) {
        if (qNumber < 0) {
            return;
        }
        else {
            var ansValue = $('#answers input[name="radiobtn"]:checked').val();
            if (parseFloat(ansValue) === allQuestions[qNumber].correctAnswer) {
                userScore += 1;
            }
        }
        }


    function scoreDisplay() {
        clearForm();

        questionField.text("Your final score is: " + userScore);
        actionButton.text("Play Again");
        questionNum = 0;

    }

    function clearForm() {
        formField.empty();
    }

});

