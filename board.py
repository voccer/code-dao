def solve(board):
    c_board = board.copy()
    row = len(c_board)
    col = len(c_board[0])
    
    for i in range(row):
        j = 0
        if(c_board[i][j] == 'O'):
          c_board[i][j] = 'V'
          n_i = i
          n_j = j
          while True:
            if(c_board[n_i][n_j+1] == 'O'):
              





    return c_board


board = [["X","O","X","X"],["O","X","O","X"],["X","O","X","O"],["O","X","O","X"]]
ret = solve(board)
print(ret)

sorted(board)