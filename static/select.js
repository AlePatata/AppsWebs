const data = {
  "regions": [
    {
    "id": 1, "name": "Región de Tarapacá",
    "comunas": [{"id": 10301, "name": "Camiña"}, {"id": 10302, "name": "Huara"}, {"id": 10303, "name": "Pozo Almonte"}, {"id": 10304, "name": "Iquique"}, {"id": 10305, "name": "Pica"}, {"id": 10306, "name": "Colchane"}, {"id": 10307, "name": "Alto Hospicio"}]
    },
    {
    "id": 2, "name": "Región de Antofagasta",
    "comunas": [{"id": 20101, "name": "Tocopilla"}, {"id": 20102, "name": "Maria Elena"}, {"id": 20201, "name": "Ollague"}, {"id": 20202, "name": "Calama"}, {"id": 20203, "name": "San Pedro Atacama"}, {"id": 20301, "name": "Sierra Gorda"}, {"id": 20302, "name": "Mejillones"}, {"id": 20303, "name": "Antofagasta"}, {"id": 20304, "name": "Taltal"}]
    },
    {
    "id": 3, "name": "Región de Atacama",
    "comunas": [{"id": 30101, "name": "Diego de Almagro"}, {"id": 30102, "name": "Chañaral"}, {"id": 30201, "name": "Caldera"}, {"id": 30202, "name": "Copiapo"}, {"id": 30203, "name": "Tierra Amarilla"}, {"id": 30301, "name": "Huasco"}, {"id": 30302, "name": "Freirina"}, {"id": 30303, "name": "Vallenar"}, {"id": 30304, "name": "Alto del Carmen"}]
    },
    {
    "id": 4, "name": "Región de Coquimbo ",
    "comunas": [{"id": 40101, "name": "La Higuera"}, {"id": 40102, "name": "La Serena"}, {"id": 40103, "name": "Vicuña"}, {"id": 40104, "name": "Paihuano"}, {"id": 40105, "name": "Coquimbo"}, {"id": 40106, "name": "Andacollo"}, {"id": 40201, "name": "Rio Hurtado"}, {"id": 40202, "name": "Ovalle"}, {"id": 40203, "name": "Monte Patria"}, {"id": 40204, "name": "Punitaqui"}, {"id": 40205, "name": "Combarbala"}, {"id": 40301, "name": "Mincha"}, {"id": 40302, "name": "Illapel"}, {"id": 40303, "name": "Salamanca"}, {"id": 40304, "name": "Los Vilos"}]
    },
    {
    "id": 5, "name": "Región de Valparaíso",
    "comunas": [{"id": 50101, "name": "Petorca"}, {"id": 50102, "name": "Cabildo"}, {"id": 50103, "name": "Papudo"}, {"id": 50104, "name": "La Ligua"}, {"id": 50105, "name": "Zapallar"}, {"id": 50201, "name": "Putaendo"}, {"id": 50202, "name": "Santa Maria"}, {"id": 50203, "name": "San Felipe"}, {"id": 50204, "name": "Pencahue"}, {"id": 50205, "name": "Catemu"}, {"id": 50206, "name": "Llay Llay"}, {"id": 50301, "name": "Nogales"}, {"id": 50302, "name": "La Calera"}, {"id": 50303, "name": "Hijuelas"}, {"id": 50304, "name": "La Cruz"}, {"id": 50305, "name": "Quillota"}, {"id": 50306, "name": "Olmue"}, {"id": 50307, "name": "Limache"}, {"id": 50401, "name": "Los Andes"}, {"id": 50402, "name": "Rinconada"}, {"id": 50403, "name": "Calle Larga"}, {"id": 50404, "name": "San Esteban"}, {"id": 50501, "name": "Puchuncavi"}, {"id": 50502, "name": "Quintero"}, {"id": 50503, "name": "Viña del Mar"}, {"id": 50504, "name": "Villa Alemana"}, {"id": 50505, "name": "Quilpue"}, {"id": 50506, "name": "Valparaiso"}, {"id": 50507, "name": "Juan Fernandez"}, {"id": 50508, "name": "Casablanca"}, {"id": 50509, "name": "Concon"}, {"id": 50601, "name": "Isla de Pascua"}, {"id": 50701, "name": "Algarrobo"}, {"id": 50702, "name": "El Quisco"}, {"id": 50703, "name": "El Tabo"}, {"id": 50704, "name": "Cartagena"}, {"id": 50705, "name": "San Antonio"}, {"id": 50706, "name": "Santo Domingo"}]
    },
    {
    "id": 6, "name": "Región del Libertador Bernardo Ohiggins",
    "comunas": [{"id": 60101, "name": "Mostazal"}, {"id": 60102, "name": "Codegua"}, {"id": 60103, "name": "Graneros"}, {"id": 60104, "name": "Machali"}, {"id": 60105, "name": "Rancagua"}, {"id": 60106, "name": "Olivar"}, {"id": 60107, "name": "Doñihue"}, {"id": 60108, "name": "Requinoa"}, {"id": 60109, "name": "Coinco"}, {"id": 60110, "name": "Coltauco"}, {"id": 60111, "name": "Quinta Tilcoco"}, {"id": 60112, "name": "Las Cabras"}, {"id": 60113, "name": "Rengo"}, {"id": 60114, "name": "Peumo"}, {"id": 60115, "name": "Pichidegua"}, {"id": 60116, "name": "Malloa"}, {"id": 60117, "name": "San Vicente"}, {"id": 60201, "name": "Navidad"}, {"id": 60202, "name": "La Estrella"}, {"id": 60203, "name": "Marchigue"}, {"id": 60204, "name": "Pichilemu"}, {"id": 60205, "name": "Litueche"}, {"id": 60206, "name": "Paredones"}, {"id": 60301, "name": "San Fernando"}, {"id": 60302, "name": "Peralillo"}, {"id": 60303, "name": "Placilla"}, {"id": 60304, "name": "Chimbarongo"}, {"id": 60305, "name": "Palmilla"}, {"id": 60306, "name": "Nancagua"}, {"id": 60307, "name": "Santa Cruz"}, {"id": 60308, "name": "Pumanque"}, {"id": 60309, "name": "Chepica"}, {"id": 60310, "name": "Lolol"}]
    },
    {
    "id": 7, "name": "Región del Maule",
    "comunas": [{"id": 70101, "name": "Teno"}, {"id": 70102, "name": "Romeral"}, {"id": 70103, "name": "Rauco"}, {"id": 70104, "name": "Curico"}, {"id": 70105, "name": "Sagrada Familia"}, {"id": 70106, "name": "Hualañe"}, {"id": 70107, "name": "Vichuquen"}, {"id": 70108, "name": "Molina"}, {"id": 70109, "name": "Licanten"}, {"id": 70201, "name": "Rio Claro"}, {"id": 70202, "name": "Curepto"}, {"id": 70203, "name": "Pelarco"}, {"id": 70204, "name": "Talca"}, {"id": 70205, "name": "Pencahue"}, {"id": 70206, "name": "San Clemente"}, {"id": 70207, "name": "Constitucion"}, {"id": 70208, "name": "Maule"}, {"id": 70209, "name": "Empedrado"}, {"id": 70210, "name": "San Rafael"}, {"id": 70301, "name": "San Javier"}, {"id": 70302, "name": "Colbun"}, {"id": 70303, "name": "Villa Alegre"}, {"id": 70304, "name": "Yerbas Buenas"}, {"id": 70305, "name": "Linares"}, {"id": 70306, "name": "Longavi"}, {"id": 70307, "name": "Retiro"}, {"id": 70308, "name": "Parral"}, {"id": 70401, "name": "Chanco"}, {"id": 70402, "name": "Pelluhue"}, {"id": 70403, "name": "Cauquenes"}]
    },
    {
    "id": 8, "name": "Región del Biobío",
    "comunas": [{"id": 80201, "name": "Tome"}, {"id": 80202, "name": "Florida"}, {"id": 80203, "name": "Penco"}, {"id": 80204, "name": "Talcahuano"}, {"id": 80205, "name": "Concepcion"}, {"id": 80206, "name": "Hualqui"}, {"id": 80207, "name": "Coronel"}, {"id": 80208, "name": "Lota"}, {"id": 80209, "name": "Santa Juana"}, {"id": 80210, "name": "Chiguayante"}, {"id": 80211, "name": "San Pedro de la Paz"}, {"id": 80212, "name": "Hualpen"}, {"id": 80301, "name": "Cabrero"}, {"id": 80302, "name": "Yumbel"}, {"id": 80303, "name": "Tucapel"}, {"id": 80304, "name": "Antuco"}, {"id": 80305, "name": "San Rosendo"}, {"id": 80306, "name": "Laja"}, {"id": 80307, "name": "Quilleco"}, {"id": 80308, "name": "Los Angeles"}, {"id": 80309, "name": "Nacimiento"}, {"id": 80310, "name": "Negrete"}, {"id": 80311, "name": "Santa Barbara"}, {"id": 80312, "name": "Quilaco"}, {"id": 80313, "name": "Mulchen"}, {"id": 80314, "name": "Alto Bio Bio"}, {"id": 80401, "name": "Arauco"}, {"id": 80402, "name": "Curanilahue"}, {"id": 80403, "name": "Los Alamos"}, {"id": 80404, "name": "Lebu"}, {"id": 80405, "name": "Cañete"}, {"id": 80406, "name": "Contulmo"}, {"id": 80407, "name": "Tirua"}]
    },
    {
    "id": 9, "name": "Región de La Araucanía",
    "comunas": [{"id": 90101, "name": "Renaico"}, {"id": 90102, "name": "Angol"}, {"id": 90103, "name": "Collipulli"}, {"id": 90104, "name": "Los Sauces"}, {"id": 90105, "name": "Puren"}, {"id": 90106, "name": "Ercilla"}, {"id": 90107, "name": "Lumaco"}, {"id": 90108, "name": "Victoria"}, {"id": 90109, "name": "Traiguen"}, {"id": 90110, "name": "Curacautin"}, {"id": 90111, "name": "Lonquimay"}, {"id": 90201, "name": "Perquenco"}, {"id": 90202, "name": "Galvarino"}, {"id": 90203, "name": "Lautaro"}, {"id": 90204, "name": "Vilcun"}, {"id": 90205, "name": "Temuco"}, {"id": 90206, "name": "Carahue"}, {"id": 90207, "name": "Melipeuco"}, {"id": 90208, "name": "Nueva Imperial"}, {"id": 90209, "name": "Puerto Saavedra"}, {"id": 90210, "name": "Cunco"}, {"id": 90211, "name": "Freire"}, {"id": 90212, "name": "Pitrufquen"}, {"id": 90213, "name": "Teodoro Schmidt"}, {"id": 90214, "name": "Gorbea"}, {"id": 90215, "name": "Pucon"}, {"id": 90216, "name": "Villarrica"}, {"id": 90217, "name": "Tolten"}, {"id": 90218, "name": "Curarrehue"}, {"id": 90219, "name": "Loncoche"}, {"id": 90220, "name": "Padre Las Casas"}, {"id": 90221, "name": "Cholchol"}]
    },
    {
    "id": 10, "name": "Región de Los Lagos",
    "comunas": [{"id": 100201, "name": "San Pablo"}, {"id": 100202, "name": "San Juan"}, {"id": 100203, "name": "Osorno"}, {"id": 100204, "name": "Puyehue"}, {"id": 100205, "name": "Rio Negro"}, {"id": 100206, "name": "Purranque"}, {"id": 100207, "name": "Puerto Octay"}, {"id": 100301, "name": "Frutillar"}, {"id": 100302, "name": "Fresia"}, {"id": 100303, "name": "Llanquihue"}, {"id": 100304, "name": "Puerto Varas"}, {"id": 100305, "name": "Los Muermos"}, {"id": 100306, "name": "Puerto Montt"}, {"id": 100307, "name": "Maullin"}, {"id": 100308, "name": "Calbuco"}, {"id": 100309, "name": "Cochamo"}, {"id": 100401, "name": "Ancud"}, {"id": 100402, "name": "Quemchi"}, {"id": 100403, "name": "Dalcahue"}, {"id": 100404, "name": "Curaco de Velez"}, {"id": 100405, "name": "Castro"}, {"id": 100406, "name": "Chonchi"}, {"id": 100407, "name": "Queilen"}, {"id": 100408, "name": "Quellon"}, {"id": 100409, "name": "Quinchao"}, {"id": 100410, "name": "Puqueldon"}, {"id": 100501, "name": "Chaiten"}, {"id": 100502, "name": "Futaleufu"}, {"id": 100503, "name": "Palena"}, {"id": 100504, "name": "Hualaihue"}]
    },
    {
    "id": 11, "name": "Región Aisén del General Carlos Ibáñez del Campo",
    "comunas": [{"id": 110101, "name": "Guaitecas"}, {"id": 110102, "name": "Cisnes"}, {"id": 110103, "name": "Aysen"}, {"id": 110201, "name": "Coyhaique"}, {"id": 110202, "name": "Lago Verde"}, {"id": 110301, "name": "Rio Ibañez"}, {"id": 110302, "name": "Chile Chico"}, {"id": 110401, "name": "Cochrane"}, {"id": 110402, "name": "Tortel"}, {"id": 110403, "name": "O'Higins"}]
    },
    {
    "id": 12, "name": "Región de Magallanes y la Antártica Chilena",
    "comunas": [{"id": 120101, "name": "Torres del Paine"}, {"id": 120102, "name": "Puerto Natales"}, {"id": 120201, "name": "Laguna Blanca"}, {"id": 120202, "name": "San Gregorio"}, {"id": 120203, "name": "Rio Verde"}, {"id": 120204, "name": "Punta Arenas"}, {"id": 120301, "name": "Porvenir"}, {"id": 120302, "name": "Primavera"}, {"id": 120303, "name": "Timaukel"}, {"id": 120401, "name": "Antartica"}]
    },
    {
    "id": 13, "name": "Región Metropolitana de Santiago ",
    "comunas": [{"id": 130101, "name": "Tiltil"}, {"id": 130102, "name": "Colina"}, {"id": 130103, "name": "Lampa"}, {"id": 130201, "name": "Conchali"}, {"id": 130202, "name": "Quilicura"}, {"id": 130203, "name": "Renca"}, {"id": 130204, "name": "Las Condes"}, {"id": 130205, "name": "Pudahuel"}, {"id": 130206, "name": "Quinta Normal"}, {"id": 130207, "name": "Providencia"}, {"id": 130208, "name": "Santiago"}, {"id": 130209, "name": "La Reina"}, {"id": 130210, "name": "Ñuñoa"}, {"id": 130211, "name": "San Miguel"}, {"id": 130212, "name": "Maipu"}, {"id": 130213, "name": "La Cisterna"}, {"id": 130214, "name": "La Florida"}, {"id": 130215, "name": "La Granja"}, {"id": 130216, "name": "Independencia"}, {"id": 130217, "name": "Huechuraba"}, {"id": 130218, "name": "Recoleta"}, {"id": 130219, "name": "Vitacura"}, {"id": 130220, "name": "Lo Barrenechea"}, {"id": 130221, "name": "Macul"}, {"id": 130222, "name": "Peñalolen"}, {"id": 130223, "name": "San Joaquin"}, {"id": 130224, "name": "La Pintana"}, {"id": 130225, "name": "San Ramon"}, {"id": 130226, "name": "El Bosque"}, {"id": 130227, "name": "Pedro Aguirre Cerda"}, {"id": 130228, "name": "Lo Espejo"}, {"id": 130229, "name": "Estacion Central"}, {"id": 130230, "name": "Cerrillos"}, {"id": 130231, "name": "Lo Prado"}, {"id": 130232, "name": "Cerro Navia"}, {"id": 130301, "name": "San Jose de Maipo"}, {"id": 130302, "name": "Puente Alto"}, {"id": 130303, "name": "Pirque"}, {"id": 130401, "name": "San Bernardo"}, {"id": 130402, "name": "Calera de Tango"}, {"id": 130403, "name": "Buin"}, {"id": 130404, "name": "Paine"}, {"id": 130501, "name": "Peñaflor"}, {"id": 130502, "name": "Talagante"}, {"id": 130503, "name": "El Monte"}, {"id": 130504, "name": "Isla de Maipo"}, {"id": 130601, "name": "Curacavi"}, {"id": 130602, "name": "Maria Pinto"}, {"id": 130603, "name": "Melipilla"}, {"id": 130604, "name": "San Pedro"}, {"id": 130605, "name": "Alhue"}, {"id": 130606, "name": "Padre Hurtado"}]
    },
    {
    "id": 14, "name": "Región de Los Ríos",
    "comunas": [{"id": 100101, "name": "Lanco"}, {"id": 100102, "name": "Mariquina"}, {"id": 100103, "name": "Panguipulli"}, {"id": 100104, "name": "Mafil"}, {"id": 100105, "name": "Valdivia"}, {"id": 100106, "name": "Los Lagos"}, {"id": 100107, "name": "Corral"}, {"id": 100108, "name": "Paillaco"}, {"id": 100109, "name": "Futrono"}, {"id": 100110, "name": "Lago Ranco"}, {"id": 100111, "name": "La Union"}, {"id": 100112, "name": "Rio Bueno"}]
    },
    {
    "id": 15, "name": "Región Arica y Parinacota",
    "comunas": [{"id": 10101, "name": "Gral. Lagos"}, {"id": 10102, "name": "Putre"}, {"id": 10201, "name": "Arica"}, {"id": 10202, "name": "Camarones"}]
    },
    {
    "id": 16, "name": "Región del Ñuble",
    "comunas": [{"id": 80101, "name": "Cobquecura"}, {"id": 80102, "name": "Ñiquen"}, {"id": 80103, "name": "San Fabian"}, {"id": 80104, "name": "San Carlos"}, {"id": 80105, "name": "Quirihue"}, {"id": 80106, "name": "Ninhue"}, {"id": 80107, "name": "Trehuaco"}, {"id": 80108, "name": "San Nicolas"}, {"id": 80109, "name": "Coihueco"}, {"id": 80110, "name": "Chillan"}, {"id": 80111, "name": "Portezuelo"}, {"id": 80112, "name": "Pinto"}, {"id": 80113, "name": "Coelemu"}, {"id": 80114, "name": "Bulnes"}, {"id": 80115, "name": "San Ignacio"}, {"id": 80116, "name": "Ranquil"}, {"id": 80117, "name": "Quillon"}, {"id": 80118, "name": "El Carmen"}, {"id": 80119, "name": "Pemuco"}, {"id": 80120, "name": "Yungay"}, {"id": 80121, "name": "Chillan Viejo"}]
    }
  ]
}

