import sys


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


if __name__ == '__main__':
    input = sys.stdin.readline
    n, m = map(int, input().split())

    parents = list(range(n+1))

    for _ in range(m):
        action, a, b = map(int, input().split())

        if action == 0:
            union(a, b)
        else:
            print('YES' if find(a) == find(b) else 'NO')

