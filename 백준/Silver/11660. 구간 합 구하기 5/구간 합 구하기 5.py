import sys

input = sys.stdin.readline
print = sys.stdout.write

n, m = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(n)]
range_case = [tuple(map(lambda x: int(x) - 1, input().split())) for _ in range(m)]

prefix_sum_arr = [arr[i].copy() for i in range(n)]

for i in range(n):
    for j in range(1, n):
        prefix_sum_arr[i][j] = prefix_sum_arr[i][j - 1] + arr[i][j]

res_arr = []
for x1, y1, x2, y2 in range_case:
    res = 0
    for x in range(x1, x2 + 1):
        res += prefix_sum_arr[x][y2] - (prefix_sum_arr[x][y1 - 1] if y1 - 1 >= 0 else 0)

    res_arr.append(res)

print("\n".join(map(str, res_arr)))