function add() {
	var comments = document.getElementById('comment').value; // 1. Tomar texto en el textarea (Cada cosa que se desee obtener desde html es con value)
	// 2. Limpiar input textarea
	document.getElementById('comment').value = '';
	var cont = document.getElementById('cont');
	// Crear div contenedor
	var newComments = document.createElement('div');
	// Validar que textarea tiene mensaje
	if (comments.length == 0 || comments == null || comments == ' ') {
		alert('Ingresa un comentario');
		return false;
	}
	// Crear checkbox
	var chck = document.createElement('input');
	chck.type = 'checkbox';
	// Crear icono de corazon
	var iconHeart = document.createElement('i');
	iconHeart.classList.add('fa', 'fa-heart', 'heart');
	// Crear icono de Basura
	var iconTrash = document.createElement('i');
	iconTrash.classList.add('fa', 'fa-trash', 'trash');

	// Nodos de texto del Textarea
	var textNewComment = document.createTextNode(comments);

	var contenedorElemento = document.createElement('p');
	contenedorElemento.appendChild(textNewComment);
	newComments.appendChild(chck);
	newComments.appendChild(contenedorElemento);
	newComments.appendChild(iconHeart);
	newComments.appendChild(iconTrash);
	cont.appendChild(newComments);
}