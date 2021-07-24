jQuery(document).ready(function($) {

    // Counterup
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    /*-- Menu Toggle Btn --*/
    $(".menu-toggle-btn").click(function() {
        $(".main-menu").toggleClass("open-menu");
    })


    /*-- Search Box --*/
    $(".open-search-box").click(function() {
        $(".search-box").toggleClass("search-box-show");
    })

});