// Function to search for experiences
function myFunction() {
  var input, filter, cards, cardContainer, title, i;
  input = document.getElementById("search_input");
  filter = input.value.toUpperCase();
  cardContainer = document.getElementById("top_experiences");
  cards = cardContainer.getElementsByClassName("card");

  // Search in card text for the value from input
  for (i = 0; i < cards.length; i++) {
    title = cards[i].querySelector(".card-text");
    if (title.innerText.toUpperCase().indexOf(filter) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}

/* 
// Denne mangler noe greier. Tror de andre er bedre forslag da
$("#search_input").on("keyup", function() {
  var input = $(this).val().toUpperCase();
  var visibleCards = 0;
  var hiddenCards = 0;

  $(".card").append($("<div class='card-group card-group-filter'></div>"));


  $(".card-text").each(function() {
    if ($(this).data("string").toUpperCase().indexOf(input) < 0) {

      $(".card-group.card-group-filter:first-of-type").append($(this));
      $(this).hide();
      hiddenCards++;

    } else {

      $(".card-group.card-group-filter:last-of-type").prepend($(this));
      $(this).show();
      visibleCards++;

      if (((visibleCards % 4) == 0)) {
        $(".container").append($("<div class='card-group card-group-filter'></div>"));
      }
    }
  });
  $(".card-group").each(function() {
    if ($(this).find("div").length == 0) {
      $(this).remove();
    }
  })
});
*/

/* 
// Filter popular users based in written in search field. 
$(document).ready(function(){ 
  $("#search_input").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".card-text").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        //$("#popularPostHeader").text("Most popular posts right now based on your search: " + value);
        //$("#popularUserHeader").text("Most popular users right now based on your search: " + value);
    });
  });
});
*/

// Problemet er om vi bruker denne funksjonen har ikke søkeknappen noe formål
// Tror ikke det er så brukervennlig ??
/*$(document).ready(function() { 
  $("#search_input").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#top_experiences .card .card-body .card-text").filter(function() {
      alert($(this).text().toLowerCase());
    });
  });
});*/

/* $(".form-control").on("keyup", function() {
  var input = $(this).val().toUpperCase();

  $(".card").each(function() {
    if ($(this).data("string").toUpperCase().indexOf(input) < 0) {
      $(this).hide();
    } else {
      $(this).show();
    }
  })
});
*/

/*
const searchButton = document.getElementById("search_button"); //receives search-button
const resetButton = document.getElementById("reset-button"); //receives set-button
const searchInput = document.getElementById("search_input"); //receives search_input
const cardContainer = document.getElementById("top_experiences"); //receives experiences-list
const nothingFoundText = document.getElementById("nothing-found-text"); //receives nothing-found-text

console.log(cardContainer.querySelectorAll(".card-body"))

var hiddenCardCount = 0;

resetButton.style.visability = "hidden";
nothingFoundText.style.visibility = "hidden";

//Click-search-button-function
const handleClickSearchButton = () => {
  const searchInputValue = searchInput.value.toLowerCase(); //gets userinput from search bar

  //selects all cards
  cardContainer.querySelectorAll(".card .card-body").forEach((el) => {
    el.parentElement.style.display = "block";
  });

  cardContainer.querySelectorAll(".card .card-body").forEach((el) => {
    const title = el.innerHTML.toLowerCase();
    if (!title.includes(searchInputValue)) {
      el.parentElement.style.display = "none"; //if searchtext doesn't match experience card, it hides card.
      hiddenCardCount += 1;
    }
  });

  //show nothing-found-text when there are no matching cards to the search query
  if (hiddenCardCount == cardContainer.querySelectorAll(".card").length) {
    nothingFoundText.style.visibility = "visible";
  }
  resetButton.style.visibility = "visible"; //show reset-button
  hiddenCardCount = 0;
};

const handleClickResetButton = () => {
  //Click-reset-button-function
  cardContainer.querySelectorAll(".card .card-body").forEach((el) => {
    el.parentElement.style.display = "block";
  });
  searchInput.value = null;
  resetButton.style.visibility = "hidden";
  nothingFoundText.style.visibility = "hidden";
  hiddenCardCount = 0;
};

searchButton.addEventListener("click", handleClickSearchButton);
resetButton.addEventListener("click", handleClickResetButton);
*/
