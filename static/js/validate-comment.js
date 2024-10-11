
function toggleImageSize() {
    const photo = document.getElementById('photo');
    photo.classList.toggle('large'); 
    
}

document.getElementById('form_comentarios').addEventListener('submit', function(event) {
    //event.preventDefault();

    const nombreInput = document.getElementById('nombre');
    const commentText = document.getElementById('texto');
    const message = document.getElementById('message');

    const nombre = nombreInput.value.trim();
    const text = commentText.value.trim();

    // Validaciones de los campos
    if (nombre.length < 3 || nombre.length > 80) {
        message.textContent = "El nombre debe tener entre 3 y 80 caracteres.";
        message.style.color = "red";
        return;
    }

    if (text.length < 5) {
        message.textContent = "El comentario debe tener al menos 5 caracteres.";
        message.style.color = "red";
        return;
    }

    // Si las validaciones pasan, agregamos el comentario
    const comment = {
        nombre: nombre,
        texto: text,
    };

    addCommentToList(comment);
    message.textContent = "Comentario agregado exitosamente.";
    message.style.color = "green";

    // Limpiar formulario
    nombreInput.value = '';
    commentText.value = '';
});

// Función para agregar el comentario al listado
function addCommentToList(comment) {
    const commentList = document.getElementById('lista_comentarios');
    const commentItem = document.createElement('li');
    const date = new Date().toLocaleString(); // Get current date and time
    commentItem.textContent = `${date} - ${comment.nombre}: ${comment.texto}`; // Note: changed 'text' to 'texto'
    commentList.appendChild(commentItem);
}


let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function() {
    window.location.assign("informacion_dispositivo");
});

photo.addEventListener('click', toggleImageSize);
