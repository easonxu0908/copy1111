$(document).ready(function () {
    // 頂層選單欄
    $(".navRight .tools").click(function (e) {
        e.preventDefault();
        $(this).siblings('.tools').children(".arrow_box").hide();
        $(this).children(".arrow_box").toggle();
    });
    // 頂層選單欄

    //手機開合
    let mm = $('i.fas.fa-bars.mobuse');
    mm.click(function () {
        let mmnav1 = $('#header .col-lg-7.col-md-9');
        let mmnav2 = $('#header .col-lg-3.d-none.d-lg-block');
        $('#header').toggleClass('openmenu');
        if ($('#header').hasClass('openmenu')) {
            mm.removeClass('fa-bars').addClass('fa-times');
            mmnav1.addClass('col-12');
            mmnav2.addClass('col-12').removeClass('d-none');
        }
        else {
            mm.removeClass('fa-times').addClass('fa-bars');
            mmnav1.removeClass('col-12');
            mmnav2.removeClass('col-12').addClass('d-none');;
        }
    })

    // 圖片牆tab加底線
    $("aside#tabui .nav-tabs>li a").click(function (e) {
        e.preventDefault();
        $(this).parent().siblings().removeClass("active");;
        $(this).parent().toggleClass("active");
    });

    //螢幕寬度變化事件
    $(window).resize(function () {
        let ww = $(window).width();
        if (ww < 768) {
            $('section.container').addClass('container-fluid').removeClass('container')
        } else {
            $('section.container-fluid').addClass('container').removeClass('container-fluid')
        }
        if (ww < 499) {
            $('#tabui .ordinaries a').text("薪資");
            $('#tabui .ability a').text("福利");
            $('#tabui .characteristics a').text("特質");
        } else {
            $('#tabui .ordinaries a').text("薪資找工作");
            $('#tabui .ability a').text("福利找工作");
            $('#tabui .characteristics a').text("特質找工作");
        }
    });


    //螢幕下滑超過200px顯示floatbox  start
    $(window).scroll(function () {
        let wst = $(window).scrollTop();
        // console.log(wst)
        if (wst > 200) {
            $('#floatbox').show();
        } else {
            $('#floatbox').hide();
        }
    });
    //螢幕下滑超過200px顯示floatbox  end

    // 滑動回頁首 start
    $('#top').click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: 0 }, 500);
    });
    // 滑動回頁首 end

    // owlCarousel
    $('#favorite').owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: { items: 1, margin: 10, },
            400: { items: 1, margin: 10, },
            768: { items: 3, margin: 10, },
            1000: { items: 4, }
        }
    })
})