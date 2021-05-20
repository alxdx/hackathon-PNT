from flask import Flask, render_template, url_for, Response, request 
from flask_cors import CORS

from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
import re
import nltk

nltk.download('punkt')
nltk.download('stopwords')

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return render_template('landing.html')

@app.route('/json')
def send():
    return "<a href=%s>file</a>" % url_for('static', filename='sujetos_por_estado.json')

@app.route('/nlp-module')
def clean_cadena():
	string = request.args.get('cadena').lower()

	string=re.sub(r'[^\w\s]+',' ',string) #elimina simbolos
	string=re.sub(r"^\d+\s|\s\d+\s|\s\d+$",' ',string) ##elimina numeros solos

	tokenizada = word_tokenize(string)
	stop_words=set(stopwords.words('spanish'))
	palabras = ""
	for w in tokenizada:
		if w not in stop_words:
			palabras += (" "+w)

	return {"data":palabras},200


if __name__ == "__main__":
	app.run(debug=True)
