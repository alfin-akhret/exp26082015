#!/usr/bin/python3.4

from flask import Flask
from flask import send_from_directory
from flask_restful import Resource, Api

app = Flask(__name__, static_folder="../frontend")
api = Api(app)

'''
the root 
the only endpoint who serve the view
the rest use pure angularJS
'''
@app.route('/')
def index():
	return send_from_directory(app.static_folder, 'index.html')

@app.route('/admin')
def admin():
	return send_from_directory(app.static_folder, 'pages/admin.html');

if __name__ == '__main__':
	app.run(debug=True)