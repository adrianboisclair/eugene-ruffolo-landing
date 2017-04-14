var SplashLanding = (function () {
    function SplashLanding() {
        this.video = document.getElementById('video');
        this.album = document.getElementById('album');
        this.book = document.getElementById('book');
        this.init();
    }
    SplashLanding.prototype.init = function () {
        this.playBegin();
    };
    SplashLanding.prototype.playBegin = function () {
        var _this = this;
        window.setTimeout(function () {
            _this.video.classList.remove('hideaway');
            _this.album.classList.remove('hideaway');
            _this.book.classList.remove('hideaway');
            console.log(_this.book);
            _this.video.play();
        }, 100);
    };
    SplashLanding.prototype.playerListener = function () {
        var video = this.video;
        video.addEventListener('progress', function () {
            var loadedPercentage = this.buffered.end(0);
            console.log(loadedPercentage);
        });
    };
    return SplashLanding;
})();
var splashLanding = new SplashLanding();
//# sourceMappingURL=script.js.map