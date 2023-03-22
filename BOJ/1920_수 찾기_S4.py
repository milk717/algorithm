import sys

sysInput = sys.stdin.readline

n = int(sysInput())
arrN = list(map(int, sysInput().split()))

m = int(sysInput())
arrM = list(map(int, sysInput().split()))

arrN.sort()
result = [0 for _ in range(m)]

for i in range(m):
    target = arrM[i]
    left = 0
    right = n - 1
    while left <= right:
        mid = (left + right) // 2
        if arrN[mid] == target:
            result[i] = 1
            break
        elif arrN[mid] < target:
            left = mid + 1
        elif arrN[mid] > target:
            right = mid - 1

for num in result:
    print(num)
