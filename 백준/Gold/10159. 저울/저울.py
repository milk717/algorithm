"""
현재 노드로부터 도달 단방향으로 도달 가능한 노드는 무게비교가 가능한 곳
다른 노드로부터 출발해서 현재 노드로 단방향으로 들어올 수 있다면 무게비교가 가능함
m이 2000개라도, 정점은 100개라서 정점 기준으로 비교하면됨

"""

import sys
from collections import defaultdict, deque

input = sys.stdin.readline

n = int(input())
m = int(input())

graph = defaultdict(list)
reversed_graph = defaultdict(list)

for _ in range(m):
    u, v = map(int, input().split())
    graph[u].append(v)
    reversed_graph[v].append(u)


def bfs(graph, start, visited):
    q = deque([start])
    visited.add(start)
    cnt = 0

    while q:
        cur = q.popleft()

        for nxt in graph[cur]:
            if nxt not in visited:
                visited.add(nxt)
                q.append(nxt)
                cnt += 1
    return cnt


for i in range(1, n + 1):
    visited = set()
    reachable = 0

    reachable += bfs(graph, i, visited)
    reachable += bfs(reversed_graph, i, visited)

    print(n - reachable - 1)
