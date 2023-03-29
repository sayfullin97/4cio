if ($(".historySlider").length > 0) {
    $(".historySlider .owl-carousel").owlCarousel({
        dots: true,
        nav: true,
        loop: false,
        // mouseDrag: false,
        // touchDrag: false,
        items: 1,
        animateOut: 'fadeOut',
        navText: ['<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="31.5" transform="rotate(180 32 32)" stroke="black" stroke-opacity="0.12"/><path d="M23.6464 31.6464C23.4512 31.8417 23.4512 32.1583 23.6464 32.3536L26.8284 35.5355C27.0237 35.7308 27.3403 35.7308 27.5355 35.5355C27.7308 35.3403 27.7308 35.0237 27.5355 34.8284L24.7071 32L27.5355 29.1716C27.7308 28.9763 27.7308 28.6597 27.5355 28.4645C27.3403 28.2692 27.0237 28.2692 26.8284 28.4645L23.6464 31.6464ZM40 31.5L24 31.5L24 32.5L40 32.5L40 31.5Z" fill="black" fill-opacity="0.56"/></svg>', '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="31.5" stroke="black" stroke-opacity="0.12"/><path d="M40.3536 32.3536C40.5488 32.1583 40.5488 31.8417 40.3536 31.6464L37.1716 28.4645C36.9763 28.2692 36.6597 28.2692 36.4645 28.4645C36.2692 28.6597 36.2692 28.9763 36.4645 29.1716L39.2929 32L36.4645 34.8284C36.2692 35.0237 36.2692 35.3403 36.4645 35.5355C36.6597 35.7308 36.9763 35.7308 37.1716 35.5355L40.3536 32.3536ZM24 32.5H40V31.5H24V32.5Z" fill="black" fill-opacity="0.56"/></svg>'],
    });
}

