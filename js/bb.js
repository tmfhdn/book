//section ajax
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "경제", size: 50 },
    headers: { Authorization: "KakaoAK 54daa4ad18674eec2660209261cfd146" }
})
    .done(function (msg) {
        var boxs = document.getElementsByClassName("box1");
        for (var i = 0; i < boxs.length; i++) {
            $("ul > .box1").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
            $("ul > .box1").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            $("ul > .box1").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
            $("ul > .box1").eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "멘탈", size: 50 },
    headers: { Authorization: "KakaoAK 54daa4ad18674eec2660209261cfd146" }
})
    .done(function (msg) {
        var boxs = document.getElementsByClassName("box2");
        for (var i = 0; i < boxs.length; i++) {
            $("ul > .box2").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
            $("ul > .box2").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            $("ul > .box2").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
            $("ul > .box2").eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "인생", size: 50 },
    headers: { Authorization: "KakaoAK 54daa4ad18674eec2660209261cfd146" }
})
    .done(function (msg) {
        var boxs = document.getElementsByClassName("box3");
        for (var i = 0; i < boxs.length; i++) {
            $("ul > .box3").eq(i).prepend("<img src='" + msg.documents[i].thumbnail + "'/>");
            $("ul > .box3").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            $("ul > .box3").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
            $("ul > .box3").eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "친구", size: 50 },
    headers: { Authorization: "KakaoAK 54daa4ad18674eec2660209261cfd146" }
})
    .done(function (msg) {
        var boxs = document.getElementsByClassName("box4");
        for (var i = 0; i < boxs.length; i++) {
            $("ul > .box4").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
            $("ul > .box4").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            $("ul > .box4").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
            $("ul > .box4").eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
        }
    });


$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "주식", size: 50 },
    headers: { Authorization: "KakaoAK bd0657efca6e474c953ac7a43b6a08df" }
})
    .done(function (msg) {
        var genres = document.getElementsByClassName("item5-2");
        for (var i = 0; i < genres.length; i++) {
            $("ul > .item5-2").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
            $("ul > .item5-2").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            $("ul > .item5-2").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
            $("ul > .item5-2").eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "영어", size: 50 },
    headers: { Authorization: "KakaoAK bd0657efca6e474c953ac7a43b6a08df" }
})
    .done(function (msg) {
        var genres = document.getElementsByClassName("item5-3");
        for (var i = 0; i < genres.length; i++) {
            $("ul > .item5-3").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
            $("ul > .item5-3").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            $("ul > .item5-3").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
            $("ul > .item5-3").eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "고전", size: 50 },
    headers: { Authorization: "KakaoAK bd0657efca6e474c953ac7a43b6a08df" }
})
    .done(function (msg) {
        var genres = document.getElementsByClassName("item5-4");
        for (var i = 0; i < genres.length; i++) {
            $("ul > .item5-4").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
            $("ul > .item5-4").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            $("ul > .item5-4").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
            $("ul > .item5-4").eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "인테리어", size: 50 },
    headers: { Authorization: "KakaoAK bd0657efca6e474c953ac7a43b6a08df" }
})
    .done(function (msg) {
        var genres = document.getElementsByClassName("item5-5");
        for (var i = 0; i < genres.length; i++) {
            $("ul > .item5-5").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
            $("ul > .item5-5").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            $("ul > .item5-5").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
            $("ul > .item5-5").eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "다이어트", size: 50 },
    headers: { Authorization: "KakaoAK bd0657efca6e474c953ac7a43b6a08df" }
})
    .done(function (msg) {
        var genres = document.getElementsByClassName("item5-6");
        for (var i = 0; i < genres.length; i++) {
            $("ul > .item5-6").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
            $("ul > .item5-6").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            $("ul > .item5-6").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
            $("ul > .item5-6").eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
        }
    });


