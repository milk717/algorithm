"""
visited 체크하면서 1번 정점부터 n번 정점까지 start를 차례대로 지정하면서 순환 없는지 보기
순환이 있는지 확인하려면 다음 노드의 visited가 이미 체크되어있는데, 또 방문하려는 경우 순환으로 판단
순회는 dfs? bfs? bfs가 더 편하니까 bfs
"""

import sys
from collections import defaultdict, deque

input = sys.stdin.readline


def is_tree(graph, start_node, visited):
    dq = deque([(start_node, -1)])
    visited.add(start_node)

    has_cycle = False

    while dq:
        cur_node, parent = dq.popleft()

        for nxt_node in graph[cur_node]:
            if nxt_node not in visited:
                dq.append((nxt_node, cur_node))
                visited.add(nxt_node)
            else:
                if nxt_node != parent:
                    has_cycle = True

    return not has_cycle


def count_tree(graph, n):
    visited = set()
    tree_cnt = 0

    for node in range(1, n + 1):
        if node not in visited:
            tree_cnt += 1 if is_tree(graph, node, visited) else 0

    return tree_cnt


def get_output_string(num):
    if num == 0:
        return "No trees."
    elif num == 1:
        return "There is one tree."
    else:
        return f"A forest of {num} trees."


t = 0
while True:
    n, m = map(int, input().split())
    graph = defaultdict(list)
    t += 1

    if n == 0 and m == 0:
        break

    for _ in range(1, m + 1):
        u, v = map(int, input().split())

        graph[u].append(v)
        graph[v].append(u)

    # print(graph)
    tree_cnt = count_tree(graph, n)

    print(f"Case {t}: {get_output_string(tree_cnt)}")
