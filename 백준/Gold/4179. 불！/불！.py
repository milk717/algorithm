import sys
from collections import deque 

input = sys.stdin.readline

r, c = map(int, input().split())
board = [list(input().rstrip()) for _ in range(r)]


def print_matrix():
    for row in board:
        print(*row)
    
    print('='*r*3)


def get_fire_index():
    index_arr = []

    for i in range(r):
        for j in range(c):
            if board[i][j] == 'F':
                board[i][j] = 0
                index_arr.append((i, j, 0))
    
    return index_arr


def spread_fire():
    q = deque(get_fire_index())

    while q:
        cur_row, cur_col, step = q.popleft()

        for dr, dc in [(-1, 0), (0, 1), (1, 0), (0, -1)]:
            nr, nc = cur_row + dr, cur_col + dc

            if 0 <= nr < r and 0 <= nc < c:
                if board[nr][nc] == '.' or board[nr][nc] == 'J':
                    board[nr][nc] = step + 1
                    q.append((nr, nc, step+1)) 


def find_jihon():
    for i in range(r):
        for j in range(c):
            if board[i][j] == 'J':
                return (i, j)
            

def is_edge(row, col):
    return row == 0 or col == 0 or row == r-1 or col == c-1


def bfs():
    jihon = find_jihon()
    q = deque([(*jihon, 0)])
    visited = set([jihon])

    spread_fire()

    # print_matrix()
    # print(q)

    while q:
        cur_row, cur_col, step = q.popleft()

        if is_edge(cur_row, cur_col):
            return step + 1
        
        for dr, dc in [(-1, 0), (0, 1), (1, 0), (0, -1)]:
            nr, nc = cur_row + dr, cur_col + dc

            if 0 <= nr < r and 0 <= nc < c and (nr, nc) not in visited:
                # print(step, (nr, nc), board[nr][nc], step + 1, type(board[nr][nc]) == int, (type(board[nr][nc]) == int and board[nr][nc] > step + 1))
                if board[nr][nc] == '.' or (type(board[nr][nc]) == int and board[nr][nc] > step + 1):
                    # print((nr, nc), is_edge(nr, nc))
                    visited.add((nr, nc))
                    q.append((nr, nc, step+1)) 


    return 'IMPOSSIBLE'

res = bfs()
print(res)