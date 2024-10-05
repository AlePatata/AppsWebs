
function populateProfile() {
    const deviceData = JSON.parse(localStorage.getItem('deviceData'));
    if (deviceData) {
        document.getElementById('tipo').textContent = `Tipo: ${deviceData.tipo}`;
        document.getElementById('nombre').textContent = `Nombre: ${deviceData.nombre}`;
        document.getElementById('estado').textContent = `Estado: ${deviceData.estado}`;
        document.getElementById('comuna').textContent = `Comuna: ${deviceData.comuna}`;
        //document.getElementById('photo').src = deviceData.photo;
        //document.getElementById('photo').alt = `Foto del Dispositivo: ${deviceData.nombre}`;
    }
}

function toggleImageSize() {
    console.log('Cambiando tamaño de la imagen');
    const photo = document.getElementById('photo');
    photo.classList.toggle('large'); // Cambia la clase entre normal y grande
}

document.getElementById('form_comentarios').addEventListener('submit', function(event) {
    event.preventDefault();

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
        date: new Date().toLocaleString(),
        nombre: nombre,
        text: text
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
    const commentList = document.getElementById('comments-list');
    const commentItem = document.createElement('li');
    commentItem.textContent = `${comment.date} - ${comment.nombre}: ${comment.text}`;
    commentList.appendChild(commentItem);
}

populateProfile();

document.getElementById('photo').addEventListener('click', toggleImageSize);
