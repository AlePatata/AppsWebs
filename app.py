import validation as v
from flask import Flask, request, render_template
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
    return conn



@app.route('/')
def menu():
    return render_template('index.html')

@app.route('/agregar-donacion', methods=['POST', 'GET'])
def agregar_donacion():
    error = None
    c = getConnection()
    if request.method == 'POST':
        nombre = request.form['nombre']
        email = request.form['email']
        phone = request.form['phone']
        region = request.form['region']
        comuna = request.form['comuna']
        dnombre = request.form['dnombre']
        description = request.form['description']
        files = request.files['files']
        device = request.form['device']
        years_of_use = request.form['years_of_use']

        if nombre and email and phone and region and comuna and dnombre and description and files and device and years_of_use:
            add_donation(c,nombre, email, phone, tipo, brand, model, condition)
        else:
            error = "asdfgh"
    return render_template('agregar-donacion.html', error=error)



def add_donation(c,nombre, email, phone, region, comuna, tipo):
    if not (nombre or email or region or comuna or dnombre or files or device or years_of_use):
        return False

    if not v.validate_nombre(nombre):
        return False
    if not v.validate_email(email):
        return False
    if not v.validate_phone_number(phone):
        return False
    if not v.validate_device_nombre(dnombre):
        return False
    if not v.validate_files(files):
        return False
    if not v.validate_years_of_use(years_of_use):
        return False

    sql1 = "INSERT INTO contacto (nombre, email, phone, region, comuna) VALUES (%s, %s, %s, %s, %s)"
    sql2 = "INSERT INTO donacion (dnombre, description, files, device, years_of_use) VALUES (%s, %s, %s, %s, %s)"
    try:
        resultado1 = c.cursor().execute(sql1, (nombre, email, phone, region, comuna))
        resultado2 = c.cursor().execute(sql2, (dnombre, description, files, device, years_of_use))
        c.commit()
        return resultado1 == 1 and resultado2 == 1
    except pymysql.Error as e:
        app.longer.error("Error con la base de datos: {0} {1}".format(e.argas[0], e.args[1]))
        c.rollback()
    return False





@app.route('/ver-dispositivos')
def ver_dispositivos():
    return render_template('ver-dispositivos.html')

@app.route('/informacion-dispositivo', methods=['POST', 'GET'])
def informacion_dispositivo():
    error = None
    comments = None 
    mensaje = None
    c = getConnection()
    if request.method == 'POST':
        current_date = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

        if (add_comment(c, request.form['nombre'], request.form['texto'], current_date, request.form['dispositivo_id'], )):
            mensaje = "Se agrega el comentario " + request.form['texto']
        else:
            error = 'No se pudo agregar el comentario'
    comments = get_comments(c)
    return render_template('informacion-dispositivo.html', mensaje=mensaje, error=error, comments=comments)

@app.route('/informacion-dispositivo/<int:id>', methods=['POST', 'GET'])
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
        return resultado == 1
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
            commentList.append(Comentario(comment[0], comment[1], comment[2], comment[3]))
        


'''
@app.route('/post/<int:post_id>')
def show_post(post_id):
    return f'Post {post_id}'

@app.route('/path/<path:subpath>')
def show_subpath(sub_path):
    return f'Path {escape(sub_path)}'
'''

if __name__ == '__main__':
    app.run(debug=True)