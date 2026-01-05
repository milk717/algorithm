"""
각 육지 탐색,
각 칸별로 거리 측정?
보드 전체 탐색 O(n^2) = 2500
각 칸부터 출발해서 탐색한다고 하면 O(n^3) = 125,000
"""

import sys
from collections import deque

input = sys.stdin.readline


def main():
    n, m = map(int, input().split())
    graph = [input().rstrip() for _ in range(n)]
    dyx = [(-1, 0), (0, 1), (1, 0), (0, -1)]
    visited = [[0] * m for _ in range(n)]
    dist = 0
    pos = []
    for i in range(n):
        for j in range(m):
            if graph[i][j] == "L" and not visited[i][j]:
                visited[i][j] = 1
                q = deque([(i, j, 0)])
                while q:
                    y, x, d = q.popleft()
                    if d > dist:
                        dist = d
                        pos.append((y, x))
                    for dy, dx in dyx:
                        ny, nx = y + dy, x + dx
                        if (
                            0 <= nx < m
                            and 0 <= ny < n
                            and graph[ny][nx] == "L"
                            and not visited[ny][nx]
                        ):
                            visited[ny][nx] = 1
                            q.append((ny, nx, d + 1))
    ans = 0
    for i, j in pos:
        visited = [[0] * m for _ in range(n)]
        visited[i][j] = 1
        q = deque([(i, j, 0)])
        while q:
            y, x, d = q.popleft()
            if d > ans:
                ans = d
            for dy, dx in dyx:
                ny, nx = y + dy, x + dx
                if (
                    0 <= nx < m
                    and 0 <= ny < n
                    and graph[ny][nx] == "L"
                    and not visited[ny][nx]
                ):
                    visited[ny][nx] = 1
                    q.append((ny, nx, d + 1))
    print(ans)


main()
