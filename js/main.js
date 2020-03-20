$(document).ready(function(){

	if(window.location.href.indexOf('index') > -1){
		$('.galeria').bxSlider({
	   		mode: 'fade',
	   		captions: true,
	   		slideWidth: 1200
	  	});
	  }

  //Posts
  	if(window.location.href.indexOf('index') > -1){
	  	var posts = [
	  	
	  		{
	  			tittle: 'Prueba de Titulo 1',
	  			date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " de " +moment().format("YYYY"),
	  			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur diam eu quam congue tristique. Nulla vel congue ex. Pellentesque eget egestas nulla. Proin gravida dapibus mollis. Vestibulum vitae elit eu magna dapibus elementum quis eget dolor. Mauris facilisis, nulla rutrum luctus pharetra, purus odio euismod magna, ut molestie mi mauris ac elit. Nam iaculis pellentesque convallis. Quisque egestas nec massa quis tempor. Nulla tortor nunc, cursus sit amet pellentesque non, lacinia et velit. Cras vitae sapien massa. Curabitur porta libero neque, id sagittis elit volutpat eget. Integer nec orci in ligula rutrum iaculis id vel metus. '
	  		},
	   		{
	  			tittle: 'Prueba de Titulo 2',
	  			date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " de " +moment().format("YYYY"),
	  			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur diam eu quam congue tristique. Nulla vel congue ex. Pellentesque eget egestas nulla. Proin gravida dapibus mollis. Vestibulum vitae elit eu magna dapibus elementum quis eget dolor. Mauris facilisis, nulla rutrum luctus pharetra, purus odio euismod magna, ut molestie mi mauris ac elit. Nam iaculis pellentesque convallis. Quisque egestas nec massa quis tempor. Nulla tortor nunc, cursus sit amet pellentesque non, lacinia et velit. Cras vitae sapien massa. Curabitur porta libero neque, id sagittis elit volutpat eget. Integer nec orci in ligula rutrum iaculis id vel metus. '
	  		},
	   		{
	  			tittle: 'Prueba de Titulo 3',
	  			date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " de " +moment().format("YYYY"),
	  			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur diam eu quam congue tristique. Nulla vel congue ex. Pellentesque eget egestas nulla. Proin gravida dapibus mollis. Vestibulum vitae elit eu magna dapibus elementum quis eget dolor. Mauris facilisis, nulla rutrum luctus pharetra, purus odio euismod magna, ut molestie mi mauris ac elit. Nam iaculis pellentesque convallis. Quisque egestas nec massa quis tempor. Nulla tortor nunc, cursus sit amet pellentesque non, lacinia et velit. Cras vitae sapien massa. Curabitur porta libero neque, id sagittis elit volutpat eget. Integer nec orci in ligula rutrum iaculis id vel metus. '
	  		},
	   		{
	  			tittle: 'Prueba de Titulo 4',
	  			date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " de " +moment().format("YYYY"),
	  			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur diam eu quam congue tristique. Nulla vel congue ex. Pellentesque eget egestas nulla. Proin gravida dapibus mollis. Vestibulum vitae elit eu magna dapibus elementum quis eget dolor. Mauris facilisis, nulla rutrum luctus pharetra, purus odio euismod magna, ut molestie mi mauris ac elit. Nam iaculis pellentesque convallis. Quisque egestas nec massa quis tempor. Nulla tortor nunc, cursus sit amet pellentesque non, lacinia et velit. Cras vitae sapien massa. Curabitur porta libero neque, id sagittis elit volutpat eget. Integer nec orci in ligula rutrum iaculis id vel metus. '
	  		},
	   		{
	  			tittle: 'Prueba de Titulo 5',
	  			date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " de " +moment().format("YYYY"),
	  			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur diam eu quam congue tristique. Nulla vel congue ex. Pellentesque eget egestas nulla. Proin gravida dapibus mollis. Vestibulum vitae elit eu magna dapibus elementum quis eget dolor. Mauris facilisis, nulla rutrum luctus pharetra, purus odio euismod magna, ut molestie mi mauris ac elit. Nam iaculis pellentesque convallis. Quisque egestas nec massa quis tempor. Nulla tortor nunc, cursus sit amet pellentesque non, lacinia et velit. Cras vitae sapien massa. Curabitur porta libero neque, id sagittis elit volutpat eget. Integer nec orci in ligula rutrum iaculis id vel metus. '
	  		},
	  		{
	  			tittle: 'Prueba de Titulo 6',
	  			date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " de " +moment().format("YYYY"),
	  			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur diam eu quam congue tristique. Nulla vel congue ex. Pellentesque eget egestas nulla. Proin gravida dapibus mollis. Vestibulum vitae elit eu magna dapibus elementum quis eget dolor. Mauris facilisis, nulla rutrum luctus pharetra, purus odio euismod magna, ut molestie mi mauris ac elit. Nam iaculis pellentesque convallis. Quisque egestas nec massa quis tempor. Nulla tortor nunc, cursus sit amet pellentesque non, lacinia et velit. Cras vitae sapien massa. Curabitur porta libero neque, id sagittis elit volutpat eget. Integer nec orci in ligula rutrum iaculis id vel metus. '
	  		}
		];


		posts.forEach((item,index)=> {

			var post = 	`
						<article class="posts">
							<h2> ${item.tittle} </h2>
							<span class="date"> ${item.date}</span>
							<p>
								${item.content}	
							</p>

							<a href="#" class="boton-mas"> Leer màs</a>

						</article>

						`;
			$('#posts').append(post);
		});
	}

	//selblue de tema

	var theme = $('#theme');
	$('#to-green').click(function(){
		theme.attr("href","css/green.css")
	});

	$('#to-red').click(function(){
		theme.attr("href","css/red.css")
	});

	$('#to-blue').click(function(){
		theme.attr("href","css/blue.css")
	});

//	scroll arriba web

	$('.subir').click(function(e){
		
		e.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		}, 1000);

		return false;
	});


	//login falso

	$('#login form').submit(function(){
		var form_name = $('#form_name').val();
		localStorage.setItem("form_name", form_name);
	});


	var form_name = localStorage.getItem("form_name");
	
	if(form_name != null && form_name != 'undefined'){
		var about_parrafo = $('#about p');
		
		about_parrafo.html("<br/> <strong> Bienvenido " + form_name + "</strong>");
		
		about_parrafo.append("<a href='#' id='logout'> Cerrar Sesion </a> ");

		$('#login').hide();	

		$('#logout').click(function(){
			localStorage.clear();
			location.reload();
		});
	}

	if(window.location.href.indexOf('about') > -1){
		$('#acordeon').accordion();
	}

	if(window.location.href.indexOf('reloj') > -1){
		setInterval(function(){
			var reloj = moment().format('hh:mm:ss');
			$('#reloj').html(reloj);
		});
	}

	//validacion
	if(window.location.href.indexOf('contacto') > -1){

		$('form input[name="date"]').datepicker({
			dateFormat: 'dd-mm-yy'
		});

		$.validate({
			lang: 'es',
			errorMessagePosition: 'top',
			scrollToTopOnError: true
		});
	}
});