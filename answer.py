# encoding=utf8

import os

from flask import Flask, request
from flask_cors import CORS

from utils import get_answer

app = Flask(__name__, root_path=os.getcwd())
cors = CORS(app, resources={r"/*": {"origins": "*"}})
text = open('questions.txt', encoding='utf-8').read().lower()
questions = text.split('class a.')
script = open('helper.min.js').read()
includer = open('includer.js').read()

@app.route('/')
def answer():
	query = request.args.get('query')
	return get_answer(query, questions)

@app.route('/helpme.js')
def give_script():
	return script

@app.route('/test')
def test():
	return text

@app.route('/includer')
def give():
	return includer

if __name__ == '__main__':
	app.run(host='127.0.0.1')
