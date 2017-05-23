/**
 * Created by Iren_M on 24.10.2016.
 */
$(document).ready(function(){
    $('.hidden-letter').hide();
    $('.lett').click(function(){
        $('.hidden-letter').show();
    });
    $('.letter-back').click(function(){
        $('.hidden-letter').hide();
    });
});