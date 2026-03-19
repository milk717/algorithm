import sys

input = sys.stdin.readline

N, K = map(int, input().split())
items = [map(int, input().split()) for _ in range(N)]

dp = [0] * (K + 1)

for w, v in items:
    for j in range(K, w-1, -1):
        dp[j] = max(dp[j-w] + v, dp[j])

print(dp[K])