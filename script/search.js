// Function to search for experiences
function search() {
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

  var input1, filter1, cards1, cardContainer1, title1, k;
  input1 = document.getElementById("search_input");
  filter1 = input1.value.toUpperCase();
  cardContainer1 = document.getElementById("top_users");
  cards1 = cardContainer1.getElementsByClassName("card");

  // Search in card text for the value from input
  for (k = 0; k < cards1.length; k++) {
    title1 = cards1[k].querySelector(".card-text");
    if (title1.innerText.toUpperCase().indexOf(filter1) > -1) {
      cards1[k].style.display = "";
    } else {
      cards1[k].style.display = "none";
    }
  }
}
