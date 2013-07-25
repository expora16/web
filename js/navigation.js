/// <reference path="jquery/jquery-1.10.2-vsdoc.js" />
$(document).ready(function () {
    var top = $('#header_bot').position().top;
    console.log(top);
    var fMenu = $('#nav_container');
    $(window).scroll(function () {

        var y = $(this).scrollTop();
        if (y >= top) {
            if (!fMenu.hasClass('menu_opened')) {
                fMenu.addClass('menu_opened');
            }
        } else {
            if (fMenu.hasClass('menu_opened')) {
                fMenu.removeClass('menu_opened');
            }
        }
    });
});