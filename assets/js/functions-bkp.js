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
        $(document).ready(function() {
        //   if (window.location.href.indexOf("noticias")){
            
            // URL
            document.getElementById("url").setAttribute('value',window.location.href);

            // Data e Hora
            var today = new Date();
            var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date+' '+time;

            document.getElementById("data-e-hora").setAttribute('value',dateTime);

            const ReportarProblema = '<a href="#comunicarErro" class="pat-plone-modal" data-pat-plone-modal="width: 65%">Modal basic</a>'

            // Create a new element
            var newNode = document.createElement('div');
            newNode.setAttribute("id","divReportarProblema")

            // Get the reference node
            var referenceNode = document.querySelector('div#content-core div#parent-fieldname-text');

            // Insert the new node after the reference node
            referenceNode.after(newNode);

            document.getElementById('divReportarProblema').innerHTML = ReportarProblema;



        //   }
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
				
				
			var urla = window.location.href;
			var param = urla.split('/');
			var local = param[3];
			var local2 = param[4];
			var local3 = param[5];
			document.getElementById("obter-modalidade-url").value = local;
			document.getElementById("obter-modalidade-url2").value = local2;
			document.getElementById("obter-curso-url").value = local3;
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

    window.onload = function(){
      id('celular').onkeypress = function(){
        mascara( this, mtel );
      } || null;
    }