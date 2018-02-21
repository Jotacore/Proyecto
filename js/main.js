$(document).ready(function(){
    // Menú hamburguesa
    $(".burger").click(function(){
        $(".menu").animate({width:"toggle"},500);
    });
    $(".cerrar").click(function(){
        $(".menu").animate({width:"toggle"},500);
    });
    // Menú hamburguesa 2
    $(".burger2").click(function(){
        $(".burger2").toggleClass("abierto");
        $(".menu2").animate({width:"toggle"},500); 
        $(".menu2 div a").toggleClass("aparicion");
    });
    // Scroll suave
    $("a").on("click",function(){
        if (this.hash !== "") {
            var hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });
    //Ventana modal
    $(".open").click(function(){
        $(".modal, .overlay").addClass("visible");
    });
    $(".close, .overlay").click(function(){
        $(".modal, .overlay").removeClass("visible");
    });
    //Ocultar burger index
    $(".open").click(function(){
        $(".burger").addClass("hidden");
    });
    $(".close").click(function(){
        $(".burger").removeClass("hidden");
    });
});