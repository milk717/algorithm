import sys
from collections import defaultdict, deque


def topology_sort():
    dq = deque()
    res = []

    for i in range(1, n+1):
        if in_degree[i] == 0:
            dq.append(i)

    for i in range(1, n+1):
        if not len(dq):
            return

        cur_node = dq.popleft()
        res.append(cur_node)

        for next_node in graph[cur_node]:
            in_degree[next_node] -= 1

            if in_degree[next_node] == 0:
                dq.append(next_node)

    return res


if __name__ == '__main__':
    input = sys.stdin.readline

    n, m = map(int, input().split())

    graph = defaultdict(list)
    in_degree = [0] * (n+1)
    for _ in range(m):
        u, v = map(int, input().split())
        graph[u].append(v)
        in_degree[v] += 1

    res = topology_sort()
    print(*res)
