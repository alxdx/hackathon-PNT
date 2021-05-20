from flask import Flask, render_template, url_for
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
@app.route('/')
def home():
    return render_template('landing.html')

@app.route('/json')
def send():
    return "<a href=%s>file</a>" % url_for('static', filename='sujetos_por_estado.json')

if __name__ == "__main__":
	app.run(debug=True)
