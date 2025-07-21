'''
더한 값이 음수면 left쪽이 더 크다는 것 -> left인덱스를 증가시키기 -> 0이랑 더 가까워질 수 있음
더한 값이 양수면 right쪽이 더 크다는 것 -> right인덱스를 감소시키기 -> 0이랑 더 가까워질 수 있음
'''
import sys
input = sys.stdin.readline

n = int(input())
arr = sorted(list(map(int, input().split())))

def main():
  left = 0
  right = n - 1
  s = arr[left] + arr[right]
  
  while left < right:
    temp = arr[left] + arr[right]
    
    if abs(temp) < abs(s):
      s = temp
  
    if temp == 0:
      return 0
  
    if temp < 0:
      left += 1
    else:
      right -= 1

  return s

print(main())