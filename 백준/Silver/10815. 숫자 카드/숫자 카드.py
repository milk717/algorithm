import sys
input = sys.stdin.readline

m = int(input())
s = set(map(int, input().split()))

n = int(input())
arr = list(map(int, input().split()))

res = []

for x in arr:
  if x in s:
    res.append(1)
  else:
    res.append(0)

print(*res)