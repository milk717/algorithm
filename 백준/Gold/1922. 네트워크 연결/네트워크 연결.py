import sys
import heapq
from collections import defaultdict

INF = int(1e9)


def prim(graph, start):
    pq = []
    visited = set()
    heapq.heappush(pq, (0, start))
    mst_cost = 0

    while pq:
        cur_cost, cur_vertex = heapq.heappop(pq)

        if cur_vertex in visited:
            continue

        visited.add(cur_vertex)
        mst_cost += cur_cost

        for nxt_cost, nxt_vertex in graph[cur_vertex]:
            if nxt_vertex not in visited:
                heapq.heappush(pq, (nxt_cost, nxt_vertex))


    return mst_cost

if __name__ == '__main__':
    input = sys.stdin.readline

    n = int(input())
    m = int(input())

    graph = defaultdict(list)

    for _ in range(m):
        u, v, cost = map(int, input().split())

        graph[u].append((cost, v))
        graph[v].append((cost, u))

    start = list(graph.keys())[0]
    res = prim(graph, start)
    print(res)