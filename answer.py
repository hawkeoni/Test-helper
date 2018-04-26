import os

from flask import Flask, request
from utils import get_answer

app = Flask(__name__, root_path=os.getcwd())
text = open('questions.txt').read()
questions = text.split('Class')

@app.route('/')
def application():
	query = request.args.get('query')
	return get_answer(query, questions)
