var SplashLanding = (function () {
    function SplashLanding() {
        this.video = document.getElementById('video');
        this.init();
    }
    SplashLanding.prototype.init = function () {
        var video = this.video;
        var listener = 'progress';
        video.addEventListener(listener, function () {
            var loadedPercentage = this.buffered.end(0);
            console.log(loadedPercentage);
        });
        video.play();
    };
    return SplashLanding;
})();
var splashLanding = new SplashLanding();
//# sourceMappingURL=script.js.map