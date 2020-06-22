 $(document).ready(function(){
         $(".service-btn").click(function(){
                serviceId = $(this).attr("id");
                $("#overlay"+serviceId).css('display','flex');
                  
      });
         $(".overlayserClose").click(function(){
                closeId = $(this).attr("id");
                $("#overlay"+closeId).css('display','none');
    });
         });
