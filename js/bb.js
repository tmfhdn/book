        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "경제", size: 50 },
            headers: { Authorization: "KakaoAK bd0657efca6e474c953ac7a43b6a08df" }
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
            headers: { Authorization: "KakaoAK bd0657efca6e474c953ac7a43b6a08df" }
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
            headers: { Authorization: "KakaoAK bd0657efca6e474c953ac7a43b6a08df" }
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
            headers: { Authorization: "KakaoAK bd0657efca6e474c953ac7a43b6a08df" }
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
                var genres = document.getElementsByClassName("genre1");
                for (var i = 0; i < genres.length; i++) {
                    $("ul > .genre1").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
                    $("ul > .genre1").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
                    $("ul > .genre1").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
                    $("ul > .genre1").eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
                }
            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "영어", size: 50 },
            headers: { Authorization: "KakaoAK bd0657efca6e474c953ac7a43b6a08df" }
        })
            .done(function (msg) {
                var genres = document.getElementsByClassName("genre2");
                for (var i = 0; i < genres.length; i++) {
                    $("ul > .genre2").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
                    $("ul > .genre2").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
                    $("ul > .genre2").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
                    $("ul > .genre2").eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
                }
            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "고전", size: 50 },
            headers: { Authorization: "KakaoAK bd0657efca6e474c953ac7a43b6a08df" }
        })
            .done(function (msg) {
                var genres = document.getElementsByClassName("genre3");
                for (var i = 0; i < genres.length; i++) {
                    $("ul > .genre3").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
                    $("ul > .genre3").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
                    $("ul > .genre3").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
                    $("ul > .genre3").eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
                }
            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "인테리어", size: 50 },
            headers: { Authorization: "KakaoAK bd0657efca6e474c953ac7a43b6a08df" }
        })
            .done(function (msg) {
                var genres = document.getElementsByClassName("genre4");
                for (var i = 0; i < genres.length; i++) {
                    $("ul > .genre4").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
                    $("ul > .genre4").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
                    $("ul > .genre4").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
                    $("ul > .genre4").eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
                }
            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "다이어트", size: 50 },
            headers: { Authorization: "KakaoAK bd0657efca6e474c953ac7a43b6a08df" }
        })
            .done(function (msg) {
                var genres = document.getElementsByClassName("genre5");
                for (var i = 0; i < genres.length; i++) {
                    $("ul > .genre5").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
                    $("ul > .genre5").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
                    $("ul > .genre5").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
                    $("ul > .genre5").eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
                }
            });

        $(function () {
            $(".genre>button:nth-of-type(1)").click(function () {
                $(this).addClass("btn_on");
                $(".genre>button:nth-of-type(2), .genre>button:nth-of-type(3), .genre>button:nth-of-type(4), .genre>button:nth-of-type(5)").removeClass("btn_on");
                $(".genre1").fadeIn(250);
                $(".genre2, .genre3, .genre4, .genre5").fadeOut(250);
            })
            $(".genre>button:nth-of-type(2)").click(function () {
                $(this).addClass("btn_on");
                $(".genre>button:nth-of-type(1), .genre>button:nth-of-type(3), .genre>button:nth-of-type(4), .genre>button:nth-of-type(5)").removeClass("btn_on");
                $(".genre2").fadeIn(250);
                $(".genre1, .genre3, .genre4, .genre5").fadeOut(250);
            })
            $(".genre>button:nth-of-type(3)").click(function () {
                $(this).addClass("btn_on");
                $(".genre>button:nth-of-type(1), .genre>button:nth-of-type(2), .genre>button:nth-of-type(4), .genre>button:nth-of-type(5)").removeClass("btn_on");
                $(".genre3").fadeIn(250);
                $(".genre1, .genre2, .genre4, .genre5").fadeOut(250);
            })
            $(".genre>button:nth-of-type(4)").click(function () {
                $(this).addClass("btn_on");
                $(".genre>button:nth-of-type(1), .genre>button:nth-of-type(2), .genre>button:nth-of-type(3), .genre>button:nth-of-type(5)").removeClass("btn_on");
                $(".genre4").fadeIn(250);
                $(".genre1, .genre2, .genre3, .genre5").fadeOut(250);
            })
            $(".genre>button:nth-of-type(5)").click(function () {
                $(this).addClass("btn_on");
                $(".genre>button:nth-of-type(1), .genre>button:nth-of-type(2), .genre>button:nth-of-type(3), .genre>button:nth-of-type(4)").removeClass("btn_on");
                $(".genre5").fadeIn(250);
                $(".genre1, .genre2, .genre3, .genre4").fadeOut(250);
            })
        });