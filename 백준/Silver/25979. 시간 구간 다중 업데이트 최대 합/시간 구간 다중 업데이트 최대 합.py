import sys
input = sys.stdin.readline

def time_to_index(time):
  h, m, s = map(int, time.split(':'))
  return (h*60*60) + (m*60) + s

n = int(input())
times = [0] * ((24*60*60)+1)
window_size = 0

# 질의 입력받기
for i in range(n):
  type, *_range = input().rstrip().split()

  if int(type) == 1:
    start, end = map(time_to_index, _range)

    times[start] += 1
    times[end] -= 1
  else:
    window_size = time_to_index(_range[0])

# 차분 배열로 누적합 배열 만들기
for i in range(1, len(times)):
  times[i] += times[i-1] 

# 슬라이딩 윈도우로 계산
time_len = sum(times[:window_size])
res = time_len
for i in range(window_size, len(times)):
  time_len += times[i] - times[i-window_size]
  res = max(res, time_len)
    
print(res)