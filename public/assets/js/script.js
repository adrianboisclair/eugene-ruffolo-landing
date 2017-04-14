/**
 * SplashLanding Class
 * Initializes the Landing Page
 */
var SplashLanding = (function () {
    function SplashLanding() {
        this.isLoaded = false;
        this.isPlayed = false;
        this.splash = document.getElementById('landing-splash');
        this.video = document.getElementById('video');
        this.album = document.getElementById('album');
        this.book = document.getElementById('book');
        this.logo = document.getElementById('container-logo');
        this.intro = document.getElementById('container-intro');
        this.cta = document.getElementById('container-cta');
        this.init();
    }
    SplashLanding.prototype.init = function () {
        //this.playerListener();
        this.playBegin();
        this.ctaClickHandler();
    };
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
            window.setTimeout(function () {
                _this.cta.classList.remove('hideaway');
            }, 5000);
        }, 1000);
    };
    SplashLanding.prototype.playerListener = function () {
        var video = this.video;
        var _this = this;
        video.play();
        video.addEventListener('progress', function () {
            var loadedPercentage = this.buffered.end(0);
            if (loadedPercentage > 0) {
                _this.isLoaded = true;
            }
            if (_this.isLoaded && !_this.isPlayed) {
                _this.isPlayed = true;
                _this.playBegin();
            }
        });
    };
    SplashLanding.prototype.videoClickHandler = function () {
        var _this = this;
        return this.video.addEventListener('click', function (e) {
            if (_this.video.paused) {
                _this.video.play();
            }
            else {
                _this.video.pause();
            }
        });
    };
    SplashLanding.prototype.ctaClickHandler = function () {
        var _this = this;
        var _win = window;
        this.cta.addEventListener('click', function (e) {
            _this.splash.classList.add('fadeOut');
            _win.setTimeout(function () {
                _this.splash.remove();
            }, 5000);
        });
    };
    return SplashLanding;
})();
var splashLanding = new SplashLanding();
//# sourceMappingURL=script.js.map