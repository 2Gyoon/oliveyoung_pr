$(document).ready(function(){
  
  // totop
  $(window).scroll(function(){
    let scrollEvt = $(window).scrollTop();

    if(scrollEvt > 500){
      $("#totop").fadeIn(500);
    }else{
      $("#totop").fadeOut(500);
    }
  });

  $("#totop").click(function(){
    $(window).scrollTop(0);
  });





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

  // 상품 정렬

  // ["이미지명", "상품사", "상품명", "정가", "할인가", "베스트", "세일", "쿠폰", "증정", "오늘드림"]
  let pd_arr = [
    ["A00000013469105ko", "바이오더마", "★올리브영단독★바이오더마 시카비오 포마드 100ml  #데일리시카크림 #단독출시", "", "32000", "best_pd", "", "", "gift", "today"],
    ["A00000013031912ko", "바이오더마", "★릴카PICK!★바이오더마 센시비오 H2O 850ml #올리브영1위 #스킨케어클렌저", "33000", "20790", "best_pd", "sale", "coupon", "gift", "today"],
    ["A00000014797905ko", "바이오힐보", "바이오힐보 판테놀시카 배리어 크림미스트 120mL", "17000", "11900", "best_pd", "sale", "", "", "today"],
    ["A00000015848610ko", "바이오힐보", "💜가비&시미즈 추천💜 바이오힐보 프로바이오덤 리프팅 크림 더블X마사지볼 기획(크림50*2+마사지볼)", "62400", "37400", "best_pd", "sale", "", "", "today"],
    ["A00000015870403ko", "에스트라", "★한정기획★에스트라 아토베리어365 크림 170ml 대용량 기획", "48000", "33600", "best_pd", "sale", "", "", "today"],
    ["A00000011883102ko", "바이오더마", "바이오더마 아토덤 핸드&네일크림 듀오 기획", "12000", "10800", "best_pd", "sale", "coupon", "", "today"],
    ["A00000014395905ko", "바이오더마", "[올리브영단독]바이오더마 아토덤 인텐시브 밤 200ml  #보습진정끝판왕", "29000", "23200", "", "sale", "coupon", "", "today"],
    ["A00000015852301ko", "바이오더마", "바이오더마 아토덤 인텐시브 밤 200ml+75ml 기획", "29000", "22040", "best_pd", "sale", "coupon", "gift", "today"],

    ["A00000015852706ko", "바이오더마", "★한정기획★바이오더마 시카비오 데이 리페어 크림 30ml 기획", "29000", "20880", "best_pd", "sale", "coupon", "gift", "today"],
    ["A00000015764801ko", "바이오더마", "★NEW★바이오더마 시카비오 데이 리페어 크림 30ml", "29000", "20880", "", "sale", "coupon", "gift", "today"],
    ["A00000011212803ko", "바이오더마", "바이오더마 센시비오 H2O 500ml (펌프형)", "", "24000", "", "", "", "gift", "today"],
    ["A00000001319433ko", "바이오더마", "바이오더마 센시비오 500+500ml 듀오팩", "", "37500", "best_pd", "", "", "gift", "today"],
  ];

  let pd_box = `
  <div class="pd_box">
    <div class="pd_photo">
      <img src="./image/A00000015848705ko.jpg" alt="상품이미지">
      <div class="best_sign">BEST</div>
      <div class="zzim"></div>
    </div>
    <div class="pd_info">
      <h4 class="pd_title">title</h4>
      <p class="pd_text">text</p>
      <p class="pd_price">
        <span class="price_or">
          <span class="price_num">38,000</span>원
        </span>
        <span class="price_now">
          <span class="price_num">27,000</span>원
        </span>
      </p>
      <div class="signs">
        <div class="sign">세일</div>
        <div class="sign">쿠폰</div>
        <div class="sign">증정</div>
        <div class="sign">오늘드림</div>
      </div>
    </div>
  </div>
  `;


  for(let i = 0; i < pd_arr.length; i++){
    $(".pd_frame").append(pd_box);
  }
  
  

  $(".pd_box").each(function(i){
    if(pd_arr[i][5] == ""){
      $(this).attr("class", `pd_box`);
    }else{
      $(this).attr("class", `pd_box ${pd_arr[i][5]}`);
    }

    $(this).find(".pd_photo img").attr("src", `./image/${pd_arr[i][0]}.jpg`);
    $(this).find(".pd_title").text(pd_arr[i][1]);
    $(this).find(".pd_text").text(pd_arr[i][2]);

    if(pd_arr[i][3] == ""){
      $(this).find(".price_or").hide();
    }else{
      pd_arr[i][3] = pd_arr[i][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      $(this).find(".price_or .price_num").text(pd_arr[i][3]);
    }

    pd_arr[i][4] = pd_arr[i][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    $(this).find(".price_now .price_num").text(pd_arr[i][4]);

    if(pd_arr[i][6] == ""){
      $(this).find(".sign:eq(0)").hide();
    }else{
      $(this).find(".sign:eq(0)").attr("class", `sign ${pd_arr[i][6]}`);
    }

    if(pd_arr[i][7] == ""){
      $(this).find(".sign:eq(1)").hide();
    }else{
      $(this).find(".sign:eq(1)").attr("class", `sign ${pd_arr[i][7]}`);
    }

    if(pd_arr[i][8] == ""){
      $(this).find(".sign:eq(2)").hide();
    }else{
      $(this).find(".sign:eq(2)").attr("class", `sign ${pd_arr[i][8]}`);
    }

    if(pd_arr[i][9] == ""){
      $(this).find(".sign:eq(3)").hide();
    }else{
      $(this).find(".sign:eq(3)").attr("class", `sign ${pd_arr[i][9]}`);
    }
  });

  // 전체보기
  $(".total").click(function(){
    $(".pd_box").show();
    $(".cate_title").text("전체 상품");
  });
  // best 상품보기
  $(".best").click(function(){
    $(".pd_box").hide();
    $(".pd_box.best_pd").show();
    $(".cate_title").text("추천 BEST");
  });
  // 찜한상품
  $(".zzim").click(function(){
    let zzim = $(".zzim").hasClass("on");
    if(zzim == false){
      $(this).addClass("on");
    }else{
      $(this).removeClass("on");
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