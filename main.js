// JavaScript Document
function main() {
  $('nav').hide();
  $('nav').fadeIn(1000);
  
  $('.submenu').hide();
  $('.genero').on('click',function(){ 
     $(this).toggleClass('active');
     $(this).next().slideToggle(400);

 
  });
  
   $('.opc-filtro').hide();
  $('.filtro h5').on('click',function(){ 
     $(this).toggleClass('filtro-activo');
     $(this).next().slideToggle(400);	 
  });
}

$(document).ready(main);