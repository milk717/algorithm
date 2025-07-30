import sys
import heapq
from collections import defaultdict
input = sys.stdin.readline

INF = float('inf')

a, b = map(int, input().split())
n, m = map(int, input().split())

graph = defaultdict(list)

for _ in range(m):
  v, e = map(int, input().split())
  graph[v].append((1, e))
  graph[e].append((1, v))

def dijkstra():
  distance = [INF] * (n+1)
  pq = []

  heapq.heappush(pq, (0, a))
  distance[a] = 0

  while pq:
    cur_dist, cur_vertex = heapq.heappop(pq)

    if distance[cur_vertex] < cur_dist:
      continue

    for weight, neighbor in graph[cur_vertex]:
      cost = weight + cur_dist

      if cost < distance[neighbor]:
        heapq.heappush(pq, (cost, neighbor))
        distance[neighbor] = cost
        
  return distance

distance = dijkstra()
print(distance[b] if distance[b] != INF else -1)
  