// Jquery

$(document).ready(function() {

  // Progress bar
  // circulo A
    let containerA = document.getElementById("circleA");
    
    let circleA = new ProgressBar.Circle(containerA, {
        color: "#fff",
        strokeWidth: 8, 
        duration: 1400, 
        from: { color: "#aaa"},
        to: {color: "#ca1c2a"},

        step: function(state, circle) {
            circle.path.setAttribute("stroke", state.color);

            let value = Math.round(circle.value() * 60);

            circle.setText(value);
        }

    });  

    // circulo B
    let containerB = document.getElementById("circleB");
    
    let circleB = new ProgressBar.Circle(containerB, {
        color: "#fff",
        strokeWidth: 8, 
        duration: 1600, 
        from: { color: "#aaa"},
        to: {color: "#ca1c2a"},

        step: function(state, circle) {
            circle.path.setAttribute("stroke", state.color);

            let value = Math.round(circle.value() * 10000);

            circle.setText(value);

        }

    });
    
       // circulo C
    let containerC = document.getElementById("circleC");
    
    let circleC = new ProgressBar.Circle(containerC, {
        color: "#fff",
        strokeWidth: 8, 
        duration: 2000, 
        from: { color: "#aaa"},
        to: {color: "#ca1c2a"},

        step: function(state, circle) {
            circle.path.setAttribute("stroke", state.color);

            let value = Math.round(circle.value() * 32);

            circle.setText(value);

        }

    });

  // circulo D
    let containerD = document.getElementById("circleD");
    
    let circleD = new ProgressBar.Circle(containerD, {
        color: "#fff",
        strokeWidth: 8, 
        duration: 2200, 
        from: { color: "#aaa"},
        to: {color: "##ca1c2a"},

        step: function(state, circle) {
            circle.path.setAttribute("stroke", state.color);

            let value = Math.round(circle.value() * 500);

            circle.setText(value);

        }

    });

    //inicia carregamento valores círculos quando usuário chega no elemento
    let dataAreaOffset = $("#data-area").offset();
    let stop = 0;

    $(window).scroll(function (e) {
        let scroll = $(window).scrollTop();

        if(scroll > (dataAreaOffset.top - 500) && stop == 0) {

            circleA.animate(1.0) //Termina a estrutura da animação que começou na linha 15, que é a animação completa
            circleB.animate(1.0)
            circleC.animate(1.0)
            circleD.animate(1.0)

            stop = 1; //animação pára quando fizer o evento de animação dos círculos. Porque só vai entrar uma vez neste evenot de IF
        }

    });

    // Paralax
    setTimeout(function() {
       
        $('#data-area').parallax({imageSrc: "imagens/TELECALL-03.jpg"});
        $('#pattern-img').parallax({imageSrc: "imagens/pattern.png"});
      }, 250);


    //   Filtro do Portfóliio

    $(".filter-btn").on("click", function() {

        let type = $(this).attr("id");
        let boxes = $(".project-box");
        // adiciona OU remove ao clicar, status ACTIVE de um botão para o outro.
        $(".main-btn").removeClass("active");
        $(this).addClass("active");
        // esconde ou mostra fotos, correspondentes ao evento do botão clicado acima, de acordo com seus ID's ou CLASSES
        if(type == "dsg-btn") {
            eachBoxes("dsg", boxes);
        }
        else if(type == "dev-btn") {
            eachBoxes("dev", boxes);
        }
        else if(type == "seo-btn") {
            eachBoxes("seo", boxes);
        }
        else {
            eachBoxes('all', boxes);
        }
     });
    // Função para mostrar e esconder fotos 
    function eachBoxes(type, boxes) {
        if(type == "all") {
            $(boxes).fadeIn(); //Exibe ítens escondidos pelo FADE
        }
        else {
            $(boxes).each(function(){
            if(!$(this).hasClass(type)) {
                $(this).fadeOut("slow"); //Esconde fotos
            }
            else {
                $(this).fadeIn();
            }
                
            });
        }
    }

    //Scroll para seções no site

    let navBtn = $(".nav-item");

    let servicos= $('#mainSlider');
    let internet = $('#about-area');
    let eventos = $('#services-area');
    let nossoTime = $('#team-area');
    let portfolio = $('#portfolio-area');
    let contato = $('#contact-area');

    let scrolTo = "";

    $(navBtn).click(function() {
        let btnId = $(this).attr('id');

        if(btnId == 'internet-menu') {
            scrollTo = internet;
          } else if(btnId == 'telefonia-menu') {
            scrollTo = servicos;
          } else if(btnId == 'infra-menu') {
            scrollTo = nossoTime;
          } else if(btnId == 'mobilidade-menu') {
            scrollTo = portfolio;
          } else if(btnId == 'eventos-menu') {
            scrollTo = eventos;
          } else {
            scrollTo = servicos;
          }

          $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70
        }, 1500);
      });
    
    });

// Aumentar e diminuir fonte

var $btnAumentar = $("#btnAumentar");
var $btnDiminuir = $("#btnDiminuir");
var $elemento = $("body").find("*"); //encontra todos os elementos dentro do body
var fonts = [];

function obterTamanhoFonte() {
  for (var i = 0; i < $elemento.length; i++) {
    fonts.push(parseFloat($elemento.eq(i).css('font-size')));
  }
}
obterTamanhoFonte();
$btnAumentar.on('click', function() {
  for (var i = 0; i < $elemento.length; i++) {
    ++fonts[i];
    $elemento.eq(i).css('font-size', fonts[i]);
  }
});

$btnDiminuir.on('click', function() {
  for (var i = 0; i < $elemento.length; i++) {
    --fonts[i];
    $elemento.eq(i).css('font-size', fonts[i]);
  }
});


// DarkMode
const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})

















































/*
NOTAS
======
LINHA 8: Instanciando um objeto
LINHA 10: largura do círculo
LINHA 11: duração da animação
LINHA 15 - 28: estrutura da animação do círculo
LINHA 92: o ID ali é o do HTML configuração dados da empresa.
LINHA 92 - 105: A estrutra ali diz: Que SE o usuário estiver a 500px da parte superior do site para baixo (fazendo scroll)
           e o usuário avistar os círculos, a animação dos círculos começa e para quando terminar a animação por causa do
           limitador STOP que só vai repetir uma só vez.,

LINHA 111 - : carrega todas as imagens do site primeiro, para não ter bugs na animação. Por isso coloco um tempo para ajustar o HTML, 
              antes de processar a animação.


LINHA 121 e 122: variáveis (type e boxes) Identificam os botões através do ID, assim como as caixas (botões) que temos no projeto.
LINHA 124 até 125 : Lógica para desativar o ACTIVE dos botões (botão que já está marcado por padrão no HTML), REMOVER deste botão ACTIVE, 
                    e marcar outro botão que eu quiser marcar.

*/