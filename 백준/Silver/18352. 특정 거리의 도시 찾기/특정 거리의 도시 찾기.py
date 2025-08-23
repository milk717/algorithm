import sys
import heapq
from collections import defaultdict
input = sys.stdin.readline

INF = float('inf')
node_cnt, edge_cnt, target_distance, start = map(int, input().split())
graph = defaultdict(list)

for _ in range(edge_cnt):
  v, e = map(int, input().split())
  graph[v].append((1, e))

def dijkstra():
  distance = [INF] * (node_cnt+1)
  pq = []
  heapq.heappush(pq, (0, start)) # 간선비용, 정점 번호
  distance[start] = 0

  while pq:
    dist, cur = heapq.heappop(pq)

    if distance[cur] < dist:
      continue

    for weight, neighbor in graph[cur]:
      cost = weight + dist

      if cost < distance[neighbor]:
        heapq.heappush(pq, (cost, neighbor))
        distance[neighbor] = cost

  return distance

distance = dijkstra()
res = []

for index, value in enumerate(distance):
  if value == target_distance:
    res.append(str(index))

print(-1 if len(res) == 0 else '\n'.join(res).rstrip())