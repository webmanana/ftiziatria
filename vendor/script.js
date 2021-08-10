$('img[src$=".svg"]').each(function() {
	var $img = jQuery(this);
	var imgURL = $img.attr('src');
	var attributes = $img.prop("attributes");

	$.get(imgURL, function(data) {
		var $svg = jQuery(data).find('svg');

		$svg = $svg.removeAttr('xmlns:a');

		$.each(attributes, function() {
			$svg.attr(this.name, this.value);
		});

		$img.replaceWith($svg);
	}, 'xml');
});
if (document.querySelector('.main_banner__slider')) {
    const swiper = new Swiper('.main-slider', {
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: "fraction",
      formatFractionCurrent: addZero,
      formatFractionTotal: addZero
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  function addZero(num){
    return (num > 9) ? num : '0' + num;
  }
}
if (document.querySelector('.section_banners')) {
  $(window).on('load resize', function() {
    if ($(window).width() > 1200) {
      const swiper = new Swiper('.banner-slider', {
        slidesPerView: 6,
        spaceBetween: 20,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
      });
    }
    if ($(window).width() < 1200) {
      const swiper = new Swiper('.banner-slider', {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,
        loopFillGroupWithBlank: true,
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        },
      });
    }
    if ($(window).width() < 830) {
      const swiper = new Swiper('.section_expert__slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  });
}
if (document.querySelector('.reg')) {
	$( "#file-input1" ).change(function() {
		var fileInfo = $(this).val();
		$("#file-input-text1").val(fileInfo);
	});
	$( "#file-input2" ).change(function() {
		var fileInfo1 = $(this).val();
		$("#file-input-text2").val(fileInfo1);
	});
}
