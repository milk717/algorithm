"""
a -> b: b 감염 시 a도 감염 => 단방향 그래프임
의존방향은 a->b, 감염 방향은 b->a니까 그래프는 b->a가 편함

순환있나?

다익스트라?
c부터 출발해서 각 노드까지 가는 거리를 구구해서 그 거리에서 무한대를 제외하고 최댓값 구하기
감염되는 컴퓨터 수는 다익스트라 결과에서 무한대를 제외한 값의 개수
걸리는 시간은 다익스트라 배열에서 무한을 제외한 최댓값
다익스트라 시간복잡도 O(E log V) -> 우선순위 큐 썼을 때
V: 10,000
E: 100,00함

파이썬 힙 최소힙...? 최대힙...? => 최소힙(작은게 루트)
"""

import sys
from collections import defaultdict
import heapq

input = sys.stdin.readline

INF = float("inf")


def dijikstra(graph, start_node, n):
    pq = []
    visited = set([start_node])
    distance = [INF] * (n + 1)

    heapq.heappush(pq, (0, start_node))
    distance[start_node] = 0

    while pq:
        cur_cost, cur_node = heapq.heappop(pq)

        visited.add(cur_node)

        if cur_cost > distance[cur_node]:
            continue

        for nxt_cost, nxt_node in graph[cur_node]:
            final_cost = cur_cost + nxt_cost

            if nxt_node not in visited:
                if final_cost < distance[nxt_node]:
                    distance[nxt_node] = final_cost
                    heapq.heappush(pq, (final_cost, nxt_node))

    return distance


def main():
    t = int(input())

    for _ in range(t):
        graph = defaultdict(list)
        n, d, c = map(int, input().split())

        for _ in range(d):
            a, b, s = map(int, input().split())

            # 비용이 앞쪽에 와야 우선순위 큐 계산 편함
            graph[b].append((s, a))

        distance = dijikstra(graph=graph, start_node=c, n=n)
        without_inf_distance = list(filter(lambda x: x != INF, distance))
        print(len(without_inf_distance), max(without_inf_distance))


main()
