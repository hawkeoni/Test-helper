def get_answer_line(answer):
	#impossible to improve, as answers may contain -
	#See splitter.py for example
	start = answer.find('+')
	return answer[start:].replace('\n', '')

def get_answer(query, list_db):
	result = ''
	for entry in list_db:
		if query in entry:
			result += '<p>' + get_answer_line(entry) + '</p>'
			result += '<p>---------</p>'
	return result