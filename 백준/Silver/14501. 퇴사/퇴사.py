'''
수익이 하루짜리 무조건 선택? -> x, 앞쪽에 진행중이던 상담 비용이 더 비싸면 그거 선택하는게 이득
그럼 그리디는 아니고 완탐? -> 최악 케이스는? 15C1 + ... + 15C15 = 32767 가능!
'''

import sys
from itertools import combinations
input = sys.stdin.readline

n = int(input())
arr = [(i+1, *map(int, input().split())) for i in range(n)]

def calc_max_cost(selected_days):
  sum = 0
  today = 0

  for reserve_date, spend_time, cost in selected_days:
    if_reserve_do = reserve_date + spend_time - 1
    # 오늘이 상담 날짜보다 이전 날짜거나 같으면 이행 가능 그리고 이 상담을 끝내는 날이 퇴사날을 넘어가면 안됨
    if today <= reserve_date and if_reserve_do <= n: 
      sum += cost
      today = reserve_date + spend_time

  return sum

max_cost = 0

for i in range(n):
  for selected_days in combinations(arr, i+1):
    max_cost = max(max_cost, calc_max_cost(selected_days))

print(max_cost)