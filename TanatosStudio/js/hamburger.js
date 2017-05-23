/**
 * Created by Iren_M on 24.10.2016.
 */

$(document).ready(function(){
    $('.hidden-menu').hide();
    $('.cmn-toggle-switch').click(function(){
        $('.hidden-menu').toggle();
        $('.first').toggle();
    });
});


/*
$(function(){
    $('.hidden-menu').hide();

    var flag = true;
    $('.cmn-toggle-switch').click(function () {
        if (flag) {
            flag = false;
            func1.call(this);
        } else {
            flag = true;
            func2.call(this);
        }
        return false;
    });

    function func1() {
        $('.hidden-menu').slideDown(100);
        $('.first').hide();
    }
    function func2() {
        $('.hidden-menu').slideUp(100);
        $('.first').show();
    }
});
*/


