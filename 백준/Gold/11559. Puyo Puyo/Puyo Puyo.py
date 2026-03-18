import sys
from collections import deque

input = sys.stdin.readline

ROW_SIZE = 12
COL_SIZE = 6

board = [list(input().rstrip()) for _ in range(ROW_SIZE)]

def in_range(r, c):
    return 0 <= r < ROW_SIZE and 0 <= c < COL_SIZE


def print_matrix(title):
    print(title)
    for row in board:
        print(*row)
    print('='*13)


def pop_bfs(start_row, start_col):
    target = board[start_row][start_col]
    queue = deque([(start_row, start_col)])

    visited = set([(start_row, start_col)])

    while queue:
        cur_row, cur_col = queue.popleft()

        for dr, dc in [(-1, 0), (0, 1), (1, 0), (0, -1)]:
            nr, nc = dr + cur_row, dc + cur_col

            if in_range(nr, nc) and (nr, nc) not in visited:
                if board[nr][nc] == target:
                    queue.append((nr, nc))
                    visited.add((nr, nc))

    if len(visited) >= 4:
        for row, col in visited:
            board[row][col] = '.'

        return True
    else:
        return False
    

def down():
    for j in range(COL_SIZE):
        write_row = ROW_SIZE - 1
        
        for i in range(ROW_SIZE - 1, -1, -1):
            if board[i][j] != '.':
                board[write_row][j] = board[i][j]
                write_row -= 1

        for i in range(write_row, -1, -1):
            board[i][j] = '.'
            


def bomb_cycle():
    flag = False

    for i in range(ROW_SIZE):
        for j in range(COL_SIZE):
            if board[i][j] != '.':
                if pop_bfs(i, j):
                    flag = True
    
    return 1 if flag else 0


def main():
    res = 0
    
    while bomb_cycle():
        res += 1
        # print_matrix('bomb')
        down()
        # print_matrix('down')

    print(res)

main()
