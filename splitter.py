#!/usr/bin/python
# -*- coding: utf-8 -*-
'''
import re


def splitter(text):
    text = text.split('\n')
    for line in text:
        if '+' in line:
            print(type(line), type('+ответ1-соси'))
            print(re.findall(r'^\+.*[\+\-\n]', '+ответ1-соси - AMI- QAM-25 - 2B1Q- PAM-4 + PAM-5 - NRZ-I'))
Doesn't work as long as parts of question may contain - or +

'''