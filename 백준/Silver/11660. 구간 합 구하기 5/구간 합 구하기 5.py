"""
1 2 3 4
2 3 4 5
3 4 5 6
4 5 6 7

(1, 1): 위에서 하나 왼쪽에서 하나, 대각선 빼기

1 3 6 10
3 8 15 24
6 15 27 42
10 24 42 64
"""

import sys

input = sys.stdin.readline

n, m = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(n)]
range_case = [tuple(map(lambda x: int(x) - 1, input().split())) for _ in range(m)]

prefix_sum_arr = [arr[i].copy() for i in range(n)]

for i in range(n):
    for j in range(n):
        prefix_sum_arr[i][j] = (
            (prefix_sum_arr[i - 1][j] if i - 1 >= 0 else 0)
            + (prefix_sum_arr[i][j - 1] if j - 1 >= 0 else 0)
            + arr[i][j]
            - (prefix_sum_arr[i - 1][j - 1] if i - 1 >= 0 and j - 1 >= 0 else 0)
        )

res = []
for x1, y1, x2, y2 in range_case:
    res.append(
        prefix_sum_arr[x2][y2]
        - (prefix_sum_arr[x2][y1 - 1] if y1 - 1 >= 0 else 0)
        - (prefix_sum_arr[x1 - 1][y2] if x1 - 1 >= 0 else 0)
        + (prefix_sum_arr[x1 - 1][y1 - 1] if x1 - 1 >= 0 and y1 - 1 >= 0 else 0)
    )

print("\n".join(map(str, res)))