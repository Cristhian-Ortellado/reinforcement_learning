import copy

from min_max import MinMax
from othello_utils import *


class Othello:
    def __init__(self,
                 max_time_white = 50,
                 alpha_beta_white= True,
                 cut_level_white= 4,
                 max_time_black = 50,
                 alpha_beta_black= True,
                 cut_level_black= 4
                 ):
        # Inicialización del tablero
        self.board = [[EMPTY for _ in range(BOARD_SIZE)] for _ in range(BOARD_SIZE)]
        self.board[3][3] = WHITE
        self.board[3][4] = BLACK
        self.board[4][3] = BLACK
        self.board[4][4] = WHITE
        self.solutions = []

        # white
        self.max_time_white = max_time_white
        self.alpha_beta_white = alpha_beta_white
        self.cut_level_white = cut_level_white

        # black
        self.max_time_black = max_time_black
        self.alpha_beta_black = alpha_beta_black
        self.cut_level_black = cut_level_black

    # Imprimir el tablero
    def print_board(self,title= "Board",player = "",row="",col="",time_elapsed="",visited_nodes = "0"):
        aux = copy.deepcopy(self.board)
        self.solutions.append({
                "title":title,
                "player" : player,
                "row":row,
                "column":col,
                "timeElapsed":time_elapsed,
                "visitedNodes" : visited_nodes,
                "table":aux 
            })

    # Verificar si un movimiento es válido

    def play_test_min_max(self):
        # Si es alto el cutting y el tiempo es el mismo se nota cuantos nodos se visitan
        # Sin alpha beta usan siempre su max_cutting_time
        min_max_black = MinMax(self.cut_level_black, self.max_time_black, self.alpha_beta_black)
        min_max_white = MinMax(self.cut_level_white, self.max_time_white, self.alpha_beta_white)
        current_player = BLACK
        while not is_game_over(self.board):
            player = "Black" if current_player == BLACK else "White"
            if current_player == WHITE:
                can_play, _, time_elapsed, nodes, row, col = min_max_white.run(self.board, current_player)
                if can_play:
                    # print(f"\n\nCurrent player: {player}")
                    # print(f"Board received")
                    self.print_board(title= "Board received",player = player,row=row,col=col,time_elapsed=time_elapsed,visited_nodes = nodes)
                    # print('---------------')
                    make_move(self.board, row, col, current_player)
                    # print(
                        # f"Board played -> Row: {row}, Col: {col}, Time Elapsed: {time_elapsed}, Visited Nodes: {nodes}")
                    self.print_board(title= "Board received",player = player,row=row,col=col,time_elapsed=time_elapsed,visited_nodes = nodes)
                    current_player = get_opponent(current_player)
                else:
                    current_player = get_opponent(current_player)
            else:
                can_play, _, time_elapsed, nodes, row, col = min_max_black.run(self.board, current_player)
                if can_play:
                    # print(f"\n\nCurrent player: {player}")
                    # print(f"Board received")
                    self.print_board(title= "Board received",player = player,row=row,col=col,time_elapsed=time_elapsed,visited_nodes = nodes)
                    # print('---------------')
                    make_move(self.board, row, col, current_player)
                    # print(
                        # f"Board played -> Row: {row}, Col: {col}, Time Elapsed: {time_elapsed}, Visited Nodes: {nodes}")
                    self.print_board(title= "Board received",player = player,row=row,col=col,time_elapsed=time_elapsed,visited_nodes = nodes)
                    current_player = get_opponent(current_player)
                else:
                    current_player = get_opponent(current_player)

        # print(f"\n\nThe winner is: {check_winner(self.board)}")
        return self.solutions, check_winner(self.board)

if __name__ == '__main__':
    othello = Othello()
    othello.play_test_min_max()
