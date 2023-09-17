# サーバーサイドのPythonファイル (server.pyなど)
from flask import Flask, render_template
from flask_socketio import SocketIO, emit

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

@app.route('/')
def index():
	return render_template('index.html')

@socketio.on('connect')
def handle_connect():
	print('Client connected')

@socketio.on('chatMessage')
def handle_chat_message(message):
	emit('chatMessage', message, broadcast=True)

if __name__ == '__main__':
	socketio.run(app, debug=True)
