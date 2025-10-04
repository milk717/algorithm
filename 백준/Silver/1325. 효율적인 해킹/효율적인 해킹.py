import sys
from collections import defaultdict, deque


def bfs(graph, start_computer):
    visited = [False]*(n+1)
    dq = deque([start_computer])
    visited[start_computer] = True
    cur_computer_hack_cnt = 1

    while dq:
        cur_computer = dq.popleft()

        if cur_computer not in graph.keys():
            continue

        for next_computer in graph[cur_computer]:
            if not visited[next_computer]:
                dq.append(next_computer)
                visited[next_computer] = True
                cur_computer_hack_cnt += 1

    return cur_computer_hack_cnt


def get_max_hack_computer(graph):
    max_hack_computers = set()
    max_hack_computer_cnt = 1

    for computer in graph:
        cur_computer_hack_cnt = bfs(graph, computer)

        if max_hack_computer_cnt <= cur_computer_hack_cnt:
            max_hack_computer_cnt = cur_computer_hack_cnt
            max_hack_computers.add((cur_computer_hack_cnt, computer))

    return map(lambda x: x[1], filter(lambda x: x[0] == max_hack_computer_cnt, max_hack_computers))


if __name__ == '__main__':
    input = sys.stdin.readline
    n, m = map(int, input().split())

    ddict = defaultdict(list)
    for _ in range(m):
        v, e = map(int, input().split())
        ddict[e].append(v)

    res = get_max_hack_computer(ddict)
    print(*sorted(res))

