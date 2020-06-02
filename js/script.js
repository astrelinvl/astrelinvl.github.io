var flag = false;
$(document).ready(function(){

    $(".search form a").hover(function(){             
        $(".search-button img").addClass("ico-lite");
    },function(){           
        $(".search-button img").removeClass("ico-lite");
    });
    
    $(".basket img").hover(function(){             
        $(this).attr('src', 'img/icons/header/basket-hover.svg');
    },function(){           
        $(this).attr('src', 'img/icons/header/basket.svg');
    });

    $(".box__txt").click(function(){
        location.href = 'file:///Users/argo/Desktop/vova/mclean/view.html';
    });
    
    $(".box-tile").click(function(){
        location.href = 'file:///Users/argo/Desktop/vova/mclean/tovar.html';
    });

    $(".catalog li").click(function(){
        location.href = 'file:///Users/argo/Desktop/vova/mclean/tovar.html';
    });

    // $("#ci-1").click(function(){
    //     location.href = 'file:///Users/argo/Desktop/vova/mclean/tovar.html';
    // });
    // $("#ci-2").click(function(){
    //     location.href = 'file:///Users/argo/Desktop/vova/mclean/tovar.html';
    // });
    // $("#ci-3").click(function(){
    //     location.href = 'file:///Users/argo/Desktop/vova/mclean/tovar.html';
    // });
    // $("#ci-4").click(function(){
    //     location.href = 'file:///Users/argo/Desktop/vova/mclean/tovar.html';
    // });
    // $("#ci-5").click(function(){
    //     location.href = 'file:///Users/argo/Desktop/vova/mclean/tovar.html';
    // });
    // $("#ci-6").click(function(){
    //     location.href = 'file:///Users/argo/Desktop/vova/mclean/tovar.html';
    // });
    // $("#ci-7").click(function(){
    //     location.href = 'file:///Users/argo/Desktop/vova/mclean/tovar.html';
    // });
    // $("#ci-8").click(function(){
    //     location.href = 'file:///Users/argo/Desktop/vova/mclean/tovar.html';
    // });
    // $("#ci-9").click(function(){
    //     location.href = 'file:///Users/argo/Desktop/vova/mclean/tovar.html';
    // });
    // $("#ci-10").click(function(){
    //     location.href = 'file:///Users/argo/Desktop/vova/mclean/tovar.html';
    // });
    
    var width = $(".square").width();
    $(".square").height(width);
    $(".baner-mini-item").width(width);
    $(".baner-mini-item").height(width);
    $(".baner-item").height(width);

    
    $(".catalog-label").click(function(){
        if(document.body.clientWidth<=1050){
            $(".second-menu-block").css("display","none");
            flag_second_menu = false;
            $(".catalog").attr('style', '');
            if(flag){
                flag = false;
                $(".catalog").css("display","block");
            }
            else{
                flag = true;
                $(".catalog").css("display","none");
            }
        };
    });

    $("#onas-mu").click(function(){
        $("#onas-mu").addClass(   "subtitle_active");
        $("#onas-doc").removeClass("subtitle_active");
        $("#onas-con").removeClass("subtitle_active");

        $(".onas-mu").removeClass("hide");
        $(".onas-doc").addClass("hide");
        $(".onas-con").addClass("hide");
    });
    
    $("#onas-doc").click(function(){
        $("#onas-doc").addClass(   "subtitle_active");
        $("#onas-mu").removeClass("subtitle_active");
        $("#onas-con").removeClass("subtitle_active");

        $(".onas-doc").removeClass("hide");
        $(".onas-mu").addClass("hide");
        $(".onas-con").addClass("hide");
    });

    $("#onas-con").click(function(){
        $("#onas-con").addClass(   "subtitle_active");
        $("#onas-mu").removeClass("subtitle_active");
        $("#onas-doc").removeClass("subtitle_active");

        $(".onas-con").removeClass("hide");
        $(".onas-mu").addClass("hide");
        $(".onas-doc").addClass("hide");
    });
});

var flag_second_menu = false;

$(".second-menu").click(function(){
    flag = true;
    $(".catalog").css("display","none");
    if(flag_second_menu){
        $(".second-menu-block").css("display","none");
        flag_second_menu = false;
    }
    else{
        $(".second-menu-block").css("display","block");
        flag_second_menu = true;
    }
    
});

$(window).resize(function(){
    var width = $(".square").width();
    $(".square").height(width);
    $(".baner-mini-item").width(width);
    $(".baner-mini-item").height(width);
    $(".baner-item").height(width);
    
    if(document.body.clientWidth>1050){
        $(".catalog").attr('style', '');
        $(".second-menu-block").css("display","none");
            flag_second_menu = false;
        flag = true;
    }
});


