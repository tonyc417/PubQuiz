let questionGlobal;
$(".card-text").html("");

$("#generateQuest").on("click", () => {
  var queryURL = "https://opentdb.com/api.php?amount=50&type=multiple";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(response => {
    let arry = shuffle([
      ...response.results[0].incorrect_answers,
      response.results[0].correct_answer
    ]);

    var question = {
      query: response.results[0].question,
      a: arry[0],
      b: arry[1],
      c: arry[2],
      d: arry[3],
      correct: response.results[0].correct_answer
    };

    if (question.a === question.correct) {
      question.correct = "a";
    } else if (question.b === question.correct) {
      question.correct = "b";
    } else if (question.c === question.correct) {
      question.correct = "c";
    } else if (question.d === question.correct) {
      question.correct = "d";
    }

    questionGlobal = question;
    $(".card-text").html(
      question.query +
        "<br>" +
        question.a +
        "<br>" +
        question.b +
        "<br>" +
        question.c +
        "<br>" +
        question.d
    );
  });
});

shuffle = a => {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
};

$("#subQuestion").on("click", e => {
  e.preventDefault();
  if ($(".card-text").html() !== "") {
    $.ajax({
      url: "/api/questions",
      method: "POST",
      data: questionGlobal
    });
    $(".card-text").html("");
  }
});

$("#adminQuestion").on("click", () => {
  var question = {
    query: $("#newQuestion").val(),
    a: $("#choiceA").val(),
    b: $("#choiceB").val(),
    c: $("#choiceC").val(),
    d: $("#choiceD").val(),
    correct: $("#correctChoice").val()
  };

  $.ajax({
    url: "/api/questions",
    method: "POST",
    data: question
  });
});

$("#resetGame").on("click", () => {
  $.ajax({
    url: "/api/questions",
    method: "DELETE",
    data: questionGlobal
  });
  $(".card-text").html("");
});
