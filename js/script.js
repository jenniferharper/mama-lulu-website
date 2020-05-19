(function($) { 
	
var controller = new ScrollMagic.Controller();
TweenLite.defaultEase =  Circ.easeInOut;

// hero image
var Tl = new TimelineMax({repeat:-1, yoyo:true});
Tl.to('svg',1, {fill:'#F89C1C', scale:1.2},0)
.to('svg',1, {fill:'#ce3909', scale:1},1)


// bottle image
var Tl = new TimelineMax({repeat:2, yoyo:true});
Tl.from('.animations .animation', 1, {y:'-40px', scale:0.8},0)
.to('.animations .animation', 1, {y:'40px', scale:.5},0)
.to('.animations .c003', 1, {rotation:'45'},0)
.to('.animations .c004', 1, {rotation:'25'},0)
// build scene
var scene = new ScrollMagic.Scene({triggerElement: ".animations", triggerHook:'0.5'})
				.setTween(Tl)
				.addTo(controller);


// navigation fade in
// build tween
var tween = TweenMax.to(".me", 0.5, {opacity:1,ease: Linear.easeNone},0);

// build scene
var scene = new ScrollMagic.Scene({triggerElement: ".hero", triggerHook:'0'})
				.setTween(tween)
				.addTo(controller);


if ($( window ).width() >= 768) {
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
}


})(jQuery);