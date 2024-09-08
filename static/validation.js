
const validateName = (name) => {
    if(!name) return false;
    let lengthValid = name.trim().length >= 3 && name.trim().length <= 80;
    return lengthValid;
};
  
const validateEmail = (email) => {
    if (!email) return false;
    let lengthValid = email.length > 15;
  
    // validamos el formato
    let re = /^[\w.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let formatValid = re.test(email);
  
    // devolvemos la lógica AND de las validaciones.
    return lengthValid && formatValid;
};
  
const validatePhoneNumber = (phoneNumber) => {
    if (!phoneNumber) return false;
    // validación de longitud
    let lengthValid = phoneNumber.length >= 8;
  
    // validación de formato
    let re = /^[0-9]+$/;
    let formatValid = re.test(phoneNumber);
  
    // devolvemos la lógica AND de las validaciones.
    return lengthValid && formatValid;
};

const validateSelect = (select) => {
    if(!select) return false;
    return true
};

const validateDeviceName = (dname) => {
  if(!dname) return false;
  let lengthValid = dname.trim().length >= 3 && dname.trim().length <= 80;
  return lengthValid;
};
  
const validateFiles = (files) => {
  if (!files) return false;

  // validación del número de archivos
  let lengthValid = 1 <= files.length && files.length <= 3;

  // validación del tipo de archivo
  let typeValid = true;

  for (const file of files) {
    // el tipo de archivo debe ser "image/<foo>" o "application/pdf"
    let fileFamily = file.type.split("/")[0];
    typeValid &&= fileFamily == "image" || file.type == "application/pdf";
  }

  // devolvemos la lógica AND de las validaciones.
  return lengthValid && typeValid;
};

const validateYearsOfUse = (yearsOfUse) => {
  if (!yearsOfUse) return false;
  let rangeValid = yearsOfUse >= 1 && yearsOfUse <= 99;
  return rangeValid;
}
  
const validateForm = () => {
  
    console.log('Form submitted');
    // obtener elementos del DOM usando el nombre del formulario.
    let myForm = document.forms["myForm"];
    let email = myForm["email"].value;
    let phoneNumber = myForm["phone"].value;
    let name = myForm["name"].value;
    let region = myForm["select-region"].value;
    let comuna = myForm["select-comuna"].value;
  
    // variables auxiliares de validación y función.
    let invalidInputs = [];
    let isValid = true;
    const setInvalidInput = (inputName) => {
      invalidInputs.push(inputName);
      isValid &&= false;
    };
  
    // lógica de validación
    if (!validateName(name)) {
      setInvalidInput("Nombre");
    }
    if (!validateEmail(email)) {
      setInvalidInput("Email");
    }
    if (phoneNumber && !validatePhoneNumber(phoneNumber)) {
      setInvalidInput("Número");
    }
    if (!validateSelect(region)) {
      setInvalidInput("Región");
    }
    if (!validateSelect(comuna)) {
      setInvalidInput("Comuna");
    }
    // Validar cada dispositivo de forma individual
    let devices = document.querySelectorAll('#deviceContainer .device'); 

    if (devices !== null) {
      devices.forEach((device, index) => {
        let dname = device.querySelector('input[name="dname[]"]').value;
        let deviceType = device.querySelector('select[name="select-device[]"]').value;
        let yearsOfUse = device.querySelector('input[name="years-of-use[]"]').value;
        let state = device.querySelector('select[name="select-state[]"]').value;
        let files = device.querySelector('input[name="files[]"]').files;

        // Agregar índice al nombre del dispositivo para diferenciar entre los dispositivos
        let deviceNumber = `Dispositivo ${index + 1}`;

        // Validaciones para cada dispositivo
        if (!validateDeviceName(dname)) {
            setInvalidInput(`${deviceNumber}: Nombre del dispositivo`);
        }
        if (!validateSelect(deviceType)) {
            setInvalidInput(`${deviceNumber}: Tipo de dispositivo`);
        }
        if (!validateYearsOfUse(yearsOfUse)) {
            setInvalidInput(`${deviceNumber}: Años de uso`);
        }
        if (!validateSelect(state)) {
            setInvalidInput(`${deviceNumber}: Estado de Funcionamiento`);
        }
        if (!validateFiles(files)) {
            setInvalidInput(`${deviceNumber}: Fotos`);
        }
      });
    };
    // finalmente mostrar la validación
    let validationBox = document.getElementById("val-box");
    let validationMessageElem = document.getElementById("val-msg");
    let validationListElem = document.getElementById("val-list");
    let formContainer = document.querySelector(".main-container");
  
    if (!isValid) {
      validationListElem.textContent = "";
      // agregar elementos inválidos al elemento val-list.
      for (input of invalidInputs) {
        let listElement = document.createElement("li");
        listElement.innerText = input;
        validationListElem.append(listElement);
      }
      // establecer val-msg
      validationMessageElem.innerText = "Los siguientes campos son inválidos:";
  
      /* aplicar estilos de error
      validationBox.style.backgroundColor = "#ffdddd";
      validationBox.style.borderLeftColor = "#f44336";
      */

      // hacer visible el mensaje de validación
      validationBox.hidden = false;
    } else {
      // Ocultar el formulario
      myForm.style.display = "none";
  
      // establecer mensaje de éxito
      validationMessageElem.innerText = "¡Formulario válido! ¿Deseas enviarlo o volver?";
      validationListElem.textContent = "";
  
      /* aplicar estilos de éxito
      validationBox.style.backgroundColor = "#ddffdd";
      validationBox.style.borderLeftColor = "#4CAF50";
      */

      

      let submitButton = document.createElement("button");
      submitButton.innerText = "Enviar";
      submitButton.classList.add("button");
      submitButton.style.marginRight = "10px";
      submitButton.addEventListener("click", () => {
        validationMessageElem.innerText = "Hemos recibido la información de su donación. Muchas gracias<3";
        validationListElem.textContent = "";

        let homeButton = document.createElement("button");
        homeButton.innerText = "Volver al inicio";
        homeButton.classList.add("button");
        homeButton.addEventListener("click", () => {
          window.location.href = "/templates/index.html";
        });
        validationListElem.appendChild(homeButton);
      });
  
      let backButton = document.createElement("button");
      backButton.innerText = "Volver";
      backButton.classList.add("button");
      backButton.addEventListener("click", () => {
        myForm.style.display = "block";
        validationBox.hidden = true;
      });
  
      validationListElem.appendChild(submitButton);
      validationListElem.appendChild(backButton);
  
      // hacer visible el mensaje de validación
      validationBox.hidden = false;
    }
};

document.addEventListener('DOMContentLoaded', () => {
  const form = document.forms['myForm'];
  form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    validateForm(); 
  });
});
