import sys
input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().split()))

from collections import defaultdict

fruit_count = defaultdict(int)
left = 0
res = 0

for right in range(n):
    fruit_count[arr[right]] += 1

    while len(fruit_count) > 2:
        fruit_count[arr[left]] -= 1
        if fruit_count[arr[left]] == 0:
            del fruit_count[arr[left]]
        left += 1

    res = max(res, right - left + 1)

print(res)