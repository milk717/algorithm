import sys
input = sys.stdin.readline

n = int(input())
arr = [tuple(map(int, input().split())) for i in range(n)]

dp = [0]*(n+1)

for i in range(n-1, -1, -1):
  finish_date = i + arr[i][0]

  if finish_date <= n:
    dp[i] = max(arr[i][1] + dp[finish_date], dp[i+1])
  else:
    if i+1 < n:
      dp[i] = dp[i+1]
    else:
      dp[i] = 0

print(dp[0])