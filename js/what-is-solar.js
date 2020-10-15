$("#btn1").click(function () {
  $("#btn1").removeClass("active").addClass("active");
  $("#btn2").removeClass("active");
  $("#btn3").removeClass("active");
  $("#btn4").removeClass("active");

  $(".banned1").hide();
  $(".banned2").hide();
  $(".two-way").show();
  $(".top45").show();
  $(".down").show();
  $(".forward").show();
  $(".forward-two").show();
  $(".backward").hide();
});

$("#btn2").click(function () {
  $("#btn1").removeClass("active");
  $("#btn2").removeClass("active").addClass("active");
  $("#btn3").removeClass("active");
  $("#btn4").removeClass("active");

  $(".banned1").hide();
  $(".banned2").hide();
  $(".two-way").hide();
  $(".top45").show();
  $(".down").show();
  $(".forward").show();
  $(".forward-two").show();
  $(".backward").hide();
});

$("#btn3").click(function () {
  $("#btn1").removeClass("active");
  $("#btn2").removeClass("active");
  $("#btn3").removeClass("active").addClass("active");
  $("#btn4").removeClass("active");

  $(".banned1").show();
  $(".banned2").show();
  $(".two-way").hide();
  $(".top45").hide();
  $(".down").show();
  $(".forward").show();
  $(".forward-two").hide();
  $(".backward").show();
});

$("#btn4").click(function () {
  $("#btn1").removeClass("active");
  $("#btn2").removeClass("active");
  $("#btn3").removeClass("active");
  $("#btn4").removeClass("active").addClass("active");

  $(".banned1").hide();
  $(".banned2").show();
  $(".two-way").show();
  $(".top45").show();
  $(".down").show();
  $(".forward").show();
  $(".forward-two").hide();
  $(".backward").hide();
});

$("#btn1").click();
