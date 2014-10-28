

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
      if($(window).width() <= 750){
        $('#header').css('margin-top','70px')
        $('.navbar-default').css('background-color','rgb(235,235,235)')
        $('.navbar-default .navbar-nav > li > a').css(
          'background-color', 'rgb(0,192,255)')
        $('.navbar-default .navbar-nav > li > a').css(
          'border-radius', '8px')
      }
      if($(window).width() > 750){
          $(window).stellar();
          $('#s2').stellar();
          $('#s2main').stellar()
      }
     })

    $(document).ready($(window).resize(function () {
           if($(window).width() <= 750){
        $('#header').css('margin-top','70px')
        $('.navbar-default').css('background-color','rgb(235,235,235)')
        $('.navbar-default .navbar-nav > li > a').css(
          'background-color', 'rgb(0,192,255)')
        $('.navbar-default .navbar-nav > li > a').css(
          'border-radius', '8px')
      }
      else{
        $('#header').css('margin-top','0px')
        $('.navbar-default').css('background-color','transparent')
        $('.navbar-default .navbar-nav > li > a').css(
          'background-color', 'transparent')
      }
    $('#slides').css({
        position: 'absolute',
        left: ($(window).width() - $('#slides').outerWidth()) / 2,
    });
}))
  /********************************************/



/*************Insert Function Name*************/

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
      if($('#s1one').css('opacity') == '0'){
        $('#dum1').animate({
          'opacity': '0.0'
        },300)
        $('#s1one').animate({
          'opacity': '1.0'
        },1000)
        $('#real1').animate({
          'opacity': '1.0'
        },1000)
      }
      else{
        $('#dum1').animate({
          'opacity': '1.0'
        },1000)
        $('#s1one').animate({
          'opacity': '0.0'
        },1000)
        $('#real1').animate({
          'opacity': '0.0'
        },1000)
      }
   		})
   	})
 /********************************************/

 /*************Insert Function Name*************/

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
      if($('#s1two').css('opacity') == '0'){
        $('#dum2').animate({
          'opacity': '0.0'
        },300)
        $('#s1two').animate({
          'opacity': '1.0'
        },1000)
        $('#real2').animate({
          'opacity': '1.0'
        },1000)
      }
      else{
        $('#dum2').animate({
          'opacity': '1.0'
        },1000)
        $('#s1two').animate({
          'opacity': '0.0'
        },1000)
        $('#real2').animate({
          'opacity': '0.0'
        },1000)
      }
      })
    })


 /********************************************/

  /*************Insert Function Name*************/

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
      if($('#s1three').css('opacity') == '0'){
        $('#dum3').animate({
          'opacity': '0.0'
        },300)
        $('#s1three').animate({
          'opacity': '1.0'
        },1000)
        $('#real3').animate({
          'opacity': '1.0'
        },1000)
      }
      else{
        $('#dum3').animate({
          'opacity': '1.0'
        },1000)
        $('#s1three').animate({
          'opacity': '0.0'
        },1000)
        $('#real3').animate({
          'opacity': '0.0'
        },1000)
      }
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

/*************Insert Function Name*************/
   $(document).ready(setInterval(function(){
   if($(window).scrollTop() >= ($("#s3main").offset().top - 280 )){
    $('#s3pic').stop(true,false).animate({
      opacity: 1.0
    },250)
   }
   else{
    $('#s3pic').stop(true,false).animate({
      opacity: 0.0
    },250)
   }
   },250))
 /************
 /********************************************/
   /*************Insert Function Name*************/
  $(document).ready(function(){
    $('#top').click(function(){
      $('body').scrollTo(0,{duration:800});
      })
    })

    $(document).ready(function(){
    $('#about').click(function(){
      $('body').scrollTo('#s1head',{duration:800,offset:-70});
      })
    })

    $(document).ready(function(){
    $('#technology').click(function(){
      $('body').scrollTo('#s2',{duration:800,offset:-70});
      })
    })

        $(document).ready(function(){
    $('#parts').click(function(){
      $('body').scrollTo('#s4header',{duration:800,offset:-70});
      })
    })

            $(document).ready(function(){
    $('#contact').click(function(){
      $('body').scrollTo('#s5',{duration:800,offset:-70});
      })
    })


  /*
   $(document).ready(function(){
    $('#sponsors').click(function(){
      $('#logos').slideToggle(800)
      })
    })
    $(document).ready(function(){
    $('#sponsors').click(function(){
      $('#logos').slideToggle(800)
      })
    })
     $(document).ready(function(){
    $('#sponsors').click(function(){
      $('#logos').slideToggle(800)
      })
    })
      $(document).ready(function(){
    $('#sponsors').click(function(){
      $('#logos').slideToggle(800)
      })
    })
   /********************************************/


