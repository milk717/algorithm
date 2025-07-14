import sys
input = sys.stdin.readline

def difficulty_value(code):
  tier_map = {'B': 0, 'S': 1, 'G': 2, 'P': 3, 'D': 4}
  tier = code[0]
  num = int(code[1:])
  return tier_map[tier] * 1000 + (1001 - num)

n = int(input().strip())
arr = input().split()

sorted_arr = sorted(arr, key=difficulty_value)

if arr == sorted_arr:
  print("OK")
else:
  print("KO")
  diffs = []

  for orig, sorted_code in zip(arr, sorted_arr):
    if orig != sorted_code:
      diffs.append(orig)

  a, b = sorted(diffs, key=difficulty_value)
  print(a, b)