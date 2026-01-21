import sys
from collections import deque

input = sys.stdin.readline
DIRS = [(-1, 0), (0, 1), (1, 0), (0, -1)]

t = int(input())


def print_matrix(board, title):
    print("=" * len(board[1]) + title + "=" * len(board[1]))
    for row in board:
        print(*row)


def is_edge(cur_position, w, h):
    row, col = cur_position

    return row == 0 or col == 0 or row == h - 1 or col == w - 1


def fire_time(board):
    fire_board = [[-1] * w for _ in range(h)]
    queue = deque()

    for row in range(h):
        for col in range(w):
            if board[row][col] == "*":
                fire_board[row][col] = 0
                queue.append((row, col, 0))

    while queue:
        cur_row, cur_col, time = queue.popleft()

        for dr, dc in DIRS:
            nr = cur_row + dr
            nc = cur_col + dc

            if 0 <= nr < h and 0 <= nc < w:
                if board[nr][nc] == "." and fire_board[nr][nc] == -1:
                    queue.append((nr, nc, time + 1))
                    fire_board[nr][nc] = time + 1

    return fire_board


def bfs(board, start, w, h):
    queue = deque([(*start, 0)])
    visited = set()
    fire_board = fire_time(board)

    # for row in fire_board:
    #     for x in row:
    #         print(str(x).zfill(2), end=" ")
    #     print()

    visited.add(start)

    while queue:
        cur_row, cur_col, time = queue.popleft()

        if is_edge((cur_row, cur_col), w, h):
            return time + 1

        # print(cur_row, cur_col, time)

        for dr, dc in DIRS:
            nr = cur_row + dr
            nc = cur_col + dc

            # print(nr, nc)

            if 0 <= nr < h and 0 <= nc < w:
                # print(f"fire_board[nr][nc] > time={fire_board[nr][nc] > time}")
                if (
                    board[nr][nc] == "."
                    and (fire_board[nr][nc] > time + 1 or fire_board[nr][nc] == -1)
                    and (nr, nc) not in visited
                ):
                    visited.add((nr, nc))
                    queue.append((nr, nc, time + 1))

    return "IMPOSSIBLE"


for _ in range(t):
    w, h = map(int, input().split())
    board = [list(input().rstrip()) for _ in range(h)]

    for i in range(h):
        for j in range(w):
            if board[i][j] == "@":
                board[i][j] = "."
                res = bfs(board, (i, j), w, h)
                print(res)
