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
