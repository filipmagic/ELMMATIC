$(document).ready(function(){
               
              $('.column').click(function(){
                var imgId = $(this).find('img').attr('id');
                
              	var image = $('#'+ imgId).attr('src');
              	$(".imgContainer img").attr('src', image);
              });        
                
       	 		});