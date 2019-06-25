//Variables
var $teamName = $("#teamName");
const cursor = document.querySelector(".cursor");

//Event listener for moouse move effect
document.addEventListener("mousemove", e => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});

//Event listener for Modal
//Sends team name to the database and receives back the team ID
//Then stores the ID in local storage for later use
// localStorage.getItem("teamId"); to get team id
$("#startGame").on("click", e => {
  e.preventDefault();
  var teamName = {
    text: $teamName.val().trim()
  };

  if (!teamName.text) {
    alert("You must enter a team name!");
    return;
  }
  $.ajax({
    headers: {
      "Content-Type": "application/json"
    },
    type: "POST",
    url: "api/team",
    data: JSON.stringify(teamName)
  }).then(function(response) {
    localStorage.removeItem("qid");
    localStorage.setItem("teamId", response.id);
    window.location.href = "/quiz/" + localStorage.getItem("teamId");
  });
});