$(function () {

    $(".item5-1>button:nth-of-type(1)").click(function () {
        $(this).addClass("btn_on");
        $(".item5-1>button:nth-of-type(2), .item5-1>button:nth-of-type(3), .item5-1>button:nth-of-type(4), .item5-1>button:nth-of-type(5)").removeClass("btn_on");
        $(".item5-2").fadeIn(250).css("zIndex", "1");
        $(".item5-3, .item5-4, .item5-5, .item5-6").fadeOut(250);
    })
    $(".item5-1>button:nth-of-type(2)").click(function () {
        $(this).addClass("btn_on");
        $(".item5-1>button:nth-of-type(1), .item5-1>button:nth-of-type(3), .item5-1>button:nth-of-type(4), .item5-1>button:nth-of-type(5)").removeClass("btn_on");
        $(".item5-3").fadeIn(250).css("zIndex", "1");
        $(".item5-2, .item5-4, .item5-5, .item5-6").fadeOut(250);
    })
    $(".item5-1>button:nth-of-type(3)").click(function () {
        $(this).addClass("btn_on");
        $(".item5-1>button:nth-of-type(1), .item5-1>button:nth-of-type(2), .item5-1>button:nth-of-type(4), .item5-1>button:nth-of-type(5)").removeClass("btn_on");
        $(".item5-4").fadeIn(250).css("zIndex", "1");
        $(".item5-2, .item5-3, .item5-5, .item5-6").fadeOut(250);
    })
    $(".item5-1>button:nth-of-type(4)").click(function () {
        $(this).addClass("btn_on");
        $(".item5-1>button:nth-of-type(1), .item5-1>button:nth-of-type(2), .item5-1>button:nth-of-type(3), .item5-1>button:nth-of-type(5)").removeClass("btn_on");
        $(".item5-5").fadeIn(250).css("zIndex", "1");
        $(".item5-2, .item5-3, .item5-4, .item5-6").fadeOut(250);
    })
    $(".item5-1>button:nth-of-type(5)").click(function () {
        $(this).addClass("btn_on");
        $(".item5-1>button:nth-of-type(1), .item5-1>button:nth-of-type(2), .item5-1>button:nth-of-type(3), .item5-1>button:nth-of-type(4)").removeClass("btn_on");
        $(".item5-6").fadeIn(250).css("zIndex", "1");
        $(".item5-2, .item5-3, .item5-4, .item5-5").fadeOut(250);
    })
// ---------------------------------------------------------------------------------------------------------------
    $('.qna1').click(function () {
        $('.q1').toggleClass('q_on');
        $('.a1').slideToggle(250);
    })
    $('.qna2').click(function () {
        $('.q2').toggleClass('q_on');
        $('.a2').slideToggle(250);
    })
    $('.qna3').click(function () {
        $('.q3').toggleClass('q_on');
        $('.a3').slideToggle(250);
    })
    $('.qna4').click(function () {
        $('.q4').toggleClass('q_on');
        $('.a4').slideToggle(250);
    })

    $('.footer_info button').click(function () {
        $(this).prop('value', 1)
        $('.footer_info ul').toggleClass('info_onoff');
    })
});


    $('.footer_info button').click(function () {
        if ($(this).val() == 1) {
            $(this).html("사업자 정보 닫기");
            $(this).prop("value", 2);
        } else {
            $(this).html("사업자 정보 펼쳐보기");
            $(this).attr("value", 1);
        }
        $('.footer_info ul').toggleClass('info_onoff');
    })




document.querySelector('.item8-1-1').addEventListener('click', function () {
    this.classList.add('tap_on');
    document.querySelector('.item8-1-2').classList.remove('tap_on');
    document.querySelector('.item8-1-3').classList.remove('tap_on');
    document.querySelector('.cw_1').style.display = "block";
    document.querySelector('.cw_2').style.display = "none";
    document.querySelector('.cw_3').style.display = "none";
});
document.querySelector('.item8-1-2').addEventListener('click', function () {
    this.classList.add('tap_on');
    document.querySelector('.item8-1-1').classList.remove('tap_on');
    document.querySelector('.item8-1-3').classList.remove('tap_on');
    document.querySelector('.cw_2').style.display = "block";
    document.querySelector('.cw_1').style.display = "none";
    document.querySelector('.cw_3').style.display = "none";
});
document.querySelector('.item8-1-3').addEventListener('click', function () {
    this.classList.add('tap_on');
    document.querySelector('.item8-1-1').classList.remove('tap_on');
    document.querySelector('.item8-1-2').classList.remove('tap_on');
    document.querySelector('.cw_3').style.display = "block";
    document.querySelector('.cw_1').style.display = "none";
    document.querySelector('.cw_2').style.display = "none";
});


document.querySelector('.cw_1 .screen_btn1').addEventListener('click', function () {
    this.classList.add('btn_on');
    document.querySelector('.cw_1 .screen_btn2').classList.remove('btn_on');
    document.querySelector('.cw_1 .screen_btn3').classList.remove('btn_on');
    document.querySelector('.cw_1 .screen_btn4').classList.remove('btn_on');
    document.querySelector('.cw_1 .item8-5-1').style.transform = 'translate(-0px)';
    document.querySelector('.cw_1 .ment').innerHTML = "<b>하루의 시작과 마무리를 오디오북과 함께</b> <br> 지하철에서도, 잠들기 전에도 독서하세요";
});

document.querySelector('.cw_1 .screen_btn2').addEventListener('click', function () {
    this.classList.add('btn_on');
    document.querySelector('.cw_1 .screen_btn1').classList.remove('btn_on');
    document.querySelector('.cw_1 .screen_btn3').classList.remove('btn_on');
    document.querySelector('.cw_1 .screen_btn4').classList.remove('btn_on');
    document.querySelector('.cw_1 .item8-5-1').style.transform = 'translate(-330px)';
    document.querySelector('.cw_1 .ment').innerHTML = "<b>귀로 듣다가 눈으로도 같이 보면</b> <br> 더 내용이 잘 이해돼요";
});

document.querySelector('.cw_1 .screen_btn3').addEventListener('click', function () {
    this.classList.add('btn_on');
    document.querySelector('.cw_1 .screen_btn1').classList.remove('btn_on');
    document.querySelector('.cw_1 .screen_btn2').classList.remove('btn_on');
    document.querySelector('.cw_1 .screen_btn4').classList.remove('btn_on');
    document.querySelector('.cw_1 .item8-5-1').style.transform = 'translate(-660px)';
    document.querySelector('.cw_1 .ment').innerHTML = "<b>30분만에 책 요약</b> <br> 핵심만 쏙 골라 읽어주는 오디오북";
});

