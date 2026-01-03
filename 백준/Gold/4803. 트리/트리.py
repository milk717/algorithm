import sys

input = sys.stdin.readline


def find_lead(parents, x):
    while parents[x] != x:
        parents[x] = parents[parents[x]]
        x = parents[x]
    return parents[x]


def union(parents, x, y, cycle_group):
    a = find_lead(parents, x)
    b = find_lead(parents, y)

    if a == b:
        cycle_group[a] = True
    elif a < b:
        parents[b] = a
        cycle_group[a] = cycle_group[a] or cycle_group[b]
    else:
        parents[a] = b
        cycle_group[b] = cycle_group[a] or cycle_group[b]


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
    parents = list(range(n + 1))
    cycle_group = [False] * (n + 1)
    t += 1

    if n == 0 and m == 0:
        break

    for _ in range(1, m + 1):
        u, v = map(int, input().split())
        union(parents, u, v, cycle_group)

    # print(parents, cycle_group)
    tree_cnt = 0
    visited = set()

    for i in range(1, n + 1):
        a = find_lead(parents, i)
        if a not in visited:
            visited.add(a)
            if not cycle_group[a]:
                tree_cnt += 1

    print(f"Case {t}: {get_output_string(tree_cnt)}")
