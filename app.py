import validation as v
from flask import Flask, request, render_template, make_response
import pymysql
from models import Comentario
from datetime import datetime

app = Flask(__name__)

# Conección a base de datos
def getConnection():
    conn = pymysql.connect(
    db='tarea2',
    user='cc5002',
    passwd='cc5002',
    host='localhost',
    charset='utf8')
    print("Conexión exitosa")
    return conn


@app.route('/')
def menu():
    return render_template('index.html')

@app.route('/agregar-donacion', methods=['POST', 'GET'])
def agregar_donacion():
    error = None
    c = getConnection()

    if request.method == 'POST':
        print(request.form)
        print(request.files)
        nombre = request.form['nombre']
        email = request.form['email']
        celular = request.form['celular']
        region = request.form['select-region']
        comuna = request.form['select-comuna']

        dnombre = request.form['dnombre[]']
        description = request.form['description[]']
        tipo = request.form['select-device[]']
        years_of_use = request.form['years_of_use[]']
        estado = request.form['select-state[]']
        files = request.files['files[]']
        
        if nombre and email and celular and region and comuna and dnombre and files and tipo and years_of_use:
            print("Se llamó a donatioASDFGHJKn...\n")
            print(add_donation(c,nombre, email, region, comuna, dnombre, files, tipo, years_of_use, estado, celular, description))
        else:
            error = "asdfgh"
        return make_response("si",200)
    #return make_response("si",200)
    if request.method == 'GET':
        return render_template('agregar-donacion.html', error=error)     # Recarga la pagina

def add_donation(c,nombre, email, region, comuna, dnombre, files, tipo, years_of_use, estado, celular="", description=""):
    print("Se llamó a add_donation")
    print(not (nombre or email or region or comuna or dnombre or files or tipo or years_of_use))
    print(nombre, email, region, comuna, dnombre, files, tipo, years_of_use, estado, celular, description)
    if not (nombre or email or region or comuna or dnombre or files or tipo or years_of_use):
        return False
    if not v.validate_nombre(nombre):
        return False
    if not v.validate_email(email):
        return False
    if not v.validate_celular_number(celular):
        return False
    if not v.validate_device_nombre(dnombre):
        return False
    #if not v.validate_files(files):
    #    return False
    if not v.validate_years_of_use(years_of_use):
        return False
    print("Se validaron los datos")
    region_id = c.cursor().execute("SELECT id FROM region WHERE nombre = %s", (region))
    comuna_id = c.cursor().execute("SELECT id FROM comuna WHERE nombre = %s", (comuna))
    sql1 = "INSERT INTO contacto (nombre, email, celular, comuna_id, fecha_creacion) VALUES (%s, %s, %s, %s, %s)"
    try:
        fecha_creacion = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        resultado1 = c.cursor().execute(sql1, (nombre, email, celular, comuna_id, fecha_creacion))
        c.commit()
        sql2 = "INSERT INTO dispositivo (contacto_id, nombre, descripcion, tipo, anos_uso, estado) VALUES (%s, %s, %s, %s, %s, %s)"
        try:
            contacto_id = c.cursor().lastrowid
            resultado2 = c.cursor().execute(sql2, (contacto_id, dnombre, description, tipo, years_of_use, estado))
            c.commit()
        except pymysql.Error as e:
            app.logger.error("Error con la base de datos: {0} {1}".format(e.args[0], e.args[1]))
            c.rollback()
            return resultado1 == 1 and resultado2 == 1
    except pymysql.Error as e:
        app.logger.error("Error con la base de datos: {0} {1}".format(e.args[0], e.args[1]))
        c.rollback()
    return False


@app.route('/ver-dispositivos', methods=['POST', 'GET'])
def ver_dispositivos():
    return render_template('ver-dispositivos.html')

@app.route('/informacion-dispositivo/<id>', methods=['POST', 'GET'])
def informacion_dispositivo(id):
    error = None
    comments = None 
    mensaje = None
    c = getConnection()
    if request.method == 'POST':
        current_date = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

        if (add_comment(c, request.form['nombre'], request.form['texto'], current_date, id )):
            mensaje = "Se agrega el comentario " + request.form['texto']
        else:
            error = 'No se pudo agregar el comentario'
    comments = get_comments(c)
    return render_template('informacion-dispositivo.html', mensaje=mensaje, error=error, comments=comments)

def add_comment(c, nombre, texto, fecha, dispositivo_id):
    if not (nombre or texto or fecha or dispositivo_id):
        return False
    if not v.validate_nombre(nombre):
        return False
    if not v.validate_comment(texto):
        return False

    sql = "INSERT INTO comentario (nombre, texto, fecha, dispositivo_id) VALUES (%s, %s, %s, %s)"
    try:
        resultado = c.cursor().execute(sql, (nombre, texto, fecha, dispositivo_id))
        c.commit()
        return cursor.lastrowid
    except pymysql.Error as e:
        app.longer.error("Error con la base de datos: {0} {1}".format(e.args[0], e.args[1]))
        c.rollback()
    return False

def get_comments(c):
    sql = "SELECT id, nombre, texto, fecha, dispositivo_id FROM comentario"
    cursor = c.cursor()
    cursor.execute(sql)
    c.commit()
    comments = cursor.fetchall()
    commentList = []
    if len(comments) > 0:   
        for comment in comments:
            console.log(comment)
            commentList.append(Comentario(comment[0], comment[1], comment[2], comment[3], comment[4]))
        
if __name__ == '__main__':
    app.run(debug=True)