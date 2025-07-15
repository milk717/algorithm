import sys
from collections import defaultdict
input = sys.stdin.readline

n, d, window_size, cupon = map(int, input().split())
arr = [int(input()) for _ in range(n)]

variants = defaultdict(int)
res = 0

variants[cupon] += 1

for i in range(n+window_size-1):
  index = i%n

  variants[arr[index]] += 1
  
  if i >= window_size:
    remove_value = arr[index-window_size]
    variants[remove_value] -= 1

    if variants[remove_value] == 0:
      del variants[remove_value]

  if i >= window_size - 1:
    res = max(res, len(variants))
  
print(res)