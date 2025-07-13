import sys
input = sys.stdin.readline

n = int(input())
k = int(input())

def check(x):
  _sum = 0
  for i in range(1, n+1):
    _sum += min(n, x//i)

  return _sum < k

def binary():
  lo = 1
  hi = n**2

  while lo <= hi:
    mid = (lo+hi)//2

    if check(mid):
      lo = mid + 1
    else:
      hi = mid - 1

  return lo

print(binary())