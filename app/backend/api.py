#!/usr/bin/python3.4

from flask import Flask
from flask import send_from_directory
from flask_restful import Resource, Api

app = Flask(__name__, static_folder="../frontend")
api = Api(app)

@app.route('/')
def index():
	return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
	app.run(debug=True)