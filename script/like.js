function like(postnr) {
  const likecountSmall = document.getElementById("like" + postnr);
  const likecountPopup = document.getElementById("popupLike" + postnr);
  var heartIconSmall = document.getElementById("heart" + postnr);
  var heartIconPopup = document.getElementById("heartPopup" + postnr);

  console.log(likecountSmall);
  var likecountSmallInt = parseInt(likecountSmall.innerHTML);
  var likecountPopupInt = parseInt(likecountPopup.innerHTML);

  if (heartIconSmall.src == "http://127.0.0.1:5500/images/icons/heart.svg") {
    heartIconSmall.src = "http://127.0.0.1:5500/images/icons/heart-fill.svg";
    heartIconPopup.src = "http://127.0.0.1:5500/images/icons/heart-fill.svg";

    likecountSmallInt++;
    likecountPopupInt++;
  } else {
    likecountSmallInt--;
    likecountPopupInt--;
    heartIconSmall.src = "http://127.0.0.1:5500/images/icons/heart.svg";
    heartIconPopup.src = "http://127.0.0.1:5500/images/icons/heart.svg";
  }
  likecountSmall.innerHTML = likecountSmallInt;
  likecountPopup.innerHTML = likecountPopupInt;
}
