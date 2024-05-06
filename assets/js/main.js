gsap.defaults({ ease: "none", })

$('#header .btn-lang').click(function (e) {
  e.preventDefault();
  $('#header .lang-list').toggleClass('active');

  const isExpanded = $(this).attr('aria-expanded') === 'true';


  $(this).attr('aria-expanded', !isExpanded);
});

$('.go-top').click(function (e) {
  e.preventDefault();

  window.scrollTo({ top: 0, behavior: "smooth" })
})


let lastScroll = 0;
$(window).scroll(function () {

  curr = $(this).scrollTop();
  target = $('.hero').offset().top;

  if (curr > 0) {
    if (curr > lastScroll) {
      $('.go-top').removeClass('on');
    }

    else {
      $('.go-top').addClass('on');
    }
    lastScroll = curr;
  } else {
    $('.go-top').removeClass('on');
  }

})
ScrollTrigger.create({
  trigger: `[data-theme="dark"]`,
  start: "0% 10%",
  end: "100% 10%",
  // markers: true, 
  onEnter: function () {
    $('#header').addClass('dark');
  },
  onLeaveBack: function () {
    $('#header').removeClass('dark');
  }
})


ScrollTrigger.create({
  trigger: `[data-theme="white"]`,
  start: "0% 70%",
  end: "100% 50%",
  // markers: true, 
  toggleClass: {
    targets: "body",
    className: "dark",
  }
})


/**
 * 인트로
 */
const introTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-intro",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 0,
    // markers:true,
    onEnterBack: function () {
      $('.ico-arrow').removeClass('hide');
    },
  },
  onComplete: function () {
    $('.ico-arrow').addClass('hide');
  },
})

introTl.to('.sc-intro .dimmed', { opacity: 1 }, 'a')
introTl.to('.sc-intro .text-area .text:nth-child(1)', { autoAlpha: 1 }, 'a')
introTl.to('.sc-intro .text-area .text:nth-child(1)', {
  autoAlpha: 0,
  onComplete: function () {
    $('#header').addClass('show')
  },
  onReverseComplete: function () {
    $('#header').removeClass('show')
  }
})
introTl.to('.sc-intro .text-area .text:nth-child(2)', { autoAlpha: 1 })
introTl.to('.sc-intro .text-area .text:nth-child(2)', { autoAlpha: 0 })
introTl.to('.sc-intro .text-area .text:nth-child(3)', { autoAlpha: 1 })
introTl.to('.sc-intro .text-area .text:nth-child(3)', { autoAlpha: 0 })
introTl.to('.sc-intro .text-area .text:nth-child(4)', { autoAlpha: 1 })

/**
 * 쇼케이스
 * 
 */

const showcaseTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-showcase",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 0,
    // markers:true,
  },
})
showcaseTl.to('.sc-showcase .dimmed', { opacity: 1 }, 'a')
showcaseTl.to('.sc-showcase .text-area .text-wrap', { autoAlpha: 1 }, 'a')

showcaseTl.to('.sc-showcase .text-area .text:nth-child(1)', { xPercent: 100 }, 'b')
showcaseTl.to('.sc-showcase .text-area .text:nth-child(3)', { xPercent: -100 }, 'b')
showcaseTl.to('.sc-showcase .dimmed', { opacity: 0 }, 'b')

showcaseTl.to('.sc-showcase .text-area .text-wrap', { autoAlpha: 0 })

showcaseTl.to('.sc-showcase .img-area .img:nth-child(3)', { height: 0 })
showcaseTl.to('.sc-showcase .img-area .img:nth-child(2)', { height: 0 })

showcaseTl.to('.sc-showcase .dimmed', { opacity: 1 }, 'c')
showcaseTl.to('.sc-showcase .desc-area', { autoAlpha: 1 }, 'c')



/**
 * 
 * 가치를
증명하고 싶다면
누구든지.
 * 
 */

