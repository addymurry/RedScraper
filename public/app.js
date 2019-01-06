
$.getJSON("/articles", function(data) {
    // For each one
    for (var i = 0; i < data.length; i++) {

      $("#articles").append("<p id='text' data-id='" + data[i]._id + "'>" + data[i].title + "<br>" + data[i].link + "</p>" + "<br>" + "<br>");
    }
  });
  

  $(document).on("click", "p", function() {

    $("#notes").empty();

    var thisId = $(this).attr("data-id");
  
    $.ajax({
      method: "GET",
      url: "/articles/" + thisId
    })

      .then(function(data) {
        console.log(data);

        $("#notes").append("<h2 id='noteTitle'>" + data.title + "</h2>");

        $("#notes").append("<textarea id='bodyinput' name='body' class='textarea' placeholder='Comments' rows='10' ></textarea>");

        $("#notes").append("<a data-id='" + data._id + "' id='savenote' class='button is-medium is-fullwidth'>Post</a>");
  
        if (data.note) {

          $("#titleinput").val(data.note.title);

          $("#bodyinput").val(data.note.body);
        }
      });
  });
  
  $(document).on("click", "#savenote", function() {

    var thisId = $(this).attr("data-id");
  
    $.ajax({
      method: "POST",
      url: "/articles/" + thisId,
      data: {

        body: $("#bodyinput").val()
      }
    })
      .then(function(data) {

        console.log(data);

      });
  
 
    $("#bodyinput").val("");
  });
  
  function data(){
    $("#notes").append("<textarea id='bodyinput' name='body' class='textarea' placeholder='Comments' rows='10' ></textarea>");

    $("#notes").append("<a data-id='" + data._id + "'  class='button is-medium is-fullwidth' id='savenote'>Post</a>");
  }
  data();