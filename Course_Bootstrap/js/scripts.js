//instrução jquery que inicializa este script somente quando o documento(HTML) estiver pronto.
$(document).ready(function() {

    // Progress bar
    let containerA = document.getElementById("circleA");

    //Criando um obj de circulo com a biblioteca pronta ProgressBar, passando onde ele deve ser renderizado(no lugar do containerA)
    let circleA = new ProgressBar.Circle(containerA, {

        //Propriedades do objeto circle
        color: '#64DAF9',
        strokeWidth: 8,              //largura da borda do circulo
        duration: 1400,             //tempo de duração da ação do circulo (ms)
        from: { color: '#AAA' },     //from: {...}, to: {...} define a cor que o obj inicia e a cor que termina
        to: { color: '#65DAF9' },

        //Criando a animação do circle
        step: function(state, circle) {      

            circle.path.setAttribute('stroke', state.color);

            //Definindo o valor do circulo
            let value = Math.round(circle.value() * 60); //valor maximo mostrado na progressao do circle será *60*
            
            circle.setText(value);
        }                      
    });

    let containerB = document.getElementById("circleB");
    let circleB = new ProgressBar.Circle(containerB, {

        color: '#64DAF9',
        strokeWidth: 8,              
        duration: 1600,            
        from: { color: '#AAA' },    
        to: { color: '#65DAF9' },

        step: function(state, circle) {      

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 254); 
 
            circle.setText(value);
        }                      
    });

    let containerC = document.getElementById("circleC");
    let circleC = new ProgressBar.Circle(containerC, {

        color: '#64DAF9',
        strokeWidth: 8,              
        duration: 2000,            
        from: { color: '#AAA' },    
        to: { color: '#65DAF9' },

        step: function(state, circle) {      

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 32); 
 
            circle.setText(value);
        }                      
    });

    let containerD = document.getElementById("circleD");
    let circleD = new ProgressBar.Circle(containerD, {

        color: '#64DAF9',
        strokeWidth: 8,              
        duration: 2200,            
        from: { color: '#AAA' },    
        to: { color: '#65DAF9' },

        step: function(state, circle) {      

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 5243); 
 
            circle.setText(value);
        }                      
    });


    // Iniciando um loader quando o usuario chega no elemento (Ativar a movimentação somente quando o usuario visualizar a area)
    let dataAreaOffset = $('#data-area').offset();
    let stop =  0;   // parar animação

    $(window).scroll(function(e) {

        //pegando a posição que o usuario esta no scroll da tela
        let scroll = $(window).scrollTop();

        // se o scroll for maior do que o top da area tela menor que 500px
        if(scroll > (dataAreaOffset.top - 500) && stop == 0) {

            //Disparando a animação
            circleA.animate(1.0); //Animação completa (1.0)
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);
    
            stop = 1;  //para entrar somente uma vez na condição
        }

    });

    // Parallax 
    //Carregar a imagem do site primeiro, para que nao haja bugs com o parallax
    setTimeout(function() {

        $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'});
        $('#apply-area').parallax({imageSrc: 'img/pattern.png'});

    }, 250);

    // Filtro do portifólio
    $('.filter-btn').on('click', function() {

        let type = $(this).attr('id');
        let boxes = $('.project-box');

        $('.main-btn').removeClass('active');
        $(this).addClass('active');
        
        if(type == 'dsg-btn') {
            eachBoxes('dsg', boxes);
        } else if (type == 'dev-btn') {
            eachBoxes('dev', boxes);
        } else if (type == 'seo-btn'){
            eachBoxes('seo', boxes);
        } else {
            eachBoxes('all', boxes);
        }

    });


    // Função genérica para manipular os campos 'boxes' e os id's 'type'
    function eachBoxes(type, boxes) {

        if(type == 'all') {
            $(boxes).fadeIn();
        } else {
            $(boxes).each(function() {
                if(!$(this).hasClass(type)) {
                    $(this).fadeOut('slow');
                } else {
                    $(this).fadeIn();
                }
            });
        }
    }

});