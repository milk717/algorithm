from collections import defaultdict
import sys
input = sys.stdin.readline

n = int(input())
str = input().rstrip()

alpha_cnt_dict = defaultdict(int)
res = 0

left = 0
right = 0

for right in range(len(str)):
  alpha_cnt_dict[str[right]] += 1

  while len(alpha_cnt_dict) > n:
    alpha_cnt_dict[str[left]] -= 1

    if alpha_cnt_dict[str[left]] == 0:
      del alpha_cnt_dict[str[left]]

    left += 1

  res = max(res, right + 1 - left)
  
print(res)