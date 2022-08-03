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


        $j(function () {
            var $book = $j('.item3-ul3 default');
            var hoverStart = null;
            var hoverEnd = null;

            $book.click(function () {
                if (hoverStart != null) {
                    clearTimeout(hoverStart);
                    hoverStart = null;
                }
                if (hoverEnd != null) {
                    clearTimeout(hoverEnd);
                    hoverEnd = null;
                }
                $book.removeClass('hover').addClass('bk-bookdefault');

                if ($book.data('flip')) {
                    $book.data({ opened: false, flip: false }).removeClass('bk-viewback').addClass('default');
                    $j(".leftarrow2").show();
                    $j(".rightarrow2").show();
                }
                else {
                    $book.data({ opened: false, flip: true }).removeClass('default').addClass('bk-viewback');
                    $j(".leftarrow2").hide();
                    $j(".rightarrow2").hide();
                }
            });

            hoverStart = setTimeout(function () {
                $book.addClass('hover');
            }, 1000);

            hoverEnd = setTimeout(function () {
                $book.removeClass('hover').addClass('bk-bookdefault');
            }, 9000);
        });


    

        setTimeout(function () {
            fn_previewLocate();
        }, 1000);
                //fn_previewLocate();


        function fn_previewLocate() {
            $j(".prev_box").css("position", "absolute");
            $j(".prev_box").css("top", $j("#CoverMainImage").height() + 20);
            $j(".prev_box").show();


        }

        $j(window).resize(function () {
            fn_previewLocate();
        });


        var w = $j('#img_bookspain').width();
        $j('#img_bookspain').css("left", -(w));




        var coverswiper = fn_coverswiper("cover");
        var isEndCoverSwiper = false;

        function fn_coverswiper(location) {
            var coverSwiper = new Swiper('#item3-2-a-cover-' + location, {
                autoHeight: true,
                on: {
                    init: function () {
                    },
                    transitionStart: function () {

                        if (coverswiper.realIndex >= 1) {
                            $j("#divFilpImg").css("z-index", "1");
                            $j("#divFilpImg").css("opacity", "0");
                            $j("#item3-2-a-cover").css("z-index", "2");
                            $j("#item3-2-a-cover").css("opacity", "1");
                            $j(".prev_box").hide();
                        }

                        isEndCoverSwiper = coverswiper.isEnd;
                    },
                    transitionEnd: function () {

                        if (coverswiper.realIndex < 1) {
                            $j("#divFilpImg").css("z-index", "2");
                            $j("#divFilpImg").css("opacity", "1");
                            $j("#item3-2-a-cover").css("z-index", "1");
                            $j("#item3-2-a-cover").css("opacity", "0");
                            $j(".prev_box").show();
                        }

                    }
                },
                simulateTouch: false,

            });

            return coverSwiper;
        }

        function swiperPrev() {
            coverswiper.slidePrev();
        }

        function swiperNext() {
            if (isEndCoverSwiper) {
                $j("#lastpic").show();
                setTimeout(function () {
                    $j("#lastpic").hide();
                }, 3000);
            }
            coverswiper.slideNext();
        }


        var clockhands = new TimelineMax({ repeat: -1, });
            clockhands.to(".item3-4-3", 1, { opacity: 1, rotation: 55, transformOrigin: "right" })
            .fromTo(".item3-4-3", 2.5, { opacity: 1, rotation: 55, transformOrigin: "right" }, { rotation: 320, transformOrigin: "right", ease: Power2.easeOut })
            .to(".item3-4-3", 0.4, { opacity: 0, delay: 2 })
        var clockline = new TimelineMax({ repeat: -1, });
            clockline.to(".item3-4-4", 1, { strokeDashoffset: "150" })
            .to(".item3-4-4", 2.5, { strokeDashoffset: "-=150", strokeWidth: 10, strokeMiterlimit: 10, stroke: "#ffaf25" })
            .to(".item3-4-4", 0.4, { opacity: 0, delay: 2 })
    


        $(function () {
            $.get("./sub_txt/1.txt", function (data) {
                $("#item4-3").html(data);
            })

        });

