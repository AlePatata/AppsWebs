from flask import Flask, render_template, request

app = Flask(__name__)

regions = [
    {"id":1, "name" : "Arica y Parinacota"},
    {"id":2, "name" : "Tarapacá"},
    {"id":3, "name" : "Antofagasta"},
    {"id":4, "name" : "Atacama"},
    {"id":5, "name" : "Coquimbo"},
    {"id":6, "name" : "Valparaíso"},
    {"id":7, "name" : "Metropolitana"},
    {"id":8, "name" : "O'Higgins"},
    {"id":9, "name" : "Maule"},
    {"id":10, "name" : "Ñuble"},
    {"id":11, "name" : "Biobío"},
    {"id":12, "name" : "Araucanía"},
    {"id":13, "name" : "Los Ríos"},
    {"id":14, "name" : "Los Lagos"},
    {"id":15, "name" : "Aysén"},
    {"id":16, "name" : "Magallanes"}
]

@app.route('templates\index.html')
def index():
    return render_template('index.html', regions=regions)

@app.route('templates\index.html') 
def index(): 
    return "Homepage of GeeksForGeeks"
 

'''
@app.route('/agregar-donacion', methods=['GET'])
def show_form():
    print(regions)
    return render_template('agregar-donacion.html', region=region)


@app.route('/agregar-donacion', methods=['POST'])
def process_selection():
    region_id = int(request.form['region']) 
    region = next(region for region in regions if region['id'] == region_id)
    return render_template('agregar-donacion.html', region=region)
'''

if __name__ == '__main__':
    app.run(debug=True)