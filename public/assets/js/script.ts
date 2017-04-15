/**
 * SplashLanding Class
 * Initializes the Landing Page
 */
class SplashLanding {

    isLoaded:boolean = false;
    isPlayed:boolean = false;
    splash:any = document.getElementById('landing-splash');
    video:any = document.getElementById('video');
    album:any = document.getElementById('album');
    book:any = document.getElementById('book');
    logo:any = document.getElementById('container-logo');
    intro:any = document.getElementById('container-intro');
    cta:any = document.getElementById('container-cta');

    constructor() {
        this.init();
    }

    init() {
        this.playBegin();
        this.ctaClickHandler();
    }

    playBegin() {
        let _this = this;
        _this.video.play();
        window.setTimeout(function(){
            _this.video.classList.remove('hideaway');
            _this.album.classList.remove('hideaway');
            _this.book.classList.remove('hideaway');
            _this.logo.classList.remove('hideaway');
            _this.intro.classList.remove('hideaway');
            _this.videoClickHandler();
            window.setTimeout(function(){
                _this.cta.classList.remove('hideaway');
            }, 5000);
        }, 1000);
    }

    playerListener() {
        let video = this.video;
        let _this = this;

        video.play();

        video.addEventListener('progress', function(){
            var loadedPercentage = this.buffered.end(0);
            if(loadedPercentage > 0) {
                _this.isLoaded = true;
            }
            if(_this.isLoaded && !_this.isPlayed) {
                _this.isPlayed = true;
                _this.playBegin();
            }
        });

        video.addEventListener('ended', _this.videoEndHandler, false);
    }

    videoClickHandler() {
        let _this = this;
        return this.video.addEventListener('click', function(e) {
            if(_this.video.paused) {
                _this.video.play();
            }else{
                _this.video.pause();
            }
        });
    }

    ctaClickHandler() {
        let _this = this;
        return this.cta.addEventListener('click', function(e){
            _this.splash.classList.add('fadeOut');
            _this.volumeFadeOut();
            window.setTimeout(function() {
                _this.splash.remove();
            }, 8000)
        });
    }

    volumeFadeOut() {
        console.log('volumeFadeOut');
        var _this = this;
        var handle = setInterval(myFunc,100);
        function myFunc() {
            var currentVol = _this.video.volume;
            try{
                _this.video.volume = currentVol - .02;
            } catch (e) {
                console.log('stopping video...');
                clearTimeout(handle);
            }
        }
    }

    videoEndHandler() {
        return this.cta.click();
    }
}

var splashLanding = new SplashLanding();