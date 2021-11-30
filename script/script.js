//Load all different parts of page

$(function () {
  /* if (localStorage.getItem("loggedin") == false) {
    $("#navigation").load("../components/navigation.html");
  } else {
    $("#navigation").load("../components/navigation_registered.html");
  } */
  $("#navigation").load("../components/navigation.html");
  $("#main_image").load("../components/main_image.html");
  $("#login").load("../components/login.html");
  $("#signup").load("../components/signup.html");
  $("#footer").load("../components/footer.html");
  $("#search").load("../components/search.html");
  $("#top_posts").load("../components/top_posts.html");
  $("#top_users").load("../components/top_users.html");
  $("#user").load("../components/userprofile.html");
  $("#home_title").load("../components/title_home.html");
  $("#plan_title").load("../components/title_plantrip.html");
  $("#myexperiences_title").load("../components/myexperiences_title.html");
});
