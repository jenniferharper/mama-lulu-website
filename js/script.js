(function($) { 
var controller = new ScrollMagic.Controller();
TweenLite.defaultEase =  Circ.easeInOut;


var Tl = new TimelineMax({repeat:-1, yoyo:true});
Tl.to('svg',1, {fill:'#F89C1C', scale:1.2},0)
.to('svg',1, {fill:'#ce3909', scale:1},1)


var Tl = new TimelineMax({repeat:-1, yoyo:true});
Tl.from('.animations .animation', 1, {y:'-40px', scale:1.1},0)
.to('.animations .animation', 1, {y:'40px', scale:.7},0)
.to('.animations .c003', 1, {rotation:'45'},0)
.to('.animations .c004', 1, {rotation:'25'},0)



// build tween
var tween = TweenMax.to(".me", 0.5, {opacity:1,ease: Linear.easeNone},0);

// build scene
var scene = new ScrollMagic.Scene({triggerElement: ".hero", triggerHook:'0'})
				.setTween(tween)
				.addTo(controller);



// image zoom
$(".branding").each(function() {
	var tl = new TimelineMax();
	var img = $(this).find(".zoom");	
  tl.from(img,3, { width:'200%', height:'200%', transformOrigin:"50% 50%", ease:Power4.easeOut }, "reveal");
  
	var scene = new ScrollMagic.Scene({
	  triggerElement: this,
    triggerHook: 0.5,
    offset:'-200',
    repeat:false
  })
  // .addIndicators()
	.setTween(tl)
  .addTo(controller);   
  });


})(jQuery);