$(function(){
    abrirJanelaModal();
    fecharJanelaModal();
    function abrirJanelaModal(){
        $('.btn-modal').click(function(func){
            func.stopPropagation();
            $('.janela-modal').fadeIn(); 
        });
    }

    function fecharJanelaModal(){
        var botao = $('body, .btn-fechar-modal'); 

        botao.click(function(){
            $('.janela-modal').fadeOut();
        });
        $('.form-modal').click(function(func){
            func.stopPropagation();
        })
    }
});