const mean = document.querySelector('.menu');
var div = document.querySelector("i");
var cssCollection = window.getComputedStyle(div, null);
var result = cssCollection.getPropertyValue("display");
console.log(result);

$(function () {
	$(".menu i").click(function (e) {
		e.preventDefault();
		//h2 在父層元素中，找到 p 元素，並且給它滑動效果
		$('.slide').parent().find("li").slideToggle();
		//h2 在父層 .question 元素中，找到其他 .question 同層元素，再找到該同層元素的 p 標籤，並向上收闔
		$('.slide').parent().siblings().find("li").slideUp();
	});
	if(result == 'block'){
		$(".slide li").click(function(e){
			$('.slide').parent().find("li").slideToggle(800);
			$('.slide').parent().siblings().find("li").slideUp(800);
		})
	}
});