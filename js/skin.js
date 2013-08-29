$(document).ready(function(){
	$(".thumbnail").hover(
		function(){
			$(".skin", this).fadeToggle();
		},function(){
			$(".skin", this).fadeToggle();
		});
});