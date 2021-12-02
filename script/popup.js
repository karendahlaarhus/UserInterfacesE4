var togglePopup = (popup) => {
  var popupModal = document.getElementById(popup);
  popupModal.classList.toggle("show_popup");
};

var toggleMapPopup = (popup) => {
  var popupMapModal = document.getElementById(popup);
  popupMapModal.classList.toggle("show_map_popup");
};
