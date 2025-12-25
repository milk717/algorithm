import sys

input = sys.stdin.readline

N, L = map(int, input().split())

arr = []
for _ in range(N):
    arr.append(tuple(map(int, input().split())))

arr.sort()

last_corver_index = -1
cnt = 0

for start, end in arr:
    real_start = max(start, last_corver_index)
    length = end - real_start
    cur_cnt = (length + L - 1) // L
    cnt += cur_cnt
    last_corver_index = real_start + (cur_cnt * L)

print(cnt)