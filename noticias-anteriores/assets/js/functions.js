$(function() {
    var header = $("#mainnavigation-wrapper");
    var bodie = $("body");
    if ($(window).width() > 767) {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 149) {
                bodie.addClass("fixedmenu");
            } else {
                bodie.removeClass("fixedmenu");
            }
        });
    }
});

        /* Start of insert news to event */
        $(document).ready(function(jq) {
          $("#relatedItemBox a").each(function(){

              var url = jq(this).attr('href');

              var seletor = "#parent-fieldname-text"; 
              $(".hiddenStructure").load(url + " " + seletor) 
              
           });
        }) 
        /* End of insert news to event */

        /* Start of insert AddThis to news */
        $(document).ready(function(jq) {
          $("body.section-2018, body.section-2017, body.section-2016, body.section-2015, body.section-2014, body.section-2013, body.section-2012, body.section-2011, body.section-2010, body.section-2009, body.section-2008, body.section-2007, body.section-2006, body.section-2005, body.section-2004").each(function(){
                const addThis = document.createElement('div');
                addThis.className='addthis_inline_share_toolbox';
                document.querySelector('div#content-core div#parent-fieldname-text').appendChild(addThis)
           });
        })         
        /* End of insert AddThis to news */

        $(function() {
            if (!window.location.href.indexOf("noticias-anteriores")) {
                var target_date = new Date("november 24, 2019").getTime();
                    var dias, horas, minutos, segundos;
                    var regressiva = document.getElementById("regressiva");

                    setInterval(function () {

                        var current_date = new Date().getTime();
                        var segundos_f = (target_date - current_date) / 1000;

                    dias = parseInt(segundos_f / 86400);
                        segundos_f = segundos_f % 86400;

                        document.getElementById('dia').innerHTML = dias;


                    }, 1000); 
        }
    });
    
    $(document).ready(function() {
            if (window.location.href.indexOf("graduacao-presencial" || "graduacao-a-distancia") )  {
            var divcurso = document.getElementsByTagName("h1")[0].textContent;
            document.getElementById("obter-curso").value = divcurso;
                
            var divmodalidade = document.getElementsByClassName("subtit-grad")[0].textContent;
            document.getElementById("obter-modalidade").value = divmodalidade;
            }
          });

jQuery(document).ready(function(){ 

jQuery(".mosaic-tile-content a.summary-image img").each(function(){

var imagem = jQuery(this).attr('src');

var substr = imagem.split('/thumb');
var direitos = substr[0] + "/preview";

 jQuery(this).attr({
          src:direitos,
        });

});
});

    function mascara(o,f){
        v_obj=o
        v_fun=f
        setTimeout("execmascara()",1)
    }

    function execmascara(){
        v_obj.value=v_fun(v_obj.value)
    }

    function mtel(v){
        v=v.replace(/\D/g,"");
        v=v.replace(/^(\d{2})(\d)/g,"($1) $2");
        v=v.replace(/(\d)(\d{4})$/,"$1-$2");
        return v;
    }

    function id( el ){
      return document.getElementById( el );
    }