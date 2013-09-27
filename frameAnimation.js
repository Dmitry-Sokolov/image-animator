(function(){
	"use strict";
	var i, image;
	function imagePreloader(count, path, type){
		var resultArray = [];
		for(i = 1; i <= count; i++){
			image =  new Image();
			image.src = path + i + "." + (type || "png");
			resultArray.push(image);
		}
		return resultArray;
	}
	function FrameAnimation(element, options){
		this.element = element;
		Object.keys(options).forEach(function(option){
			this[option] = options[option];
		}, this);
		this.counter = this.startIndex;
	}
	FrameAnimation.prototype.animate = function(){
		var that = this;
		this.animationInterval = setInterval(function(){
			that.element.style.backgroundImage = "url('" + that.imagesArray[that.counter].src + "')";
			that.counter++;
			if(that.counter === that.count - 1){
				that.stopAnimate();
				if(that.repeat){
					that.animate();
				}
			}
		}, that.time);
	};
	FrameAnimation.prototype.stopAnimate = function(){
		clearInterval(this.animationInterval);
		this.counter = this.startIndex;
	};
	window.imagePreloader = imagePreloader;
	window.FrameAnimation = FrameAnimation;
})();