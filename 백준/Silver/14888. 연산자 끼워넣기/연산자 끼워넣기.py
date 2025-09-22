import sys
from itertools import permutations
input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().split()))

symbols = []
for i, cnt in enumerate(map(int, input().split())):
  if i == 0:
    symbols.extend(['+']*cnt)
  elif i == 1:
    symbols.extend(['-']*cnt)
  elif i == 2:
    symbols.extend(['x']*cnt)
  elif i == 3:
    symbols.extend(['/']*cnt)
    
min_sum = 1000000000
max_sum = -1000000000

def calculate(signs):
  res = arr[0]

  for i in range(1, len(arr)):
    sign = signs[i-1]

    if sign == '+':
      res += arr[i]
    elif sign == '-':
      res -= arr[i]
    elif sign == 'x':
      res *= arr[i]
    elif sign == '/':
      res = int(res / arr[i])

  return res

for p in permutations(symbols, len(symbols)):
  res = calculate(p)

  min_sum = min(min_sum, res)
  max_sum = max(max_sum, res)

print(max_sum)
print(min_sum)