$(function(){
	$(".list-nav").click(function(){
        $("li").removeClass("active");
        $(this).addClass("active");
  });
  // fading   للاخفاء والظهور  
  $(".show").click(function(){
    $(".list-nav").slideToggle();
  });
       
});