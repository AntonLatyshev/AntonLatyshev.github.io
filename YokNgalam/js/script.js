/**
 * Created by Iren_M on 17.11.2016.
 */
$(document).ready(function(){
    $('.button-search').click(function(){
        $('.search-field').toggle();
    });
});


/*$(document).ready(function(){
    $('.cmn-toggle-switch').click(function(){
        $('.nav').toggle();
        $('.cmn-toggle-switch__htx').addClass("active");
    });
});*/

$(function(){

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
        $('.nav').show();
        $('.cmn-toggle-switch__htx').addClass("active");
    }
    function func2() {
        $('.nav').hide();
        $('.cmn-toggle-switch__htx').removeClass("active");
    }
});
