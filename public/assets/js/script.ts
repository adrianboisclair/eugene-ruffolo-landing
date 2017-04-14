


class SplashLanding {
    video:any = document.getElementById('video');
    constructor() {
        this.init();
    }

    init() {
        let video = this.video;
        let listener = 'progress';
        video.addEventListener(listener, function(){
            var loadedPercentage = this.buffered.end(0);
            console.log(loadedPercentage);
        });
        video.play();
    }
}

var splashLanding = new SplashLanding();
