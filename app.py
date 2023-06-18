from flask import Flask, render_template, request
import os

app = Flask(__name__, template_folder=os.path.dirname(os.path.abspath(__file__)))

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/open_card', methods=['POST'])
def open_card():
    # Aquí puedes agregar la lógica para la animación de apertura de la carta y mostrar la imagen de la carta.
    # Puedes usar una biblioteca como CSS o JavaScript para la animación.

    # Por simplicidad, aquí solo se devuelve un mensaje de éxito.
    return '¡La carta se ha abierto!'

if __name__ == '__main__':
    app.run()