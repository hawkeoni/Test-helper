import re

def get_answer_line(answer):
	#impossible to improve, as answers may contain -
	#See splitter.py for example
	start = answer.find('+')
	return answer[start:].replace('\n', '')


text = open('questions.txt').read()
questions = text.split('Class')
while True:
	query = str(input())
	for question in questions:
		if query in question:
			print(get_answer_line(question))
			print('---------')