
/*
*Función jQuery que permite que se ejecute Splash Screen

$(document).ready(function () {
  $('.splash-screen').fadeOut(4000);
})
*/

$(document).ready(function(){
  $(".img").mouseover(function(){
    $(".img").css("color", "yellow");
  });
  $(".img").mouseout(function(){
    $(".img").css("color", "lightgray");
  });
});
