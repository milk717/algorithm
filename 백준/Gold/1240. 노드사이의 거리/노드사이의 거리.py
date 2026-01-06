import sys
from collections import defaultdict
import heapq

input = sys.stdin.readline

n, m = map(int, input().split())
graph = defaultdict(list)
total_distance = dict()


def dijikstra(start):
    pq = []
    distance = [float("inf")] * (n + 1)

    heapq.heappush(pq, (0, start))
    distance[start] = 0

    while pq:
        cur_cost, cur_node = heapq.heappop(pq)

        if cur_cost > distance[cur_node]:
            continue

        for nxt_cost, nxt_node in graph[cur_node]:
            cost = cur_cost + nxt_cost

            if cost <= distance[nxt_node]:
                heapq.heappush(pq, (cost, nxt_node))
                distance[nxt_node] = cost

    return distance


for _ in range(n - 1):
    u, v, c = map(int, input().split())

    graph[u].append((c, v))
    graph[v].append((c, u))

for start in range(1, n + 1):
    total_distance[start] = dijikstra(start)

for _ in range(m):
    start, end = map(int, input().split())

    print(total_distance[start][end])
