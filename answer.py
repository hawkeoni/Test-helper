# encoding=utf8

import os

from flask import Flask, request
from flask_cors import CORS

from utils import get_answer

app = Flask(__name__, root_path=os.getcwd())
cors = CORS(app, resources={r"/*": {"origins": "*"}})
text = open('questions.txt', encoding='utf-8').read()
questions = text.split('Class')

@app.route('/')
def application():
	query = request.args.get('query')
	return get_answer(query, questions)


if __name__ == '__main__':
	app.run(host='0.0.0.0')
