import sys
from collections import defaultdict, deque


def is_bipartite(graph):
    colors = [-1] * (n+1)

    for start in range(1, n+1):
        if colors[start] == -1:
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


if __name__ == '__main__':
    input = sys.stdin.readline
    k = int(input())
    res = []

    for _ in range(k):
        n, m = map(int, input().split())

        graph = defaultdict(list)
        for _ in range(m):
            v, e = map(int, input().split())
            graph[v].append(e)
            graph[e].append(v)

        res.append(is_bipartite(graph))

    print('\n'.join(map(lambda x: 'YES' if x else 'NO', res)))

