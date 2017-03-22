window.onload = loadPage;

function loadPage()
{
	btnInserir = document.getElementById("btnInserir");
	btnInserir.addEventListener("click", inserirNota, false);
 	 }

 function inserirNota()
 {
 	document.getElementById("assunto-text").focus();

 	var assuntoText = document.getElementById("assunto-text");
 	var messageText = document.getElementById("message-text");

 	if(assuntoText.value == "" || messageText.value == "")
 	{
 		alert("Insira o assunto e texto da nota !");
 	}
 	else
 	{
 		try
 		{
 		var el = criaElemento(assuntoText, messageText);

 		var elemento = document.getElementById("notas");
		
 		elemento.appendChild(el);		

 		assuntoText.value = "";
 		messageText.value = "";

 		document.getElementById("btnFechar").Click;

 		}
 		catch(e)
 		{
 			console.error("Ocorreu um  erro na inserção da nota", e);
 		}
 	}

 		insereEventoLista();
 	
 	// var btnAlter = document.getElementsByClassName("btn-alter");
	// btnAlter.addEventListener("click", alterNota, false);
	// $('btn-alter').on('click', alterNota);
 }

 function insereEventoLista()
 {
	var list = document.getElementsByClassName("btn-alter");
	var i = 0;

	if(list.length > 0)
	{
		for (i = 0; i <	 list.length; i++)
		{
			var btn = list[i];
			btn.addEventListener("click", alterNota, false);
		}
	}

 }

function criaElemento(assuntoText, messageText)
{
	var el = document.createElement('div');
 		
	var sizeNote = assuntoText.value + messageText.value;

		if(sizeNote.length < 50)
		{
			el.setAttribute("class", "div-note col-md-2 col-lg-2 col-sm-2 col-xs-10");
 			el.style.backgroundColor = "#1E90FF";
 			el.style.borderColor = "#1E90FF";
			el.setAttribute("draggable","true");
		}
 		if(sizeNote.length > 50 && sizeNote.length < 100)
 		{
 			el.setAttribute("class", "div-note col-md-4 col-lg-4 col-sm-4 col-xs-10");
 			el.style.backgroundColor = "#F08080";
 			el.style.borderColor = "#F08080";
 			el.setAttribute("draggable","true");
 		}
 		if(sizeNote.length > 100 && sizeNote.length < 150)
 		{
 			el.setAttribute("class", "div-note col-md-6 col-lg-6 col-sm-6 col-xs-10");
 			el.style.backgroundColor = "#FF6347";
 			el.style.borderColor = "#FF6347";
 			el.setAttribute("draggable","true");
 		}

 		if(sizeNote.length > 150 && sizeNote.length < 200)
 		{
 			el.setAttribute("class", "div-note col-md-8 col-lg-8 col-sm-8 col-xs-10");
 			el.style.backgroundColor = "#FF8C00";
 			el.style.borderColor = "#FF8C00";
 			el.setAttribute("draggable","true");
 		}

 		if(sizeNote.length > 200 && sizeNote.length < 250)
 		{
 			el.setAttribute("class", "div-note col-md-10 col-lg-10 col-sm-10 col-xs-10");
 			el.style.backgroundColor = "#2E8B57";
 			el.style.borderColor = "#2E8B57";
 			el.setAttribute("draggable","true");
 		}

 		if(sizeNote.length > 250)
 		{
 			el.setAttribute("class", "div-note col-md-10 col-lg-10 col-sm-10 col-xs-10");
 			el.style.backgroundColor = "#DAA520";
 			el.style.borderColor = "#DAA520";
 			el.setAttribute("draggable","true");
 		}

 		var assunto = document.createTextNode(assuntoText.value);
 		var texto = document.createTextNode(messageText.value);
 		
 		el.appendChild(assunto);

		// Cria o svg da engrenagem para editar as notas

 		var svg = document.createElement('svg');
 		svg.setAttribute("width", "50px");
 		svg.setAttribute("height", "50px");
 		svg.setAttribute("class", "img-engrenagem btn-alter");
 		
 		svg.setAttribute("onclick", "alterNota");

 		var img = document.createElement('img');
 		img.setAttribute("xlink:href", "gear-black-shape_icon-icons.com_56963.svg");
 		img.setAttribute("src", "gear-black-shape_icon-icons.com_56963.svg");
 		img.setAttribute("width", "25px");
 		img.setAttribute("height", "25px");
		 		
 		svg.appendChild(img);

 		el.appendChild(svg);
 		el.appendChild(document.createElement('br'));
 		el.appendChild(document.createElement('br'));
 		el.appendChild(texto);

 		return el;
}



function alterNota()
{
	alert("Lançando onclick alterNota");
}
// function incluirNota()
// {
// 	document.getElementById("myModal").show();
// }
$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  $('#assunto-text').focus()
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})