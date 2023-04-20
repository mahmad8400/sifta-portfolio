$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= $(".work-section-1").offset().top - 150 && scroll < $(".work-section-2").offset().top - 150) {
            $(".sidebar-content-1").addClass("active");
        } else {
            $(".sidebar-content-1").removeClass("active");
        }

        if (scroll >= $(".work-section-2").offset().top - 150 && scroll < $(".work-section-3").offset().top - 150) {
            $(".sidebar-content-2").addClass("active");
        } else {
            $(".sidebar-content-2").removeClass("active");
        }

        if (scroll >= $(".work-section-3").offset().top - 150 && scroll < $(".work-section-4").offset().top - 150) {
            $(".sidebar-content-3").addClass("active");
        } else {
            $(".sidebar-content-3").removeClass("active");
        }

        if (scroll >= $(".work-section-4").offset().top - 150 && scroll < $(".work-section-5").offset().top - 150) {
            $(".sidebar-content-4").addClass("active");
        } else {
            $(".sidebar-content-4").removeClass("active");
        }

        if (scroll >= $(".work-section-5").offset().top - 150) {
            $(".sidebar-content-5").addClass("active");
        } else {
            $(".sidebar-content-5").removeClass("active");
        }
    });
})