import json
from flask import Flask, render_template

app = Flask(__name__)

def load_data(path):
    with open(path) as file:
        data = json.load(file)
    return data

data = load_data('region_comuna.json')
regions = data['regions']
comunas = []
for region in regions:
    for c in region['comunas']:
        comunas += [{ "id" : c['id'], "name" : c['name']}]



@app.route('/templates/') 
def show_user_profile():
    return "Homepage"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/agregar-donacion')
def agregar_donacion():
    return render_template('agregar-donacion.html',regions=regions, comunas=comunas)


@app.route('/comunas/<int:region_id>')
def comunas(region_id):
    region = next((region for region in regions if region['id'] == region_id), None)
    if region:
        return jsonify(region['comunas'])
    return jsonify([])


@app.route('/ver-dispositivos')
def ver_dispositivos():
    return render_template('ver-dispositivos.html')

'''
def hello():
    name = request.args.get("name", "World")
    return f'Hello, {escape(name)}!'


@app.route('/post/<int:post_id>')
def show_post(post_id):
    return f'Post {post_id}'

@app.route('/path/<path:subpath>')
def show_subpath(sub_path):
    return f'Path {escape(sub_path)}'
'''
if __name__ == '__main__':
    app.run(debug=True)