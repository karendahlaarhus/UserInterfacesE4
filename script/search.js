// Function to search for experiences
function myFunction() {
  var input, filter, cards, cardContainer, title, i, authors;
  input = document.getElementById("search_input");
  filter = input.value.toUpperCase();
  cardContainer = document.getElementById("top_experiences");
  cards = cardContainer.getElementsByClassName("card");
  authors = cardContainer.getElementsByClassName("card");

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
