(function(){
	"use strict";
	window.addEventListener("load", function(){
        var startInterval, preloadedCount = 60,
            screen, screenElement = document.getElementsByClassName("screen")[0],
            imagesArray = imagePreloader(preloadedCount, "screens/screen_", "jpg");
        screen =  new FrameAnimation(screenElement, {
            startIndex: 1,
            src: 'screens/',
            imagesArray: imagesArray,
            count: preloadedCount,
            repeat: true,
            time: 50
        });
        startInterval = setInterval(function(){
            if(imagesArray[preloadedCount - 1].complete){
                screen.animate();
                clearInterval(startInterval);
            }
        }, 202);
    });
})();