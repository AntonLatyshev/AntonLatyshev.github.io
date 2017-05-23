/**
 * Created by Iren_M on 17.10.2016.
 */

$(document).ready(function(){
    $(window).resize(function() {
        if ($(window).width() <= '360'){

            $(function() {
                $('.hidden').hide();
                $('.box').hide();
                $('.big').hide();

                var flag = true;
                $('.button-click').click(function () {
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
                    $('.button-click').css({'position' : 'fixed',
                        'bottom' : '0', 'right' : '0', 'z-index' : '400', 'opacity' : '0.5'}).text('Close');
                    $('.big').slideDown(100);
                    $('.box').slideDown(100);
                    $('.hidden').slideDown(100);
                }
                function func2() {
                    $('.button-click').css({'position' : 'inherit', 'opacity' : '1'}).text('Show More');
                    $('.big').slideUp(100);
                    $('.box').slideUp(100);
                    $('.hidden').slideUp(100);
                }
            });

        } else if ($(window).width() <= '480'){

            $(function() {
                $('.hidden').hide();
                $('.box').hide();

                var flag = true;
                $('.button-click').click(function () {
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
                    $('.box').slideDown(100);
                    $('.hidden').slideDown(100);
                    $('.button-click').text('Close');
                }
                function func2() {
                    $('.box').slideUp(100);
                    $('.hidden').slideUp(100);
                    $('.button-click').text('Show More');
                }
            });

        } else {

            $(function() {
                $('.hidden').hide();
                $('.box').show();

                var flag = true;
                $('.button-click').click(function () {
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
                    $('.hidden').slideDown(100);
                    $('.button-click').text('Close');
                }
                function func2() {
                    $('.box').show();
                    $('.hidden').slideUp(100);
                    $('.button-click').text('Show More');
                }
            });

        }
    });

    $(window).resize();
});