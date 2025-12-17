import sys
input = sys.stdin.readline

s1 = input().strip()
s2 = input().strip()

res = 0
dp = [[0] * (len(s2) + 1) for _ in range(len(s1) + 1)]

for i in range(1, len(s1) + 1):
    for j in range(1, len(s2) + 1):
        if s1[i-1] == s2[j-1]:
            dp[i][j] = 1 + dp[i-1][j-1]
            res = max(res, dp[i][j])

print(res)