/**
 * SplashLanding Class
 * Initializes the Landing Page
 */
class SplashLanding {

    isLoaded:boolean = false;
    isPlayed:boolean = false;
    body:any = document.querySelector('body');
    splash:any = document.getElementById('landing-splash');
    video:any = document.getElementById('video');
    album:any = document.getElementById('album');
    book:any = document.getElementById('book');
    logo:any = document.getElementById('container-logo');
    intro:any = document.getElementById('container-intro');
    cta:any = document.getElementById('container-cta');

    constructor() {
        this.playBegin();
        this.ctaClickHandler();
        this.videoEndHandler();
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
            _this.tempSiteSimulator();
            window.setTimeout(function(){
                _this.cta.classList.remove('hideaway');
            }, 3000);
        }, 1000);
    }

    //playerListener() {
    //    let video = this.video;
    //    let _this = this;
    //
    //    video.play();
    //
    //    video.addEventListener('progress', function(){
    //        var loadedPercentage = this.buffered.end(0);
    //        if(loadedPercentage > 0) {
    //            _this.isLoaded = true;
    //        }
    //        if(_this.isLoaded && !_this.isPlayed) {
    //            _this.isPlayed = true;
    //            _this.playBegin();
    //        }
    //    });
    //
    //    video.addEventListener('ended', _this.videoEndHandler, false);
    //}

    videoClickHandler() {
        let video = this.video;
        return video.addEventListener('click', function(e) {
            if(video.paused) {
                video.play();
            }else{
                video.pause();
            }
        });
    }

    ctaClickHandler() {
        let _this = this;
        let splash = this.splash;
        return _this.cta.addEventListener('click', function(e){
            splash.classList.add('fadeOut');
            _this.volumeFadeOut();
            window.setTimeout(function() {
                _this.splash.remove();
            }, 8000)
        });
    }

    volumeFadeOut() {
        let _this = this;
        let handle = setInterval(myFunc,100);
        function myFunc() {
            try{
                _this.video.volume = _this.video.volume - .02;
            } catch (e) {
                clearTimeout(handle);
            }
        }
    }

    videoEndHandler() {
        let _this = this;
        return _this.video.addEventListener('ended', function(e){
            _this.cta.click();
        }, false);
    }

    tempSiteSimulator() {
        return this.body.classList.add('activated');
    }

}

var splashLanding = new SplashLanding();