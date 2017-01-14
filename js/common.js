$(document).ready(function(){

	//fulpageJS

	 $(document).ready(function() {
	$('#fullpage').fullpage({
		anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage', 'eighthPage'],
		menu: '#myMenu'
	});
});


	/*nav btn toggle*/
	$('.nav-btn').click(function(){
		$('.bl-link').slideToggle();
	})

	//Slider
	 // $('.carousel').carousel({
  //     interval: 6000
  //   })


	 //Scroll header
	//  $(window).scroll(function() {
	// 	if ($(this).scrollTop() > 0){  
 //   			$('.navigation').addClass("scroll-nav");
 //  		}else{
 // 		   $('.navigation').removeClass("scroll-nav");
 // 		}
	// });

	 




})

