# A very simple Flask Hello World app for you to get started with...
from pathlib import Path
import os.path, string
import flask, traceback
from flask import Flask,make_response,render_template, redirect

from flask import request as rq

app = Flask(__name__)

def _build_cors_preflight_response():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")
    return response

@app.route('/')
def index():
    f = open('ooo/index.html')
    data = f.read()
    f.close()
    return data

@app.route('/reg', methods = ['POST', 'OPTIONS'])
def elda():
    if rq.method == "OPTIONS": # CORS preflight
        return _build_cors_preflight_response()
    else:
        try:
            content = rq.json
            if os.path.exists("nicks/"+str(content['nick'])):
                f = open("nicks/"+content['nick'], 'r')
                data = f.read().split('\n')
                f.close()
                if content["password"]==data[0]:
                    response = flask.jsonify({'acc': 1})
                    response.headers.add('Access-Control-Allow-Origin', '*')
                    return response
                else:
                    response = flask.jsonify({'acc': 2})
                    response.headers.add('Access-Control-Allow-Origin', '*')
                    return response

            else:
                if " " in content['nick']:
                    response = flask.jsonify({'acc': 3})
                    response.headers.add('Access-Control-Allow-Origin', '*')
                    return response
                else:
                    f = open("nicks/"+content['nick'], 'w+')
                    f.write(str(content['password']+"\n"))
                    f.close()

                    response = flask.jsonify({'acc': 0})
                    response.headers.add('Access-Control-Allow-Origin', '*')
                    return response

        except Exception as exc:

            response = flask.jsonify({'status':'error', 'error':f'{str(exc)}; line {str(traceback.extract_stack()[-1][1])}'})
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response

@app.route('/qolos', methods = ['POST', 'OPTIONS'])
def elda2():
    if rq.method == "OPTIONS": # CORS preflight
        return _build_cors_preflight_response()
    else:
        try:
            content = rq.json
            if os.path.exists("nicks/"+str(content['nick'])):
                f = open("nicks/"+content['nick'], 'r')
                data = f.read().split('\n')
                f.close()
                f = open("nicks/"+content['nick'], 'w+')
                f.write(data[0]+"\n")
                f.write(content["qolos"])
                f.close()

            response = flask.jsonify({"status":"success"})
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response

        except Exception as exc:

            response = flask.jsonify({'status':'error', 'error':f'{str(exc)}; line {str(traceback.extract_stack()[-1][1])}'})
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response

@app.route('/qolos1', methods = ['POST', 'OPTIONS'])
def shitatqolosa():
    if rq.method == "OPTIONS": # CORS preflight
        return _build_cors_preflight_response()
    else:
        try:
            p = Path("devochki/")
            for x in p.rglob("*"):
                x=str(x)
                f = open(x,'w+')
                f.write("0")
            p = Path("nicks/")
            for x in p.rglob("*"):
                x=str(x)
                f = open(x)
                data = f.read().split('\n')
                if data[1] != "":
                    f = open("devochki/"+data[1], 'r')
                    kolqolos = f.read()
                    f = open("devochki/"+data[1], 'w+')
                    f.write(str(int(kolqolos)+1))
            p = Path("devochki/")
            qolosa = {}
            for x in p.rglob("*"):
                x=str(x)
                f = open(x)
                data = f.read()
                qolosa[x[9:len(x)]]=data

            response = flask.jsonify({"qolosa":qolosa})
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response

        except Exception as exc:

            response = flask.jsonify({'status':'error', 'error':f'{str(exc)}; line {str(traceback.extract_stack()[-1][1])}'})
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response

