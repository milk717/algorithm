import sys
input = sys.stdin.readline

H, Y = map(int, input().split())
dp = [0] * (Y + 1)
dp[0] = H

for i in range(1, Y + 1):
  best = dp[i - 1] + dp[i - 1] * 5 // 100

  if i >= 3:
    t = dp[i - 3] + dp[i - 3] * 20 // 100
    if t > best:
      best = t
  if i >= 5:
    t = dp[i - 5] + dp[i - 5] * 35 // 100
    if t > best:
      best = t
  dp[i] = best

print(dp[Y])