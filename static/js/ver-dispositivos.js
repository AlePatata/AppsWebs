document.getElementById('table').addEventListener('click', function(event) {
    const row = event.target.closest('tr');
    if (row) {
        const deviceData = {
            id: row.dataset.id,
            tipo: row.dataset.tipo,
            nombre: row.dataset.nombre,
            estado: row.dataset.estado,
            contacto: row.dataset.contacto,
            comuna: row.dataset.comuna,
            imagen: (row.dataset.imagen || '').split(',').filter(Boolean),  // Split string into array
        };
        
        window.location.href=for_url('informacion_dispositivo', dispositivo_id=deviceData.id);
    }
    
});


const updateComuna = () => {
    comuna = db.get_comuna_by_contacto(contacto_id);
    let comunacolumn = document.getElementById("comuna");
    comunacolumn.appendChild(comuna);
};

window.onload = () => {
    updateComuna();
};