import sys

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


if __name__ == '__main__':
    input = sys.stdin.readline

    n, m = map(int, input().split())
    edges = []

    for _ in range(m):
        u, v, cost = map(int, input().split())
        edges.append((cost, u, v))

    mst = kruskal(edges)
    print(sum(mst))