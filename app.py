from flask import Flask, render_template, url_for
app=Flask(__name__)

@app.route('/')
def home():
    return render_template('landing.html')

@app.route('/json')
def send():
    return "<a href=%s>file</a>" % url_for('static', filename='sujetos_por_estado.json')

if __name__ == "__main__":
	app.run(debug=True)