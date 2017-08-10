$(document).on("click",".number_submit",function() {
  var number_of_people = $("select").val();
  number_of_people = Number(number_of_people);
  $("#main").html("")
  for(i=0; number_of_people > i; i++) {
    if(number_of_people/2 > i) {
      $("#main").append("<input type='text'>");
      console.log("ue")
    } else {
      $("#main").append("<input type='text'>");
      console.log("した")
    }

  }
  $("#main").append("<button class='name_submit'>決定</button>");
})
