$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "미움받을 용기" },
    headers: { Authorization: "KakaoAK bd0657efca6e474c953ac7a43b6a08df" }
})

var scroll_category = $('#item3').offset().top;
if (ws > scroll_category - 700) {
    $('#item3 h2, #item3 p').css("transform", "translateY(0px)").css("opacity", "1");
}

var scroll_category = $('#item5').offset().top;
if (ws > scroll_category - 700) {
    $('#item5 h2, #item5 p').css("transform", "translateY(0px)").css("opacity", "1");
}