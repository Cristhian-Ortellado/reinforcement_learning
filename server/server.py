from flask import Flask, request, jsonify
from flask_cors import CORS
from othello import Othello
from flask_socketio import SocketIO,send,emit
import threading


app = Flask(__name__)
app.config['SECRET_KEY'] = 'password'
CORS(app,resources={r"/*":{"origins":"*"}})
socketio = SocketIO(app,cors_allowed_origins="*")



@app.route("/", methods=["GET"])
def process():
    args = request.args
    max_time_white = int(args.get('max_time_white'))
    alpha_beta_white = True if args.get('alpha_beta_white') =="1" else False
    cut_level_white = int(args.get('cut_level_white'))
    
    # black
    max_time_black = int(args.get('max_time_black'))
    alpha_beta_black = True if args.get('alpha_beta_black') =="1" else False
    cut_level_black = int(args.get('cut_level_black'))
    
    print("ARGUMENTOS")
    print(args)

    x = threading.Thread(
        target=initIA,
        args=(
            max_time_white,alpha_beta_white,cut_level_white,
            max_time_black,alpha_beta_black,cut_level_black
              ))
    x.start()
 
    return jsonify({"respuesta":"Running"})

def initIA(
         max_time_white,alpha_beta_white,cut_level_white,
            max_time_black,alpha_beta_black,cut_level_black
):
    solutions,winner = Othello(
         max_time_white,alpha_beta_white,cut_level_white,
            max_time_black,alpha_beta_black,cut_level_black
    ).play_test_min_max()
    socketio.emit('othello',{"solutions": solutions,"winner" :winner})


if __name__ == "__main__":
    socketio.run(app, debug=True)