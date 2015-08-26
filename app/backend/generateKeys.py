#!/usr/bin/python
'''
@author: alfin akhret <alfin.akhret@gmail.com>
'''
from Crypto.PublicKey import RSA
import os 

new_key = RSA.generate(2048, e=65537) 
public_key = new_key.publickey().exportKey("PEM") 
private_key = new_key.exportKey("PEM") 

'''
save the keys to respective files
just for example purpose
'''
privF = open('priv.pem', 'w')
privF.write(str(private_key))
privF.close()

pubF = open('pub.pem', 'w')
pubF.write(str(public_key))
pubF.close()