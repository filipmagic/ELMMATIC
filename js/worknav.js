$(document).ready(function(){
              
                $('.workbtn:eq(0)').click(function(){
                  $('.elInstalacije, .razOrmar, .automatika').css('display', 'block');
                  $('.workbtn:eq(0)').addClass('workactive');
                  $('.workbtn:eq(1), .workbtn:eq(2), .workbtn:eq(3)').removeClass('workactive');
               });

               $('.workbtn:eq(1)').click(function(){
               	$('.razOrmar').css('display','block');
                  $('.elInstalacije, .automatika').css('display', 'none');
                  $('.workbtn:eq(1)').addClass('workactive');
                  $('.workbtn:eq(0), .workbtn:eq(2), .workbtn:eq(3)').removeClass('workactive');


               });
               $('.workbtn:eq(2)').click(function(){
               	  $('.elInstalacije').css('display', 'block');
                  $('.razOrmar,.automatika').css('display', 'none');
                  $('.workbtn:eq(2)').addClass('workactive');
                  $('.workbtn:eq(0), .workbtn:eq(1), .workbtn:eq(3)').removeClass('workactive');
               });
               $('.workbtn:eq(3)').click(function(){
                  $('.automatika').css('display', 'block');
                  $('.razOrmar, .elInstalacije').css('display', 'none');
                  $('.workbtn:eq(3)').addClass('workactive');
                  $('.workbtn:eq(0), .workbtn:eq(1), .workbtn:eq(2)').removeClass('workactive');
               });

             });