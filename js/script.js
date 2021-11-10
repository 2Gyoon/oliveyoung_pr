$(document).ready(function(){
  // 카테고리 클릭
  $(".menu_board").hide();
  $("#category > span").click(function(){
    const catgActive = $("#category > span").hasClass("active");
    if(catgActive == false){
      $(this).addClass("active");
      $(".menu_board").show();
    }else{
      $(this).removeClass("active");
      $(".menu_board").hide();
    }
  });
  // 카테고리 닫기
  $(".close").click(function(){
    const catgActive = $("#category > span").hasClass("active");
    if(catgActive == true){
      $(".menu_board").hide();
      $("#category > span").removeClass("active");
    }
  })
});  