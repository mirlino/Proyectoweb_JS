$(document).ready(function(){

    
    if (window.location.href.indexOf('index') > -1) { // COMPROBACION DE PAGINA
       
        //Slider
        $('.galeria').bxSlider({
            mode:        'fade',
            captions:    true,
            slideWidth:  1200
        });
    
        //posts ARRAY JSON
        var posts = [
            {
                title: 'Prueba de titulo 1',
                date: 'publicado el día '+ new moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iste molestias iure quasi suscipit sequi provident animi ad cupiditate laudantium odit quaerat nihil dolorem atque quia a, numquam fuga, voluptas quis! Sit fugit voluptates temporibus dolorum error placeat quam nostrum, molestias, eius tempora ab. Aliquid eligendi aliquam corporis laboriosam labore!'
            },
            {
                title: 'Prueba de titulo 2',
                date: 'publicado el día '+ new moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iste molestias iure quasi suscipit sequi provident animi ad cupiditate laudantium odit quaerat nihil dolorem atque quia a, numquam fuga, voluptas quis! Sit fugit voluptates temporibus dolorum error placeat quam nostrum, molestias, eius tempora ab. Aliquid eligendi aliquam corporis laboriosam labore!'
            },
            {
                title: 'Prueba de titulo 3',
                date: 'publicado el día '+ new moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iste molestias iure quasi suscipit sequi provident animi ad cupiditate laudantium odit quaerat nihil dolorem atque quia a, numquam fuga, voluptas quis! Sit fugit voluptates temporibus dolorum error placeat quam nostrum, molestias, eius tempora ab. Aliquid eligendi aliquam corporis laboriosam labore!'
            },
            {
                title: 'Prueba de titulo 4',
                date: 'publicado el día '+ new moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iste molestias iure quasi suscipit sequi provident animi ad cupiditate laudantium odit quaerat nihil dolorem atque quia a, numquam fuga, voluptas quis! Sit fugit voluptates temporibus dolorum error placeat quam nostrum, molestias, eius tempora ab. Aliquid eligendi aliquam corporis laboriosam labore!'
            },

        ];

        posts.forEach((item, index) =>{
            var post = `
                        <article class="post">
                            <h2>${item.title}</h2>
                            <span class="date">${item.date}</span>
                            <p>${item.content}</p>
                            <a href="#" class="button-more">Leer más...</a>
                        </article>
                        `;

                        $("#posts").append(post);
        });
    } //FIN COMPROBACION DE PAGINA

      // Selector de tema
      var theme = $('#theme');

      $('#to-green').click(function(){
        localStorage.removeItem('theme');
        localStorage.removeItem('color');
        theme.attr("href", "css/green.css");
        var color = "css/green.css";
        localStorage.setItem('color', color);
        localStorage.removeItem('theme');
        localStorage.setItem('theme', theme);
        location.reload();
      });

      $('#to-red').click(function(){
        localStorage.removeItem('theme');
        localStorage.removeItem('color');
        theme.attr("href", "css/red.css");
        var color = "css/red.css";
        localStorage.setItem('color', color);
        localStorage.setItem('theme', theme);
        location.reload();
      });

      $('#to-blue').click(function(){
        localStorage.removeItem('theme');
        localStorage.removeItem('color');
        theme.attr("href", "css/blue.css");
        var color = "css/blue.css";
        localStorage.setItem('color', color);
        localStorage.setItem('theme', theme);
        location.reload();
      });

      //Cambio de fondo
      var color = localStorage.getItem('color');
      var new_theme = localStorage.getItem('theme');
      
      if (new_theme != null && new_theme != "undefined") {
        
        theme.html('<link rel="stylesheet" href="'+color+'">');

      } else if(new_theme === null || new_theme === "undefined") {
        theme.html('<link rel="stylesheet" href="css/green.css">');

      }

      // Scroll arriba de la web
      $('.subir').click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;

      });

      //login falso

      $('#login form').submit(function(){
        var form_name = $('#form_name').val();
        
        localStorage.setItem('form_name', form_name);
        location.reload();
      });

      var form_name = localStorage.getItem('form_name');
      
      
      if(form_name != null && form_name != "undefined" && form_name != ""){
        var about_parrafo = $('#about p');

        about_parrafo.html('<strong><hr><br>bienvenido, '+form_name+'</strong> ');
        about_parrafo.append("<a href='#' id='logout'> Cerrar sesión</a>");

        $('#login').hide();

        $('#logout').click(function(){
            localStorage.removeItem('form_name');
            location.reload();
        });
      }

      //Acordeon
      if (window.location.href.indexOf('about') > -1) { //FUNCIONA EN PAGE ABOUT
        $("#acordeon").accordion();
      }
      
      // Reloj
      if (window.location.href.indexOf('reloj') > -1) { //FUNCIONA EN PAGE RELOJ
        setInterval(function(){
          var reloj = moment().format("hh:mm:ss");
          $('#reloj').html(reloj);
        }, 1000)
        
      }

      //validación

      if (window.location.href.indexOf('contact') > -1) { //FUNCIONA EN PAGE CONTACT
        
        $("form input[name='date']").datepicker({
          dateFormat: 'dd-mm-yy'
        });

        $.validate({
          lang: 'es',
          errorMessagePosition: 'top',
          scrollTopOnError: true
        });
      }
     
      var fechaFooter = moment().format("YYYY");
      $('#fecha-footer').html(fechaFooter);


});