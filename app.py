from flask import Flask,render_template,redirect
app = Flask(__name__)

@app.route('/')
def hello():
    return render_template('landing_page.html')


@app.route('/index')
def method_name():
   return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)