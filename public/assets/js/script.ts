/**
 * SplashLanding Class
 * Initializes the Landing Page
 */
class SplashLanding {

    video:any = document.getElementById('video');
    album:any = document.getElementById('album');
    book:any = document.getElementById('book');
    logo:any = document.getElementById('container-logo');
    intro:any = document.getElementById('container-intro');

    constructor() {
        this.init();
    }

    init() {
        this.playBegin();
    }

    playBegin() {
        let _this = this;
        window.setTimeout(function(){
            _this.video.classList.remove('hideaway');
            _this.album.classList.remove('hideaway');
            _this.book.classList.remove('hideaway');
            _this.logo.classList.remove('hideaway');
            _this.intro.classList.remove('hideaway');
            console.log(_this.book);
            _this.video.play();
        }, 100);
    }

    playerListener() {
        let video = this.video;

        video.addEventListener('progress', function(){
            var loadedPercentage = this.buffered.end(0);
            console.log(loadedPercentage);
        });
    }
}

var splashLanding = new SplashLanding();