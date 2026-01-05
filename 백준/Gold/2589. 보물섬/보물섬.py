"""
각 육지 탐색,
각 칸별로 거리 측정?
보드 전체 탐색 O(n^2) = 2500
각 칸부터 출발해서 탐색한다고 하면 O(n^3) = 125,000
"""

import sys
from collections import deque

input = sys.stdin.readline

n, m = map(int, input().split())


def bfs(board, start):
    visited = [[0] * m for _ in range(n)]
    queue = deque([(*start, 0)])
    visited[start[0]][start[1]] = 1

    max_distance = 0

    while queue:
        cur_row, cur_col, distance = queue.popleft()

        for dr, dc in [(-1, 0), (0, 1), (1, 0), (0, -1)]:
            nxt_row, nxt_col = cur_row + dr, cur_col + dc

            if (
                0 <= nxt_row < n
                and 0 <= nxt_col < m
                and board[nxt_row][nxt_col] == "L"
                and not visited[nxt_row][nxt_col]
            ):
                queue.append((nxt_row, nxt_col, distance + 1))
                visited[nxt_row][nxt_col] = 1
                max_distance = max(max_distance, distance + 1)

    return max_distance


def main():

    board = [input().strip() for _ in range(n)]

    res = 0
    for i in range(n):
        for j in range(m):
            if board[i][j] == "L":
                res = max(bfs(board, (i, j)), res)

    return res


print(main())
