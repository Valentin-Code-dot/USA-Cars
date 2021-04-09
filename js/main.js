$(function(){

    $('.carousel__inner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        responsive:[
        {
            breakpoint: 841,
            setings:{
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 601,
            setings:{
                slidesToShow: 1,
            }
        },
        ]
    });

});