$('.group-block').each(function (i, el) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "0% 70%",
      end: "100% 90%",
      // markers: true, 
      scrub: 0,
      toggleActions: "play play reverse reverse"
    }
  });
  tl.from($(this).find('.text:nth-child(1)'), { x: 0 }, 'a');
  tl.from($(this).find('.text:nth-child(3)'), { x: 0 }, 'a');
  tl.from($(this).find('.block.right'), { xPercent: 100, }, 'a');
  tl.from($(this).find('.block.left'), { xPercent: -100 }, 'a');
})

/**
 * 
 * 불가능을
DATA ID로
가능하게.
 * 
 */
gsap.to('.sc-data .group-role .slide-inner', {
  scrollTrigger: {
    trigger: ".sc-data .group-role",
    start: "0% 0%",
    end: "100% 100%",
    // markers: true,
    scrub: 0,
  },
  x: -$('.sc-data .group-role .content-early').outerWidth(),
})

/**
 * 
 * banner
 * 
 */
gsap.set('.group-banner .text', { autoAlpha: 0 })
dataBarTl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-data .group-banner",
    start: "0% 100%",
    end: "100% 80%",
    // markers: true, 
    scrub: 0,
  },
})
dataBarTl1.from('.group-banner .content .item:nth-child(1)', { xPercent: -50 }, 'a')
dataBarTl1.from('.group-banner .content .item:nth-child(2)', { xPercent: -50 }, 'a')
dataBarTl1.from('.group-banner .content .item:nth-child(3)', { xPercent: 50 }, 'a')

gsap.to('.sc-data .group-banner .text', {
  autoAlpha: 1,
  scrollTrigger: {
    trigger: ".sc-data .group-banner",
    start: "0% 40%",
    end: "100% 30%",
    scrub: 0,
    onEnter: function () {
      $('.sc-data .group-banner .content').addClass('blur');
    },
    onLeaveBack: function () {
      $('.sc-data .group-banner .content').removeClass('blur');
    }
  }
});
/**
 * 
 * 
 * 안전하고
대체불가능한
DATA ID.
 * 
 * 
 */


const dataDetail = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-data .group-detail",
    start: "0% 0%",
    end: "100% 0%",
    // markers: true, 
    scrub: 0,
  },


})
dataDetail.to('.sc-data .group-detail .content', {
  x: -$('.sc-data .group-detail .tit-area').outerWidth() - 65
})
dataDetail.to('.sc-data .group-detail .list-area .item:nth-child(1)', {
  x: 100
}, 'a')
dataDetail.to('.sc-data .group-detail .list-area .item:nth-child(2)', {
  xPercent: -100,
  x: 100 - (40)
}, 'a')
dataDetail.to('.sc-data .group-detail .list-area .item:nth-child(3)', {
  xPercent: -200,
  x: 100 - (40 * 2)
}, 'a')
dataDetail.to('.sc-data .group-detail .list-area .item:nth-child(4)', {
  xPercent: -300,
  x: 100 - (40 * 3)
}, 'a')
dataDetail.to('.sc-data .group-detail .list-area .item:nth-child(5)', {
  xPercent: -400,
  x: 100 - (40 * 4)
}, 'a')
dataDetail.to('.group-detail .open-img', {
  opacity:0
}, 'b-=0.7')
dataDetail.to('.group-detail .lock-img', {
  autoAlpha: 1 
}, 'b-=0.2')

dataDetail.to('.sc-data .group-detail .gradient-frame .img-wrap', { autoAlpha: 0 })
dataDetail.to('.sc-data .group-detail .gradient-frame .text', { autoAlpha: 1 })
/**
 * 
 * service
 * 
 */


ScrollTrigger.create({
  trigger: ".sc-service",
  start: "0% 0%",
  end: "100% 100%",
  // markers:true,
  onLeaveBack: function () {
    gsap.set('.sc-service', { autoAlpha: 0 })
    gsap.set('.sc-data .group-detail', { autoAlpha: 1 })
  },
  onEnter: function () {
    gsap.set('.sc-service', { autoAlpha: 1 })
    gsap.set('.sc-data .group-detail', { autoAlpha: 0 })
  }
})


