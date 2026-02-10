import sys

input = sys.stdin.readline


s1, s2, s3 = [input().rstrip() for _ in range(3)]

dp = [[[0] * (len(s1) + 1) for _ in range(len(s2) + 1)] for _ in range(len(s3) + 1)]
res = 0

for k in range(1, len(s3) + 1):
    for i in range(1, len(s2) + 1):
        for j in range(1, len(s1) + 1):
            if s3[k - 1] == s2[i - 1] == s1[j - 1]:
                dp[k][i][j] = dp[k - 1][i - 1][j - 1] + 1
            else:
                dp[k][i][j] = max(dp[k - 1][i][j], dp[k][i - 1][j], dp[k][i][j - 1])

            res = max(res, dp[k][i][j])

print(res)
