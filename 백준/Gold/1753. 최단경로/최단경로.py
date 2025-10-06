import sys
import heapq
from collections import defaultdict


def dijkstra(start):
    pq = []
    distance = [float('inf')] * (n+1)

    heapq.heappush(pq, (0, start))
    distance[start] = 0

    while pq:
        cur_distance, cur_node = heapq.heappop(pq)

        if cur_distance > distance[cur_node]:
            continue

        for next_distance, next_node in graph[cur_node]:
            cost = cur_distance + next_distance

            if cost < distance[next_node]:
                distance[next_node] = cost
                heapq.heappush(pq, (cost, next_node))

    return map(lambda x: 'INF' if x == float('inf') else x, distance[1:])

if __name__ == '__main__':
    input = sys.stdin.readline

    n, m = map(int, input().split())
    start_node = int(input())

    graph = defaultdict(list)
    for _ in range(m):
        u, v, weight = map(int, input().split())

        graph[u].append((weight, v))

    result = dijkstra(start_node)
    print('\n'.join(map(str, result)))

