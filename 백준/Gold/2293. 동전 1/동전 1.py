import sys

input = sys.stdin.readline

n, k = map(int, input().split())
coins = sorted([int(input()) for _ in range(n)])
dp = [0] * (k + 1)
dp[0] = 1

for coin in coins:
    for i in range(k + 1):
        dp[i] = dp[i] + (dp[i - coin] if i - coin >= 0 else 0)

print(dp[k])
