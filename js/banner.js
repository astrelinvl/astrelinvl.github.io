$(function() {
    var banner_img = $(".banner_img");
    var min_banner_img = $(".banner-min_img");
    var banner = $(".banner");
    var min_banner = $(".banner-min");
    var img_list = $(".banner_img img");
    var min_img_list = $(".banner-min_img img");

    $(".banner_img img").height(banner_img.height());
    $(".banner-min_img img").height(min_banner_img.height());
    $(".banner_img img").width(banner_img.width());
    $(".banner-min_img img").width(min_banner_img.width());

    var count_elements = img_list.length,
        current_element = 0,
        width = banner.width(),
        height = banner.height(),
        duration = 500,
        pause = 2500,
        time,
        auto = true;

    var min_count_elements = min_img_list.length,
        min_current_element = 0,
        min_width = min_banner.width(),
        min_height = min_banner.height(),
        min_duration = 500,
        min_pause = 2500,
        min_time,
        min_auto = true;

    banner_img.width(width * count_elements);
    min_banner_img.width(min_width * min_count_elements);

    function move_screen(x) {
        current_element = (current_element + x + count_elements) % count_elements;
        time = auto ? pause : 0;
        banner_img.delay(time).animate({
        marginLeft: -width * current_element
        }, duration, function() {
        if (auto) move_screen(1);
        });
    }
    function min_move_screen(x) {
        min_current_element = (min_current_element + x + min_count_elements) % min_count_elements;
        min_time = min_auto ? min_pause : 0;
        min_banner_img.delay(min_time).animate({
        marginLeft: -min_width * min_current_element
        }, min_duration, function() {
        if (min_auto) min_move_screen(1);
        });
    }
    move_screen(1);
    min_move_screen(1);

    var fixprew = true;
    var fixnext = true;
    $(".prev").click(function() {
        auto = false;
        min_auto = false;
        banner_img.clearQueue();
        banner_img.stop(); 
        min_banner_img.clearQueue();
        min_banner_img.stop(); 
        if(fixprew&&fixnext){
            move_screen(-2);
            min_move_screen(-2);
            fixprew = false;
            
        }
        else{move_screen(-1);min_move_screen(-1);}
    })
    $(".next").click(function() {
        auto = false;
        min_auto = false;
        banner_img.clearQueue();
        banner_img.stop();
        min_banner_img.clearQueue();
        min_banner_img.stop();
        if(fixprew&&fixnext){move_screen(0);min_move_screen(0);fixnext = false;}
        else{move_screen(1);min_move_screen(1)}
    })

    $(".banner").mouseleave(function(){
        auto = true;
        min_auto = true;
        move_screen(1);
        min_move_screen(1);
    });
});