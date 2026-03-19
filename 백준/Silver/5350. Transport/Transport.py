import sys

input = sys.stdin.readline

t = int(input())

for _ in range(t):
    n, W = map(int, input().split())
    items = [map(int, input().split()) for _ in range(n)]

    dp = [0] * (W+1)

    for w, v in items:
        for j in range(W, w-1, -1):
            dp[j] = max(dp[j], dp[j-w] + v)

    print(dp[W])
    