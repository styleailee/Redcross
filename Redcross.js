AOS.init({ offset: 120, once: true });
// 1슬라이드
var swiper = new Swiper(".sec01", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 혈액숫자
function numberCounter(target_frame, target_number) {
  this.count = 0; this.diff = 0;
  this.target_count = parseInt(target_number);
  this.target_frame = document.getElementById(target_frame);
  this.timer = null;
  this.counter();
};
  numberCounter.prototype.counter = function() {
      var self = this;
      this.diff = this.target_count - this.count;
  
      if(this.diff > 0) {
          self.count += Math.ceil(this.diff / 10);
      }
  
      this.target_frame.innerHTML = this.count.toString().replace(/\B(?=(\d{1})+(?!\d))/g, '.');
  
      if(this.count < this.target_count) {
          this.timer = setTimeout(function() { self.counter(); }, 200);
      } else {
          clearTimeout(this.timer);
      }
  };

new numberCounter("counter4", 98);
new numberCounter("counter3", 97);
new numberCounter("counter2", 95);
new numberCounter("counter1", 85);

// 텝
$(document).ready(function(){
	$(".bloodimg > div").delay(2000).addClass("on");
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

});
// 2슬라이드
var swiper = new Swiper(".banner", {

  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
  delay: 3500,
  disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// top
$(function() {
      $(window).scroll(function() {
         if ($(this).scrollTop() > 500) {
            $('#TOP').fadeIn();
  } else {
  $('#TOP').fadeOut();
  }
  });
  $("#TOP").click(function() {
  $('html, body').animate({
 scrollTop : 0
   }, 400);
     return false;
  });
  });


  