const devices = ["Pantalla",
  "Notebook", "Tablet", "Celular",
  "Consola", "Mouse", "Teclado",
  "Impresora", "Parlante",
  "Audifonos", "Otro"]


const region_select = () => {
  let regionSelect = document.getElementById("select-region");
  const regions = data.regions;
  for (const region of regions) {
    let option = document.createElement("option");
    option.value = region.id;
    option.text = region.name;
    regionSelect.appendChild(option);
  }
};

const updateComunas = () => {
  let regionSelect = document.getElementById("select-region");
  let comunaSelect = document.getElementById("select-comuna");
  
  let selectedRegionId = parseInt(regionSelect.value);
  
  comunaSelect.innerHTML = "";
  
  const selectedRegion = data.regions.find(region => region.id === selectedRegionId);
  
  if (selectedRegion) {
    selectedRegion.comunas.forEach(comuna => {
      let option = document.createElement("option");
      option.value = comuna.id;
      option.text = comuna.name;
      comunaSelect.appendChild(option);
    });
  }
};

const device_select = () => {
  let deviceSelect = document.getElementById("select-device");
  for (const device of devices) {
    let option = document.createElement("option");
    option.value = device;
    option.text = device;
    deviceSelect.appendChild(option);
  }
} 
  
document.getElementById("select-region").addEventListener("change", updateComunas);

window.onload = () => {
  region_select();
  device_select();
};
  
//Mostrando /.