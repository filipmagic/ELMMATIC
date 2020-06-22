 $(document).ready(function(){       
            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 110) {
                    $(".menu").css({
                    	 'background' : '#282e3e',
                         'border-bottom' : 'none',
                         'transition' : '1s'
                     });
                    $(".menu-items a").css('color', '#ffffff');
                   
                } else {
                   $(".menu").css({
                    	 'background' : 'none',
                         'border-bottom' : 'none',
                         'transition' : '1s'
                     });
                   $(".menu-items a").css('color', '#ffffff');
                   
                }
            });
        });