if ($(".historySlider").length > 0) {
    var flag = 0;
    var count_dots = $(".historySlider .item").length;
    for (var i = 0; i < count_dots; i++) {
        $(".historydots-wrap").append("<div class='history-dots'></div>");
    }
    $(".historySlider .history-dots").eq(0).addClass('current');
    var w_slide = $(".historySlider .item").width() * 0.3;
    var translate = 0;
    var current_el = $(".historySlider .item").eq(0);
    current_el.addClass("current");
    var year1 = current_el.data("year_a");
    var year2 = current_el.data("year_b");
    var year3 = current_el.data("year_c");
    var year4 = current_el.data("year_d");
    $(".historySlider .year").html('<div class="f_b">' + year1 + '</div><div class="f_b2">' + year2 + '</div><div class="f_b3">' + year3 + '</div><div class="f_b4">' + year4 + '</div>');
    var w_bg = w_slide / 3;
    var translate_bg = 0;
    var i_history,
        persent_line;
    var length_dot = $(".historySlider .history-dots").length - 1;
    var w_dot = $(".historySlider__dots").width();
    function change_history(a, b) {
        i_history = $(".historySlider .item.current").index();
        $(".js-translate").css("transform", "translateX(" + a + "px)");
        $(".historySlider__bg").css("transform", "translateX(" + b + "px)");
        $(".historySlider .item").eq(i_history).removeClass('current');
    }
    $('.historySlider .prev-arrow').click(function() {
        if (!$(".historySlider .item.current").prev().length <= 0 && flag == 0) {
            flag = 1;
            $('.historySlider .arrow-history').addClass("not-click");
            translate += w_slide;
            translate_bg += w_bg;
            change_history(translate, translate_bg);
            var current_elem = $(".historySlider .item").eq(i_history - 1);
            current_elem.addClass('current');
            var count_dot = current_elem.index();
            persent_line = count_dot / length_dot;
            var w_line = w_dot * persent_line;
            $(".historySlider .historydots-line").css("width", w_line + "px");
            $(".historySlider .history-dots").eq(i_history).removeClass('current');
            $(".historySlider .history-dots").eq(i_history - 1).addClass('current');
            var year = $(".historySlider .year").text();
            var split_year = String(year);
            split_year = split_year.split('');
            if (Number(split_year[0]) != current_elem.data("year_a")) {
                $(".historySlider .year div").eq(0).addClass("animated fadeOutDown");
                $(".historySlider .year").append('<div class="animated fadeInDown f_b">' + current_elem.data("year_a") + '</div>');
            }
            if (Number(split_year[1]) != current_elem.data("year_b")) {
                $(".historySlider .year div").eq(1).addClass("animated fadeOutDown ");
                $(".historySlider .year").append('<div class="animated fadeInDown f_b2">' + current_elem.data("year_b") + '</div>');
            }
            if (Number(split_year[2]) != current_elem.data("year_c")) {
                $(".historySlider .year div").eq(2).addClass("animated fadeOutDown ");
                $(".historySlider .year").append('<div class="animated fadeInDown f_b3">' + current_elem.data("year_c") + '</div>');
            }
            if (Number(split_year[3]) != current_elem.data("year_d")) {
                $(".historySlider .year div").eq(3).addClass("animated fadeOutDown ");
                $(".historySlider .year").append('<div class="animated fadeInDown f_b4">' + current_elem.data("year_d") + '</div>');
            }
            $(".historySlider .year div").on('animationend webkitAnimationEnd oAnimationEnd', function() {
                $(".historySlider .year div.fadeOutDown").remove();
                $('.historySlider .arrow-history').removeClass("not-click");
                flag = 0;
            });
        }
    });
    $('.historySlider .next-arrow').click(function(e) {
        if (!$(".historySlider .item.current").next().length <= 0 && flag == 0) {
            flag = 1;
            $('.historySlider .arrow-history').addClass("not-click");
            translate += -(w_slide);
            translate_bg += -(w_bg);
            change_history(translate, translate_bg);
            var current_elem = $(".historySlider .item").eq(i_history + 1);
            current_elem.addClass('current');
            var count_dot = current_elem.index();
            persent_line = count_dot / length_dot;
            var w_line = w_dot * persent_line;
            $(".historySlider .historydots-line").css("width", w_line + "px");
            $(".historySlider .history-dots").eq(i_history + 1).addClass('current');
            var year = $(".historySlider .year").text();
            var split_year = String(year);
            split_year = split_year.split('');
            if (Number(split_year[0]) != current_elem.data("year_a")) {
                $(".historySlider .year div").eq(0).addClass("animated fadeOutDown");
                $(".historySlider .year").append('<div class="animated fadeInDown f_b">' + current_elem.data("year_a") + '</div>');
            }
            if (Number(split_year[1]) != current_elem.data("year_b")) {
                $(".historySlider .year div").eq(1).addClass("animated fadeOutDown ");
                $(".historySlider .year").append('<div class="animated fadeInDown f_b2">' + current_elem.data("year_b") + '</div>');
            }
            if (Number(split_year[2]) != current_elem.data("year_c")) {
                $(".historySlider .year div").eq(2).addClass("animated fadeOutDown ");
                $(".historySlider .year").append('<div class="animated fadeInDown f_b3">' + current_elem.data("year_c") + '</div>');
            }
            if (Number(split_year[3]) != current_elem.data("year_d")) {
                $(".historySlider .year div").eq(3).addClass("animated fadeOutDown ");
                $(".historySlider .year").append('<div class="animated fadeInDown f_b4">' + current_elem.data("year_d") + '</div>');
            }
            $(".historySlider .year div").on('animationend webkitAnimationEnd oAnimationEnd', function() {
                $(".historySlider .year div.fadeOutDown").remove();
                $('.historySlider .arrow-history').removeClass("not-click");
                flag = 0;
            });
        }
    });
    $(window).resize(function() {
        var w_slide2 = $(".historySlider .item").width() * 0.3;
        var translate2 = (translate * w_slide2) / w_slide;
        $(".js-translate").css("transform", "translateX(" + translate2 + "px)");
        translate = translate2;
        w_slide = w_slide2;
        w_bg = w_slide / 3;
        w_dot = $(".historySlider__dots").width();
        var w_line2 = w_dot * persent_line;
        $(".historySlider .historydots-line").css("width", w_line2 + "px");
    });
} 