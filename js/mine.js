
$(document).ready(function () {

    $(".loding").fadeOut(1000, function () {

        $("body").css("overflow", "auto")
    })




    // navbar

    $(window).scroll(function () {

        let scrollValue = $(window).scrollTop();

        if (scrollValue >= 25) {

            $(".navbar").css({

                backgroundColor: "white",
                transition: "all 0.5s",
                boxShadow: "0px 6px 9px 0px rgba(0, 0, 0, 0.06)"

            })
            $(".navbar a").css({
                color: "black",
                transition: "all 0.5s"

            })
            $(".navbar-toggler i").css({
                color: "black",
                transition: "all 0.5s"

            })

            $(".navbar-brand img").attr("src", "images/logo-dark.png");


        }
        else {
            $(".navbar").css({

                backgroundColor: "transparent",
                transition: "all 0.5s",
            })
            $(".navbar a").css({
                color: "white",
                transition: "all 0.5s"

            })
            $(".navbar-toggler i").css({
                color: "white",
                transition: "all 0.5s"

            })
            $(".navbar-brand img").attr("src", "images/logo-light.png");

        }
    })




    // زرار السهم اللي بيودى الهوم 


    $(".btnIcon").click(function () {

        $("body,html").animate({
            scrollTop: "0"

        }, 1000);
    });



    $(window).scroll(function () {

        let scrollValue = $(window).scrollTop();

        let homeHeight = $("#About").offset().top;

        if (scrollValue > homeHeight) {

            $(".btnIcon").fadeIn(1000);
        }
        else {
            $(".btnIcon").fadeOut(1000);
        }

    })


    // links with smotheeeeeeeeeeeee

    $(".nav-link").click(function () {

        let secName = $(this).attr("href");

        let scrollToSec = $(secName).offset().top;

        $("body,html").animate({
            scrollTop: scrollToSec

        }, 1000);

    })




    // option box

    $(".icon-box").click(function () {


        let outerW = $(".colors-box").outerWidth()

        let left = $(".option-box").css("left")

        if (left == "0px") {


            $(".option-box").animate({

                left: -outerW
            }, 1000);
        }
        else {

            $(".option-box").animate({

                left: 0
            }, 1000);
        }



    })

    $(".colors-box ul li").click(function () {

        let liColor = $(this).css("backgroundColor")

        $("i,p,h1,h2,h3,h4,h5,h6,li").css("color", liColor)
    })

})