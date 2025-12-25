## 누적합
```python
# arr = [1, 3, 4, 5, 8, 10]

prefix_sum = [0]
for index, num in enumerate(arr):
	prefix_sum.append(prefix_sum[-1] + num)
	
# prefix_sum = [1, 4, 8, 13, 21, 31]
```
- `prefix_sum` 초기에 0 넣는 이유?
	- 누적합 배열 기반으로 구간합 구한다고 가정했을 때. 예를들어 구간 2~4까지의 합
	- 그러면 포함되는 요소는 `arr[2] + arr[3] + arr[4]` 임
	- 이를 구하려면 `prefix_sum[4] - prefix_sum[1] = 21 - 4 = 17`
	- 실제로 더한다면 `arr[2] + arr[3] + arr[4] = 4 + 5 + 8 =17` 
	- 즉 `구간의 끝 - 구간의 시작 - 1 지점`으로 구간합 구해야함.
	- 구간 시작이 0인 경우도 있기 때문에 인덱스 0 자리에 0 넣어야 계산 편함
## 투포인터
### Only 투포인터
- target_num을 만족하는 가장 짧은 연속된 수열의 길이라고 가정했을 때
```python
# arr = [1, 3, 4, 5, 8, 10]
# target_num = 13

left = 0
right = 0
total = 0
min_len = float('inf')

while True:
	if right == len(arr):
		break
		
	if total >= target_num:
		min_len = min(min_len, right - left)
		total -= arr[left]
		left += 1
	else:
		total += arr[right]
		right += 1
```
### prefix_sum + 투포인터
- target_num을 만족하는 가장 짧은 연속된 수열의 길이라고 가정했을 때
```python
# arr = [1, 3, 4, 5, 8, 10]
# target_num = 13

prefix_sum = [0]
for index, num in enumerate(arr):
    prefix_sum.append(prefix_sum[-1] + num)

left = 0
right = 0
min_len = float('inf')

while right <= len(arr):
    total = prefix_sum[right] - prefix_sum[left]
    if total >= target_num:
        min_len = min(min_len, right - left)
        left += 1
    else:
        right += 1
```
- `total = prefix_sum[right] - prefix_sum[left]`인 이유는 보통 range 잡을 때 start ~ end라고 가정하면
- start index는 포함되고, end인덱스는 포함 x (파이썬 range 생각하면 쉬움)이기 때문
## 슬라이딩 윈도우
# 그래프
## BFS
### 격자 그래프
```python
def bfs():
    dq = deque(start_positions)  # 탐색 출발지점들로 초기화 
    board = [row[:] for row in arr]  # 리스트 컴프리핸션으로 2차원 배열 깊은 복사

    while len(dq):
        row, col = dq.popleft()

        for dr, dc in zip([-1, 0, 1, 0], [0, 1, 0, -1]):
            next_row = row + dr
            next_col = col + dc

            if 0 <= next_row < n and 0 <= next_col < m:
                if board[next_row][next_col] == 0:
                    board[next_row][next_col] = 2
                    dq.append((next_row, next_col))

    return safe_cnt
```
- 순회는 상, 우, 하, 좌 (css 순서)로 통일
- 순회 좌표 오타 유의하기
### 이분 그래프
```python
def is_bipartite(graph):
    colors = [-1] * (n + 1)

    for start in range(1, n + 1):
        if colors[start] != -1:
            continue
            
        dq = deque([start])
        colors[start] = 0

        while dq:
            cur_node = dq.popleft()

            for next_node in graph[cur_node]:
                if colors[next_node] == -1:
                    colors[next_node] = colors[cur_node] ^ 1
                    dq.append(next_node)
                elif colors[next_node] == colors[cur_node]:
                    return False

    return True
```
## DFS
## 유니온 파인드
[[1717_집합의 표현]]
![[1717_집합의 표현-2025-10-05.png]]
- 랭크 사용한 방법도 알아봐야하지만, 일단 패스
```python
def find(x):
    while parents[x] != x:
        parents[x] = parents[parents[x]]
        x = parents[x]
    return x


def union(x, y):
    a = find(x)
    b = find(y)

    if a < b:
        parents[b] = a
    else:
        parents[a] = b
```
## 위상 정렬
```python
def topology_sort(graph, indegree):
    dq = deque([i for i in range(1, n+1) if indegree[i] == 0])
    res = []

    while dq:
        cur_node = dq.popleft()
        res.append(cur_node)

        for next_node in graph[cur_node]:
            indegree[next_node] -= 1

            if indegree[next_node] == 0:
                dq.append(next_node)

    return res
```

## 다익스트라
다익스트라의 우선순위 큐에 들어가는 것은 `(누적 거리, 정점) = 간선 상태`
즉 이 **정점까지 도달하기 위한 하나의 경로(간선 조합)이** 들어가는 것이라서, 비효율적인 경로는 스킵 가능

![[각 알고리즘별 코드 스니펫-2025-10-06.png]]

```python
INF = int(1e9)


def dijkstra(start):
    pq = []
    distance = [INF] * (n+1)

    heapq.heappush(pq, (0, start))
    distance[start] = 0

    while pq:
        cur_distance, cur_node = heapq.heappop(pq)

        if cur_distance > distance[cur_node]:
            continue

        for next_node, next_distance in graph[cur_node]:
            cost = cur_distance + next_distance

            if cost < distance[next_node]:
                distance[next_node] = cost
                heapq.heappush(pq, (cost, next_node))

    return map(lambda x: 'INF' if x == INF else x, distance[1:])
```
## 벨만-포드
- 정점 개수가 v일 때 v-1 번 순회하는 이유는 한번의 간선 탐색으로는 간선의 순서에 따라 발견하지 못하는 경우가 생길 수 있기 때문에 수학적으로 최적의 경로를 찾는 반복 횟수가 v-1번임 -> <mark style="background: #ABF7F7A6;">아직 잘 이해가 되지 않으니 외우자</mark>
```python
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

    return distance
```

## 플로이드 와샬
```python
def floyd_warshall(graph):
    for k in range(n):
        for i in range(n):
            for j in range(n):
                if i == j:
                    graph[i][j] = 0
                    continue
                    
                graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])

    return graph
```

## 트리
### MST (최소신장트리)
#### kruskal (크루스칼)
```python
INF = int(1e9)


def find(parents, x):
    while parents[x] != x:
        parents[x] = parents[parents[x]]
        x = parents[x]
    return x


def union(parents, x, y):
    a, b = find(parents, x), find(parents, y)

    if a < b:
        parents[b] = a
    else:
        parents[a] = b


def kruskal(edges):
    parents = list(range(n + 1))
    edges.sort()
    mst = []

    for cost, u, v in edges:
        if find(parents, u) != find(parents, v):
            union(parents, u, v)
            mst.append(cost)

    return mst
```
#### Prim (프림)
[[1922_네트워크 연결]]
- 트리는 항상 양방향 간선. 즉 MST도 양방향 간선임
- BFS처리할 때는 nxt를 queue에 넣는 시점에 방문처리하지만, pq를 통한 탐색은 큐에 넣는게 항상 방문을 보장하지 않기 때문에 실제 cur 방문 시 방문처리함
```python
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
```