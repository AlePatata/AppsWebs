document.getElementById('addDeviceButton').addEventListener('click', function() {
    var deviceContainer = document.getElementById('deviceContainer');
    var newDevice = deviceContainer.children[0].cloneNode(true);

    // Limpiar los valores de los campos duplicados
    var inputs = newDevice.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = '';  // Limpiar el valor de los campos
    }

    var selects = newDevice.getElementsByTagName('select');
    for (var i = 0; i < selects.length; i++) {
        selects[i].selectedIndex = 0;  // Reiniciar los selectores
    }

    deviceContainer.appendChild(newDevice);  // Añadir el nuevo conjunto de campos
});

document.getElementById('removeDeviceButton').addEventListener('click', function() {
    var deviceContainer = document.getElementById('deviceContainer');
    if (deviceContainer.children.length > 1) {
        deviceContainer.removeChild(deviceContainer.children[deviceContainer.children.length - 1]);
    }
});