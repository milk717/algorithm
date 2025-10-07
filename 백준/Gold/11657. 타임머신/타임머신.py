import sys
from collections import defaultdict

INF = int(1e9)


def bellman_ford(edges, start):
    distance = [INF] * (n+1)
    distance[start] = 0

    for i in range(n-1):
        for u, v, cost in edges:
            if distance[u] != INF and distance[u] + cost < distance[v]:
                distance[v] = distance[u] + cost

    for u, v, cost in edges:
        if distance[u] != INF and distance[u] + cost < distance[v]:
            return [-1]

    return [-1 if x == INF else x for x in distance[2:]]

if __name__ == '__main__':
    input = sys.stdin.readline

    n, m = map(int, input().split())
    edges = []

    for _ in range(m):
        v, e, cost = map(int, input().split())
        edges.append((v, e, cost))

    res = bellman_ford(edges, 1)
    print('\n'.join(map(str, res)))

