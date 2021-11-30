// Filter popular users based in written in search field. 
$(".form-control me-2").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    // Filter popular posts
    $(".card").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      $("#popularPostHeader").text("Most popular posts right now based on your search: " + value);
    });
    // Filter popular users
    $(".card").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      $("#popularUserHeader").text("Most popular users right now based on your search: " + value); // Kan vi bare legge denne under funkjsonen over siden begge heter card både på post og users
    });
  });

  