import sys

input = sys.stdin.readline

n, m = map(int, input().split())
arr = sorted(int(input()) for _ in range(n))


def binary_search(arr, x, start):
    l, r = start, len(arr)

    while l < r:
        mid = (l + r) // 2
        diff = arr[mid] - x

        if diff < m:
            l = mid + 1
        else:
            r = mid

    if l == len(arr):
        return float("inf")

    return arr[l] - x


res = float("inf")

for i in range(n):
    diff = binary_search(arr, arr[i], i + 1)

    res = min(res, diff)

print(res)
