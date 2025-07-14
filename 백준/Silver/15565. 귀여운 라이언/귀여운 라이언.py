import sys
from collections import deque
input = sys.stdin.readline

n, k = map(int, input().split())
arr = list(map(int, input().split()))

lions = deque()
res = sys.maxsize

for right in range(n):
  if arr[right] == 1:
    lions.append(right)

  if len(lions) == k:
    res = min(res, right - lions.popleft() + 1)

print(res if res != sys.maxsize else -1)