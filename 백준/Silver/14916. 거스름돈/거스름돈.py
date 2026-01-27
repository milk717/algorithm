"""
거슬러주지 못하는 경우가 있을 수 있나..? => 1, 3
dp[i]: 2와 5를 최대한 적게 사용해서 i를 만들 때 개수
"""

import sys

input = sys.stdin.readline

n = int(input())

dp = [-1] * (max(n + 1, 6))
dp[2] = 1
dp[4] = 2
dp[5] = 1


for i in range(6, n + 1):
    if dp[i - 5] != -1:
        dp[i] = dp[i - 5] + 1
    elif dp[i - 2] != -1:
        dp[i] = dp[i - 2] + 1

print(dp[n])
