$(document).ready(function () {
    $("#dp-next").click(function () {
        var total = $(".dp_item").length;
        $("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
        $.each($(".dp_item"), function (index, dp_item) {
            $(dp_item).attr("data-position", index + 1);
            if($(dp_item).attr("data-position")==1){
                let classOf = $(dp_item).attr("data-class");
                    $('.' + classOf).show(1000);
                }
                else {
                    let classOf = $(dp_item).attr("data-class");
                    $('.' + classOf).hide();
                }
        });
    }); 

    $("#dp-prev").click(function () {
        var total = $(".dp_item").length;
        $("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
        $.each($(".dp_item"), function (index, dp_item) {
            $(dp_item).attr("data-position", index + 1);
            if($(dp_item).attr("data-position")==1){
            let classOf = $(dp_item).attr("data-class");
                $('.' + classOf).show(1000);
            }
            else {
                let classOf = $(dp_item).attr("data-class");
                $('.' + classOf).hide();
            }
        });
    });


    $("#dp-next1").click(function () {
        var total = $(".dp_item1").length;
        $("#dp-slider1 .dp_item1:first-child").hide().appendTo("#dp-slider1").fadeIn();
        $.each($(".dp_item1"), function (index, dp_item) {
            $(dp_item).attr("data-position", index + 1);
            if($(dp_item).attr("data-position")==1){
                let classOf = $(dp_item).attr("data-class");
                    $('.' + classOf).show(1000);
                }
                else {
                    let classOf = $(dp_item).attr("data-class");
                    $('.' + classOf).hide();
                }
        });
    }); 

    $("#dp-prev1").click(function () {
        var total = $(".dp_item1").length;
        $("#dp-slider1 .dp_item1:last-child").hide().prependTo("#dp-slider1").fadeIn();
        $.each($(".dp_item1"), function (index, dp_item) {
            $(dp_item).attr("data-position", index + 1);
            if($(dp_item).attr("data-position")==1){
            let classOf = $(dp_item).attr("data-class");
                $('.' + classOf).show(1000);
            }
            else {
                let classOf = $(dp_item).attr("data-class");
                $('.' + classOf).hide();
            }
        });
    });

    $("#dp-next2").click(function () {
        var total = $(".dp_item2").length;
        $("#dp-slider2 .dp_item2:first-child").hide().appendTo("#dp-slider2").fadeIn();
        $.each($(".dp_item2"), function (index, dp_item) {
            $(dp_item).attr("data-position", index + 1);
            if($(dp_item).attr("data-position")==1){
                let classOf = $(dp_item).attr("data-class");
                    $('.' + classOf).show(1000);
                }
                else {
                    let classOf = $(dp_item).attr("data-class");
                    $('.' + classOf).hide();
                }
        });
    }); 

    $("#dp-prev2").click(function () {
        var total = $(".dp_item2").length;
        $("#dp-slider2 .dp_item2:last-child").hide().prependTo("#dp-slider2").fadeIn();
        $.each($(".dp_item2"), function (index, dp_item) {
            $(dp_item).attr("data-position", index + 1);
            if($(dp_item).attr("data-position")==1){
            let classOf = $(dp_item).attr("data-class");
                $('.' + classOf).show(1000);
            }
            else {
                let classOf = $(dp_item).attr("data-class");
                $('.' + classOf).hide();
            }
        });
    });

});
