/*
*Función principal
*/
$(document).ready(function(){
  /*
  *Función jQuery que permite que se ejecute Splash Screen
  */
  $('.splash-screen').fadeOut(4000);

  /*
  *Función filtro, ocupé el evento change ya que corresponde a la etiqueta select.
  */
  $('select').change(function() {
    var textoFiltro = $(this).val()
    if(textoFiltro == 'todas'){
      $('div.filter div.hidden').fadeIn('slow').removeClass('hidden');
    } else {
      $('.filter div').each(function() {
        if(!$(this).hasClass(textoFiltro)) {
          $(this).fadeOut('normal').addClass('hidden');
        } else {
          $(this).fadeIn('slow').removeClass('hidden');
        }
      });
    }
    return false;
  });

  /*
  *Función que muestra el nombre del restorante al posisionarse sobre la foto
  */
  $('.contenedor1').mouseover(function () {
  $('.food-overlay1').show();
  }).mouseout(function () {
    $('.food-overlay1').hide();
  });





});