

const region_select = (data) => {
    let regionSelect = document.getElementById("select-region");
    for (const region in data) {
      let option = document.createElement("option");
      option.value = region;
      option.text = region;
      regionSelect.appendChild(option);
    }
    
  };


const updateCursos = (data) => {
    let regionSelect = document.getElementById("select-region");
    let courseSelect = document.getElementById("select-course");
    
    let selectedRegion = regionSelect.value;
    
    courseSelect.innerHTML = "";
    
    if (data[selectedRegion]) {
      data[selectedRegion].forEach(course => {
        let option = document.createElement("option");
        option.value = course;
        option.text = course;
        courseSelect.appendChild(option);
      });
    }
  };
  
  document.getElementById("select-region").addEventListener("change", updateCursos);

  window.onload = () => {
    region_select();
  };
  
Mostrando /.