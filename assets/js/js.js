window.addEventListener('load',function(){
	var toggle = document.getElementById("toggle");
	toggle.addEventListener('click',function(event){
		event.preventDefault();
		document.getElementById("nav-header").classList.toggle("open");
		document.getElementById("body").classList.toggle("overflow-hidden");
	})

	
	var lastScrollTop = 0;
	window.addEventListener("scroll",function(){
		var currentScroll = window.pageYOffset ||window.body.scrollTop;
		if(currentScroll>lastScrollTop){
			console.log("down");
		}
		else{
			console.log("up");
		}
		lastScrollTop = currentScroll;
	});




})