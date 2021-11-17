footerContent = `
  <ul>
    <li class="footer"><img src=""/></li>
    <li class="footer">TRAVELMONDO</li>
 </ul>

`;
function addfooter() {
  const footer = document.getElementById("footer");
  footer.innerHTML += footerContent;
}
addfooter();