document.querySelector('.cw_1 .screen_btn4').addEventListener('click', function () {
    this.classList.add('btn_on');
    document.querySelector('.cw_1 .screen_btn1').classList.remove('btn_on');
    document.querySelector('.cw_1 .screen_btn2').classList.remove('btn_on');
    document.querySelector('.cw_1 .screen_btn3').classList.remove('btn_on');
    document.querySelector('.cw_1 .item8-5-1').style.transform = 'translate(-990px)';
    document.querySelector('.cw_1 .ment').innerHTML = "<b>이제훈부터 옥주현까지</b> <br> 셀럽이 읽어주는 오디오북";
});


document.querySelector('.cw_2 .screen_btn1').addEventListener('click', function () {
    this.classList.add('btn_on');
    document.querySelector('.cw_2 .screen_btn2').classList.remove('btn_on');
    document.querySelector('.cw_2 .screen_btn3').classList.remove('btn_on');
    document.querySelector('.cw_2 .screen_btn4').classList.remove('btn_on');
    document.querySelector('.cw_2 .item8-5-1').style.transform = 'translate(-0px)';
    document.querySelector('.cw_2 .ment').innerHTML = "<b>시선 추적 기능</b> <br> 눈동자로 페이지를 넘길 수 있어요";
});

document.querySelector('.cw_2 .screen_btn2').addEventListener('click', function () {
    this.classList.add('btn_on');
    document.querySelector('.cw_2 .screen_btn1').classList.remove('btn_on');
    document.querySelector('.cw_2 .screen_btn3').classList.remove('btn_on');
    document.querySelector('.cw_2 .screen_btn4').classList.remove('btn_on');
    document.querySelector('.cw_2 .item8-5-1').style.transform = 'translate(-330px)';
    document.querySelector('.cw_2 .ment').innerHTML = "<b>어느 기기에서도 OK</b> <br> 스마트폰, 태블릿, PC, E ink 기기까지";
});

document.querySelector('.cw_2 .screen_btn3').addEventListener('click', function () {
    this.classList.add('btn_on');
    document.querySelector('.cw_2 .screen_btn1').classList.remove('btn_on');
    document.querySelector('.cw_2 .screen_btn2').classList.remove('btn_on');
    document.querySelector('.cw_2 .screen_btn4').classList.remove('btn_on');
    document.querySelector('.cw_2 .item8-5-1').style.transform = 'translate(-660px)';
    document.querySelector('.cw_2 .ment').innerHTML = "<b>다크 모드</b> <br> 전자책이 눈 아프다는 편견은 버려요";
});

document.querySelector('.cw_2 .screen_btn4').addEventListener('click', function () {
    this.classList.add('btn_on');
    document.querySelector('.cw_2 .screen_btn1').classList.remove('btn_on');
    document.querySelector('.cw_2 .screen_btn2').classList.remove('btn_on');
    document.querySelector('.cw_2 .screen_btn3').classList.remove('btn_on');
    document.querySelector('.cw_2 .item8-5-1').style.transform = 'translate(-990px)';
    document.querySelector('.cw_2 .ment').innerHTML = "<b>자유로운 보기 설정</b> <br> 줄간격부터 폰트까지 내 마음대로 설정하면 <br> 더욱 편한 독서를 할 수 있어요";
});


document.querySelector('.cw_3 .screen_btn1').addEventListener('click', function () {
    this.classList.add('btn_on');
    document.querySelector('.cw_3 .screen_btn2').classList.remove('btn_on');
    document.querySelector('.cw_3 .screen_btn3').classList.remove('btn_on');
    document.querySelector('.cw_3 .item8-5-1').style.transform = 'translate(-0px)';
    document.querySelector('.cw_3 .ment').innerHTML = "<b>당신을 위한 추천</b> <br> 키워드로 한 눈에 정리한 추천 도서";
});

document.querySelector('.cw_3 .screen_btn2').addEventListener('click', function () {
    this.classList.add('btn_on');
    document.querySelector('.cw_3 .screen_btn1').classList.remove('btn_on');
    document.querySelector('.cw_3 .screen_btn3').classList.remove('btn_on');
    document.querySelector('.cw_3 .item8-5-1').style.transform = 'translate(-330px)';
    document.querySelector('.cw_3 .ment').innerHTML = "<b>이럴 땐 이런 책</b> <br> 내 상황에 딱 맞는 회원들의 추천 책";
});

document.querySelector('.cw_3 .screen_btn3').addEventListener('click', function () {
    this.classList.add('btn_on');
    document.querySelector('.cw_3 .screen_btn1').classList.remove('btn_on');
    document.querySelector('.cw_3 .screen_btn2').classList.remove('btn_on');
    document.querySelector('.cw_3 .item8-5-1').style.transform = 'translate(-660px)';
    document.querySelector('.cw_3 .ment').innerHTML = "<b>책-잇</b> <br> 책을 통해 트렌드와 문해력을 한번에!";
})