/**
 * SplashLanding Class
 * Initializes the Landing Page
 */
var SplashLanding = (function () {
    function SplashLanding() {
        this.isLoaded = false;
        this.isPlayed = false;
        this.body = document.querySelector('body');
        this.splash = document.getElementById('landing-splash');
        this.video = document.getElementById('video');
        this.album = document.getElementById('album');
        this.book = document.getElementById('book');
        this.logo = document.getElementById('container-logo');
        this.intro = document.getElementById('container-intro');
        this.cta = document.getElementById('container-cta');
        this.playBegin();
        this.ctaClickHandler();
        this.videoEndHandler();
    }
    SplashLanding.prototype.playBegin = function () {
        var _this = this;
        _this.video.play();
        window.setTimeout(function () {
            _this.video.classList.remove('hideaway');
            _this.album.classList.remove('hideaway');
            _this.book.classList.remove('hideaway');
            _this.logo.classList.remove('hideaway');
            _this.intro.classList.remove('hideaway');
            _this.videoClickHandler();
            _this.tempSiteSimulator();
            window.setTimeout(function () {
                _this.cta.classList.remove('hideaway');
            }, 3000);
        }, 1000);
    };
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
    SplashLanding.prototype.videoClickHandler = function () {
        var video = this.video;
        return video.addEventListener('click', function (e) {
            if (video.paused) {
                video.play();
            }
            else {
                video.pause();
            }
        });
    };
    SplashLanding.prototype.ctaClickHandler = function () {
        var _this = this;
        var splash = this.splash;
        return _this.cta.addEventListener('click', function (e) {
            splash.classList.add('fadeOut');
            _this.volumeFadeOut();
            window.setTimeout(function () {
                _this.splash.remove();
            }, 8000);
        });
    };
    SplashLanding.prototype.volumeFadeOut = function () {
        var _this = this;
        var handle = setInterval(myFunc, 100);
        function myFunc() {
            try {
                _this.video.volume = _this.video.volume - .02;
            }
            catch (e) {
                clearTimeout(handle);
            }
        }
    };
    SplashLanding.prototype.videoEndHandler = function () {
        var _this = this;
        return _this.video.addEventListener('ended', function (e) {
            _this.cta.click();
        }, false);
    };
    SplashLanding.prototype.tempSiteSimulator = function () {
        return this.body.classList.add('activated');
    };
    return SplashLanding;
})();
var splashLanding = new SplashLanding();
//# sourceMappingURL=script.js.map