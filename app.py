from utils.validation import validation
from utils.validateComment import validate_comment
from flask import Flask, request, render_template, make_response, redirect, url_for
from datetime import datetime
import database.db as db
import hashlib
import filetype
from werkzeug.utils import secure_filename
import uuid
import os

app = Flask(__name__)
UPLOAD_FOLDER = 'static/uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024

@app.route('/')
def menu():
    return render_template('index.html')

@app.route('/agregar-donacion', methods=['POST', 'GET'])
def agregar_donacion():
    error = None
    regiones = db.get_regiones()
    comunas = db.get_comunas()
    if request.method == 'POST':
        nombre = request.form['nombre']
        email = request.form['email']
        celular = request.form['celular']
        region = request.form['region']
        comuna = request.form['comuna']

        nombres_dispositivos = request.form.getlist('dnombre[]')
        descripciones = request.form.getlist('description[]')
        tipos_dispositivos = request.form.getlist('tipo[]')
        anos_uso = request.form.getlist('anos_uso[]')
        estados_dispositivos = request.form.getlist('estado[]')
        archivos = []  
        for i in range(len(nombres_dispositivos)):
            print(request.files.getlist('files[]'))
            archivos.append(request.files.getlist(f'files_{i}[]'))
        
        if validation(nombre, email, celular, region, comuna, nombres_dispositivos, descripciones, tipos_dispositivos, anos_uso, estados_dispositivos, archivos):
            db.insert_contacto(nombre, email, celular, comuna)
            contacto_id = db.get_contacto_id(nombre)
            
            
            for i in range(len(nombres_dispositivos)):
                db.insert_dispositivo(contacto_id, nombres_dispositivos[i], descripciones[i], tipos_dispositivos[i], anos_uso[i], estados_dispositivos[i])
                dispositivo_id = db.get_last_dispositivo_id()
                
                for j in range(len(archivos[i])):
                    file = archivos[i][j]
                    agregar_file(file, dispositivo_id)
        else:
            error = 'Error en los datos ingresados'
        return redirect(url_for('menu'))   
        
    elif request.method == 'GET':
        return render_template('agregar-donacion.html', error=error, regiones=regiones, comunas=comunas)     # Recarga la pagina   

def agregar_file(file, dispositivo_id):
    _filename_hash = hashlib.sha256(
            secure_filename(file.filename).encode("utf-8")
            ).hexdigest()
    _extension = filetype.guess(file).extension
    img_filename = f"{_filename_hash}_{str(uuid.uuid4())}.{_extension}"
    
    file.save(os.path.join(app.config["UPLOAD_FOLDER"], img_filename))
    filepath = "static/uploads"
    db.insert_archivo(filepath, img_filename, dispositivo_id)


@app.route('/ver-dispositivos', methods=['GET', 'POST'])
def ver_dispositivos():
    if(request.method == 'GET'):
        
        
        dispositivos = db.get_dispositivos()
        
        clean_dispositivos = []
        for i in range(len(dispositivos)):
            dispositivo = []
            dispositivo.append(dispositivos[i][4]) # Tipo
            dispositivo.append(dispositivos[i][2]) # Nombre
            dispositivo.append(dispositivos[i][6]) # Estado
            
            contactos_id = (dispositivos[i][1])
            comuna = db.get_comuna_by_contacto(contactos_id)
            dispositivo.append(comuna[0]) # Comuna
            dispositivo.append(dispositivos[i][0]) # ID
            archivos = db.get_archivos(dispositivos[i][0])
            print(archivos[1])
            dispositivo.append({
                "path_image": url_for('static', filename='/uploads/'+archivos[1]),
            })
            
            clean_dispositivos.append(dispositivo)
        
        return render_template('ver-dispositivos.html', dispositivos=clean_dispositivos)  
    return render_template('ver-dispositivos.html')

@app.route('/informacion-dispositivo/<int:dispositivo_id>', methods=['POST', 'GET'])
def informacion_dispositivo(dispositivo_id):
    # Retrieve device information
    dispositivo = []
    comentarios = db.get_comentarios(dispositivo_id)  # Always fetch comments at the start

    if request.method == 'POST':
        nombre = request.form.get('nombre')
        texto = request.form.get('texto')

        if validate_comment(nombre, texto):
            db.insert_comentario(nombre, texto, dispositivo_id)
            comentarios = db.get_comentarios(dispositivo_id)
        else:
            error = 'No se pudo agregar el comentario'

    # Fetch device details
    tipo = db.get_tipo(dispositivo_id)
    nombre_dispositivo = db.get_nombre_dispositivo(dispositivo_id)
    estado = db.get_estado(dispositivo_id)
    comuna = db.get_comuna_dispositivo(dispositivo_id)
    imagen = db.get_archivos(dispositivo_id)
    imagen = url_for('static', filename='/uploads/'+imagen[1])
    dispositivo = [tipo, nombre_dispositivo, estado, comuna, imagen]
    print(imagen)
    

    return render_template('informacion-dispositivo.html', dispositivo_id=dispositivo_id, comentarios=comentarios, dispositivo=dispositivo)
        
if __name__ == '__main__':
    app.run(debug=True)