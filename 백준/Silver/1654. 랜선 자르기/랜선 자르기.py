import sys

input = sys.stdin.readline

n, m = map(int, input().split())
arr = [int(input()) for _ in range(n)]


def search():
    l = 1
    r = max(arr)

    while l <= r:
        mid = (l + r) // 2

        cnt = sum([x // mid for x in arr])

        if cnt < m:
            r = mid - 1
        else:
            l = mid + 1

    return r


print(search())