/**
 * 
 * 
 * sc-review
 * 
 */

const review = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-review",
    start: "0% 0%",
    end: "100% 100%",
    // markers:true,
    scrub: 0,
    onLeaveBack: function () {
      gsap.set('.sc-service .gradient-frame', { autoAlpha: 1 })
      gsap.set('.sc-review .first', { autoAlpha: 0 })
      $('.sc-review .img-wrap').removeClass('on');
    },
    onEnter: function () {
      gsap.set('.sc-service .gradient-frame', { autoAlpha: 0 })
      gsap.set('.sc-review .first', { autoAlpha: 1 })
      $('.sc-review .img-wrap').addClass('on');
    }
  }
})

// review.set('.sc-review .img-wrap:before', {'position': 'absolute'});

review.to('.sc-review .sticky .list-area .item:nth-child(1)', {
  xPercent: -100,
  x: -40
}, 'a')
review.to('.sc-review .sticky .list-area .item:nth-child(2)', {
  xPercent: -200,
  x: -80
}, 'a')
review.to('.sc-review .sticky .list-area .item:nth-child(3)', {
  xPercent: -300,
  x: -120
}, 'a')

review.to('.sc-review .sticky .headline', { autoAlpha: 1 })

/**
 * 
 * asset
 * 
 * 
 */

gsap.to('.sc-asset .slide-inner', {
  scrollTrigger: {
    trigger: ".sc-asset .group-detail",
    start: "0% 0%",
    end: "100% 100%",
    // markers:true,
    scrub: 0,
    invalidateOnRefresh: true,
    onLeaveBack: function () {
      $('.sc-asset .img-wrap').removeClass('on');
    },
    onEnter: function () {
      $('.sc-asset .img-wrap').addClass('on');
    },
    toggleClass: {
      targets: ".sc-asset .group-detail",
      className: "show"
    },
    onUpdate: function (a) {
      if (a.progress >= 0.5) {
        $('.sc-asset .group-detail .arrow-inner .text-area .text').text('미래금융');
      } else {
        $('.sc-asset .group-detail .arrow-inner .text-area .text').text('전통금융');
      }
    }

  },
  xPercent: -100,
  x: function () {
    return window.innerWidth;
  }
})

/**
 * 
 * use
 * 
 */
const useTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-use .group-intro",
    start: "0% 0%", 
    end: "50% 0%", 
    scrub: 0,
    // markers: true,
    
  }
});

useTl.to('.sc-use .text-area', { autoAlpha: 1 });
useTl.to('.sc-use .text-area', { autoAlpha: 1 }, 'b');
useTl.to('.sc-use .ico-arrow', { autoAlpha: 1 }, 'b');
useTl.to('.sc-use .text-area', { autoAlpha: 0 }, 'a');
useTl.to('.sc-use .ico-arrow', { autoAlpha: 0 }, 'a');


/**
 * 
 * 
 * 
 * 
 */
gsap.to('.sc-use .slide-inner', {
  scrollTrigger: {
    trigger: ".sc-use .group-detail",
    start: "0% 0%",
    end: "100% 100%",
    // markers:true,
    scrub: 0,
    invalidateOnRefresh: true,
    onLeaveBack: function () {
      $('.sc-use .img-wrap').removeClass('on');
    },
    onEnter: function () {
      $('.sc-use .img-wrap').addClass('on');
    }
  },

  xPercent: -100,
  x: function () {
    return window.innerWidth;
  }
})


gsap.to('.rolling-area', {
  y: 0,
  scrollTrigger: {
    trigger: ".sc-company",
    start: "50% 50%",
    end: "100% 50%",
    // markers: true, 
    toggleActions: "play reverse play reverse"
  }
});


gsap.to('.rolling-area .marquee-wrapper',{
  xPercent:-33.33,
  repeat:-1,
  ease:"none",
  duration:20,
})