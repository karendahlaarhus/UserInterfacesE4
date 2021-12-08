const share = () => {
  ShareToFaceBook();
};
var params = "menubar=no,toolbar=no,status=no,width=570,height=570";
var url = "http://127.0.0.1:5500/images/experience_images/bali.png";
function ShareToFaceBook() {
  let shareUrl = `http://www.facebook.com/sharer/sharer.phpu=${url}`;
  window.open(shareUrl, "NewWindow", params);
}
