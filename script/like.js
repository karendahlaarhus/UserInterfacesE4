function like(postnr) {
  const likecount = document.getElementById("like" + postnr);
  var heartIcon = document.getElementById("heart" + postnr);
  var likecountInt = parseInt(likecount.innerHTML);

  if (heartIcon.src == "http://127.0.0.1:5500/images/icons/heart.svg") {
    heartIcon.src = "http://127.0.0.1:5500/images/icons/heart-fill.svg";
    likecountInt++;
    likecount.innerHTML = likecountInt;
  } else {
    likecountInt--;
    heartIcon.src = "http://127.0.0.1:5500/images/icons/heart.svg";
  }
  likecount.innerHTML = likecountInt;
}
