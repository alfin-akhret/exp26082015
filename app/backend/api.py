#!/usr/bin/python3.4

from flask import Flask
from flask import send_from_directory
from flask_restful import Resource, Api
from flask import request
from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_v1_5
from Crypto.Util import asn1
from Crypto.Util.asn1 import DerSequence
from base64 import *
from binascii import a2b_base64
import os

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

class TestEnc(Resource):
	def get(self):
		chiper = request.args.get('chiper')
		chiper = self.decode_base64(chiper)
		# Convert from PEM to DER
		pem = open("priv.pem", "rb").read()
		lines = pem.replace(' ','').split()
		der = a2b_base64(''.join(lines[1:-1]))
		keyDER = self.decode_base64(der)

		#self.decrypt(key, chiper)
		return {'h':'w'}

	def decode_base64(self, data):
	  #fix missing padding
	  missing_padding = 4 - len(data) % 4
	  if missing_padding:
	  	bytesThing = b'=' * missing_padding
	  	#nStr = bytesThing.decode(encoding='UTF-8')
	  	bytesThing = bytesThing.decode("utf-8")
	  	data += bytesThing
	  return b64decode(data)

	'''
	def decrypt(self, key, text):
		if type(key) == str:
			key = key.encode()
		if type(text) == str:
			text = text.encode()
		#key = self.decode_base64(str(key))
		rsakey = RSA.importKey(key)
		rsakey = PKCS1_v1_5.new(rsakey)
		d = rsakey.decrypt(text)
		return d
  '''

api.add_resource(TestEnc, '/test-enc')

if __name__ == '__main__':
	app.run(debug=True)