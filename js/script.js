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
  });

  // footer 계열사 바로가기
  $(".select_part").hide();
  $(".select_site").click(function(){
    const selActive = $(".select_part").hasClass("active");
    if(selActive === false){
      $(".select_part").addClass("active");
      $(".select_part").show();
    }else{
      $(".select_part").removeClass("active");
      $(".select_part").hide();
    }
  });
});  