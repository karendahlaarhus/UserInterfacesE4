const headerGuest = `
  <img src="" />
  <p>TRAVELMONDO</p>
  <ul class="nav">
    <li><a class="meny" href="../html/meny.html">Plan a trip</a></li>
    <li><a class="meny" href="../html/meny.html">Sign up</a></li>
    <li><a class="meny" href="../html/about.html">Log in</a></li>
  </ul>

`;

const headerRegistered = `
  <img src="" />
  <p>TRAVELMONDO</p>
  <ul class="nav">
    <li><a class="meny" href="../html/meny.html">Plan a trip</a></li>
    <li><a class="meny" href="../html/meny.html">User profile</a></li>
  </ul>

`;

function addHeader() {
  const headeren = document.getElementById("header");
  headeren.innerHTML = headerGuest;
}
addHeader();
