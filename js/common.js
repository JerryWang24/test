/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-08-19 10:21:17
 * @version $Id$
 */

$(function(){
	// 搜索
	$('#search').click(function(){
		$('#keyword').toggle();
		$('.h_box ul').toggle();
		$('.full').toggle();
	})
	$('.full').click(function(){
		$('#keyword').hide();
		$('.h_box ul').show();
		$('.full').hide();
	})

	// 选择排序
	$('.swiper div').click(function(event) {
		$(this).addClass('selected').siblings().removeClass('selected');
	});

	var mySwiper=new Swiper('.flash_Box.swiper-container',{
		paginationClickable: true,
		loop:true,
		pagination:'.flash_Box .swiper-pagination'
	})

	var mySwiper2=new Swiper('.select_box .swiper-container',{
		
        slidesPerView: 6,
        paginationClickable: true,
        spaceBetween: 0,
        freeMode: true
	})
})