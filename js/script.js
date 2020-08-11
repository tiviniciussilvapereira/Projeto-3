//Função que abre o menu no viewport mobile
$(function(){
    $('.mobile-menu').click(function(){
        $('.mobile-menu').find('ul').slideToggle();
    })
});

//Fução scroll dinamico ao clicar no menu
$(function(){
    $('nav a').click(function(){
        var href = $(this).attr('href');
        var offsetTop = $(href).offset().top;

        $('html, body').animate({'scrollTop':offsetTop});

        return console.log('ola');
    })
});

//Slider 
$(function(){
    var delay = 2000; 
    var indiceAtual = 0;
    var quantidadeTotal = $('.sobre-autor').length;;

    initSlider(); 
    autoPlay();

        function initSlider(){
            var sizeContainer = 100 * quantidadeTotal; 
            var sizeBoxSingle = 100 / quantidadeTotal; 
            $('.sobre-autor').css('width',sizeBoxSingle+'%'); 
            $('.scroll-wrapper').css('width',sizeContainer+'%');

            for(var i = 0; i < quantidadeTotal; i++){
                if(i == 0)
                    $('.slider-bullets').append('<span style="background-color: rgba(73, 73, 73, 0.8);"></span>');
                else
                    $('.slider-bullets').append('<span></span>')
            }
        }    

        function autoPlay(){
            setInterval(function(){
                indiceAtual++; 
                if(indiceAtual == quantidadeTotal)
                indiceAtual = 0;
                goToSlider(indiceAtual);  
            },delay)
        }

        function goToSlider(indiceAtual){
            var offSetX = $('.sobre-autor').eq(indiceAtual).offset().left - $('.scroll-wrapper').offset().left;
            $('.slider-bullets span').css('background-color','rgb(200, 200, 200)'); 
            $('.slider-bullets span').eq(indiceAtual).css('background-color','rgb(110, 110, 110)');
            $('.scroll').stop().animate({'scrollLeft':offSetX+'px'});
        }
        $(window).resize(function(){
            $('.scroll').stop().animate({'scrollLeft':0});
        });
});