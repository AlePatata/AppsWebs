document.getElementById('addDeviceButton').addEventListener('click', function() {
    var deviceContainer = document.getElementById('deviceContainer');
    var deviceList = document.getElementById('deviceList');
    
    var newDeviceContainer = deviceContainer.cloneNode(true);

    // Generate a unique index for each new device
    var newIndex = deviceList.getElementsByClassName('device').length;

    // Update the name of input fields and remove the id
    var inputs = newDeviceContainer.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type !== 'file') {
            inputs[i].value = '';  // Clear text fields
        } else {
            inputs[i].name = `files_${newIndex}[]`;  // Unique name for file inputs
        }
        inputs[i].removeAttribute('id');  // Remove duplicated id
    }

    // Remove id from select elements and reset their values
    var selects = newDeviceContainer.getElementsByTagName('select');
    for (var i = 0; i < selects.length; i++) {
        selects[i].removeAttribute('id');
        selects[i].selectedIndex = 0;  // Reset dropdown to default
    }

    // Remove the id of the cloned device container itself
    newDeviceContainer.removeAttribute('id');
    
    // Append the cloned and modified container to the list
    deviceList.appendChild(newDeviceContainer);
});

document.getElementById('removeDeviceButton').addEventListener('click', function() {
    var deviceList = document.getElementById('deviceList');
    var devices = deviceList.getElementsByClassName('device');
    
    if (devices.length > 1) {
        deviceList.removeChild(devices[devices.length - 1]);  // Remove the last device
    } else {
        alert("Debes tener al menos un dispositivo.");  // Prevent removing the last one
    }
});
