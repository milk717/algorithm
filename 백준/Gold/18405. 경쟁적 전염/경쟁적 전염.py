import sys
from collections import deque

input = sys.stdin.readline

N, K = map(int, input().split())
board = [list(map(int, input().split())) for _ in range(N)]
S, X, Y = map(int, input().split())

directions = [(-1, 0), (0, 1), (1, 0), (0, -1)]

def in_range(r, c):
    return 0 <= r < N and 0 <= c < N

def main():
    viruses = []

    for i in range(N):
        for j in range(N):
            if board[i][j] != 0:
                viruses.append((board[i][j], 0, i, j))

    viruses.sort()

    dq = deque(viruses)

    while dq:
        virus, time, r, c = dq.popleft()

        if time == S:
            break

        for dr, dc in directions:
            nr, nc = r + dr, c + dc

            if in_range(nr, nc) and board[nr][nc] == 0:
                board[nr][nc] = virus
                dq.append((virus, time + 1, nr, nc))

    print(board[X - 1][Y - 1])

main()