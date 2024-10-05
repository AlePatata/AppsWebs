class Region:
    def __init__(self, id, nombre):
        self.id = id
        self.nombre = nombre

class Comuna:
    def __init__(self, id, nombre, region_id):
        self.id = id
        self.nombre = nombre
        self.region_id = region_id  # id_region es una clave foránea

class Contacto:
    def __init__(self, id, nombre, email, calular, comuna_id, fecha_creacion):
        self.id = id
        self.nombre = nombre
        self.email = email
        self.calular = calular
        self.comuna_id = comuna_id
        self.fecha_creacion = fecha_creacion

class Dispositivo:
    def __init__(self, id, contacto_id, nombre, descripcion, tipo, anos_uso, estado):
        self.id = id
        self.contacto_id = contacto_id
        self.nombre = nombre
        self.descripcion = descripcion
        self.tipo = tipo
        self.anos_uso = anos_uso
        self.estado = estado

class Archivo:
    def __init__(self, id, ruta, nombre_archivo, dispositivo_id):
        self.id = id
        self.ruta = ruta
        self.nombre_archivo = nombre_archivo
        self.dispositivo_id = dispositivo_id  # id_dispositivo es una clave foránea

class Comentario:
    def __init__(self, id, nombre, texto, fecha, dispositivo_id):
        self.id = id
        self.nombre = nombre
        self.texto = texto
        self.fecha = fecha
        self.dispositivo_id = dispositivo_id  # id_dispositivo es una clave foránea
