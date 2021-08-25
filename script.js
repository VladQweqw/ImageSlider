let idx = 0;

$(() => {

    let imgs = [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
    ]
    len = imgs.length;
    let img = $("img");
    let indicator =$(".indicator");
    indicator.eq(0).css({"background-color":"white"})
    $(".prev").click(prev=() => {

        if(idx == 0){idx = len}
        idx--;
        
        indicator.eq(idx).css({"background-color":"white"}).
        siblings().css({"background-color":"transparent"})
        
        img.addClass("animBtn");
        setTimeout(() =>{img.removeClass("animBtn")},100)

        img.attr("src",imgs[idx])



    })
    $(".next").click(next=() => {
        if(idx == len-1){idx = -1}
        idx++;      

        indicator.eq(idx).css({"background-color":"white"}).
        siblings().css({"background-color":"transparent"})

        img.addClass("animBtn");
        setTimeout(() =>{img.removeClass("animBtn")},1000)

        img.attr("src",imgs[idx])
    })
    

})