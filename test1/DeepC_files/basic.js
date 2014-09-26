
/*************Slide Show Function*************/
var tempbg = ["bg1.png","bg2.png","bg3.png","bg4.png","bg5.png"]
var curr = 1

   $(document).ready(setInterval(function(){
   	$("#slides").fadeOut(1000,function(){
   		if(curr == 5){
   		curr = 0;
   	}
   	$("#slides").attr("src" , tempbg[curr]);
   	curr++;

   	$("#slides").delay(800).fadeIn(1500);
   })
   	
   },6200))
 /********************************************/

 /*************Insert Function Name*************/
     $(document).ready(function(){
      if($(window).width() <= 767){
        $('#header').css('margin-top','70px')
        $('.navbar-default').css('background-color','rgb(235,235,235)')
      }
      if($(window).width() > 767){
          $(window).stellar();
          $('#s2').stellar();
          $('#s2main').stellar()
      }
     })

    $(document).ready($(window).resize(function () {
           if($(window).width() <= 767){
        $('#header').css('margin-top','70px')
        $('.navbar-default').css('background-color','rgb(235,235,235)')
      }
      else{
                $('#header').css('margin-top','0px')
        $('.navbar-default').css('background-color','transparent')
      }
    $('#slides').css({
        position: 'absolute',
        left: ($(window).width() - $('#slides').outerWidth()) / 2,
    });
}))
  /********************************************/



/*************Insert Function Name*************

$(document).ready(function(){
   	$('#togglebutton').mouseover(function(){
   		$('#s1cont').stop(true,true).animate({
   			'background-color': 'rgb(0,100,255)',
   			color: 'rgb(70,70,70)'
   		},600)
   	})
   		}
   		)

$(document).ready(function(){
   	$('#togglebutton').mouseout(function(){
   		$('#s1cont').stop(true,true).animate({
   			'background-color': 'rgb(0,192,255)',
   			color: 'white'
   		},600)
   	})
   		}
   		)

$(document).ready(function(){
   	$('#togglebutton').click(function(){
   		$('#s1info').slideToggle(800)
   		})
   	})
 /********************************************/

 /*************Insert Function Name*************

$(document).ready(function(){
   	$('#togglebutton2').mouseover(function(){
   		$('#s1cont2').stop(true,true).animate({
   			'background-color': 'rgb(0,100,255)',
   			color: 'rgb(70,70,70)'
   		},600)
   	})
   		}
   		)

$(document).ready(function(){
   	$('#togglebutton2').mouseout(function(){
   		$('#s1cont2').stop(true,true).animate({
   			'background-color': 'rgb(55,210,155)',
   			color: 'white'
   		},600)
   	})
   		}
   		)

$(document).ready(function(){
   	$('#togglebutton2').click(function(){
   		$('#s1info2').slideToggle(800);
   		})
   	})
 /********************************************/

  /*************Insert Function Name*************

$(document).ready(function(){
   	$('#togglebutton3').mouseover(function(){
   		$('#s1cont3').stop(true,true).animate({
   			'background-color': 'rgb(0,100,255)',
   			color: 'rgb(70,70,70)'
   		},600)
   	})
   		}
   		)

$(document).ready(function(){
   	$('#togglebutton3').mouseout(function(){
   		$('#s1cont3').stop(true,true).animate({
   			'background-color': 'rgb(255,200,105)',
   			color: 'white'
   		},600)
   	})
   		}
   		)

$(document).ready(function(){
   	$('#togglebutton3').click(function(){
   		$('#s1info3').slideToggle(800)
   		})
   	})
 /********************************************/

 /*************Insert Function Name*************/
 $(document).ready(function(){
 	$(window).scroll(function(){
 		if($(window).scrollTop() >= $('#divider1').height()){
 			$('.navbar-default').stop(true,false).animate({
 				'background-color': 'rgb(70,70,70)'
 			},400)
 		}
 	})
  
   	})
/***/
  $(document).ready(function(){
 	$(window).scroll(function(){
 		if($(window).scrollTop() < $('#divider1').height()){
 			$('.navbar-default').stop(true,true).animate({
 				'background-color': 'transparent'
 			},500)
 		}
 	})
  
   	})
  /********************************************/

  /*************Insert Function Name*************/
  $(document).ready(function(){
    $('#sponsors').click(function(){
      $('#logos').slideToggle(800)
      })
    })
   /********************************************/



