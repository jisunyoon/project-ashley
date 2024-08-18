if (document.querySelectorAll('.banner_wrapper li').length > 1) {

    ///////////////////////// banner ////////////////////////////////
    var slide = $('.banner_wrapper li'),
        currentIdx = 0,
        pager = $('.paper .bx-pager-item'),
        timer = undefined;

    pager.click(function () {
        var $this = $(this);
        var idx = $this.index();
        moveSlide(idx);
    });

    function moveSlide(i) {
        if (currentIdx == i) return;
        var currentSlide = slide.eq(currentIdx);
        var nextSlide = slide.eq(i);

        currentSlide.css({
            left: 0
        }).stop().animate({
            left: '-100%'
        }, 500);
        nextSlide.css({
            left: '100%'
        }).stop().animate({
            left: 0
        }, 500);


        pager.removeClass('active');
        pager.eq(i).addClass('active');

        currentIdx = i;
    }

    //자동슬라이드
    function autoSlide() {
        if (timer == undefined) {

            timer = setInterval(function () {
                var x = currentIdx + 1;
                if (x == slide.length) {
                    x = 0;
                }
                moveSlide(x);

            }, 3000);
        }
    }

    function stopSlide() {
        clearInterval(timer);
        timer = undefined;
    }
    autoSlide();

    // 슬라이드에 마우스를 올리면 멈추고, 나가면 다시 자동슬라이드.
    slide.mouseover(function () {
            stopSlide();
        })
        .mouseout(function () {
            autoSlide();
        });



    ///////////////////////// Mainslide ////////////////////////////////
    var Wrapper = document.querySelector('.main-menu-contents'),
        slideUl = Wrapper.querySelector('.menu-list'),
        slideLi = slideUl.querySelectorAll('li'),
        slideCount = slideLi.length,
        index = 0,
        prevBtn = document.querySelector('.main-btn-control .prev'),
        nextBtn = document.querySelector('.main-btn-control .right');

    for (var a = 0; a < slideCount; a++) {
        slideLi[a].style.left = a * 370 + 'px';
    }

    function mainmoveSlide(b) {
        slideUl.style.left = -b * 370 + 'px';
        index = b;
    }
    nextBtn.addEventListener('click', function () {
        if (index < slideCount - 3) {
            mainmoveSlide(index + 1);
        } else {
            mainmoveSlide(0);
        }
    });
    prevBtn.addEventListener('click', function () {
        if (index > 0) {
            mainmoveSlide(index - 1);
        } else {
            mainmoveSlide(slideCount - 3);
        }
    });


    ///////////////////////// video ////////////////////////////////

    var videoSlides = document.querySelector('.video-info .video-info-slides'),
        videoSlide = videoSlides.querySelectorAll('li'),
        videoSlideIdx = 0,
        videoCount = videoSlide.length,

        pBtn = document.querySelector('.btn_controls .prev'),
        nBtn = document.querySelector('.btn_controls .right');


    for (var p = 0; p < videoCount; p++) {
        videoSlide[p].style.left = p * 100 + '%';
    }

    function videoMoveSlide(n) {
        videoSlides.style.left = -n * 100 + '%';
        videoSlideIdx = n;
    }

    nBtn.addEventListener('click', function () {
        if (videoSlideIdx < videoCount - 1) {
            videoMoveSlide(videoSlideIdx + 1);
        } else {
            videoMoveSlide(0);
        }
    });
    pBtn.addEventListener('click', function () {
        if (videoSlideIdx > 0) {
            videoMoveSlide(videoSlideIdx - 1);
        } else {
            videoMoveSlide(videoCount - 1);
        }
    });

    //////////////////////carousel///////////////////////

    var carouselWrapper = document.querySelector('aside .container');
    var carouselSlides = carouselWrapper.querySelector('.carousel-content');
    var carouselSlide = document.querySelectorAll('.carousel-content li');
    var carouselCount = carouselSlide.length;
    var currentcarousel = 0;
    var carouseltimer = undefined;

    for (var c = 0; c < carouselCount; c++) {
        carouselSlide[c].style.left = c * 140 + 'px';
    }

    function carouselMoveSlide(slidenum) {
        carouselSlides.style.left = slidenum * -140 + 'px';
        currentcarousel = slidenum;
    }



    function carouselAutoSlide() {
        carouseltimer = setInterval(function () {
            var nextindex = (currentcarousel + 1) % carouselCount;
            if (nextindex == carouselSlide.length - 8) {
                nextindex = 0;
            }
            carouselMoveSlide(nextindex);
        }, 2000);
    }
    carouselAutoSlide();

    // popup //
    var popup = document.querySelector('.popup');
    console.log(popup);
    var popupClose = document.querySelector('.popup > div .close');

    popupClose.addEventListener('click', function () {
        popup.style.display = 'none';
    });



} // ************************************************if문*************************************//

///////////////////////// header ////////////////////////////////

//header 고정//

var header = document.querySelector('header');
var headerOST = header.offsetTop;

window.addEventListener('scroll', function () {
    var scrollAmt = window.pageYOffset;

    console.log(scrollAmt);

    if (scrollAmt > headerOST) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }

});


// 서브 메뉴 //

var menu = document.querySelectorAll('nav > .mainmenu > li'),
    header = document.querySelector('header'),
    headerHgt = header.offsetHeight;

menu.forEach(function (item) {
    item.addEventListener('mouseover', function () {
        var subHgt = this.querySelector('ul').offsetHeight;
        header.style.height = headerHgt + subHgt + 'px';

    });
    item.addEventListener('mouseout', function () {
        header.style.height = headerHgt + 'px';
    });

});



////////////////////////////////////////////////////////////////////////////
//////////////////////////customerpage/////////////////////////////////////

var panelQustion = document.querySelectorAll('.panel-question');


for (var q of panelQustion) {
    q.addEventListener('click', function () {
        hideAll();
        this.classList.add('active');
    });
}

function hideAll() {
    for (var q of panelQustion) {
        q.classList.remove('active');
    }
}