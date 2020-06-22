 $(document).ready(function(){
  		   $(".work-btn").click(function(){
                workId = $(this).attr("id");
                parentImg = $('#expimg' + workId).attr('value');
                $("#overlay"+workId).css('display','flex');
                $('#expandedImg' + workId).attr('src', parentImg);
                  
		  });
  		   $(".overlayClose").click(function(){
                closeId = $(this).attr("id");
                $("#overlay"+closeId).css('display','none');
		});
  		   });
