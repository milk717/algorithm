import sys

input = sys.stdin.readline

# 심사대, 인원
n, m = map(int, input().split())
arr = sorted([int(input()) for _ in range(n)])


l = 0
r = m * arr[-1]

while l <= r:
    # 이 시간으로 모두 심사 가능한지?
    mid = (l + r) // 2

    cnt = sum([mid // x for x in arr])

    if cnt < m:
        l = mid + 1
    else:
        r = mid - 1

print(l)
