import sys

sysInput = sys.stdin.readline

n = int(sysInput())

arr = [[0 for _ in range(10)] for i in range(n)]

arr[0] = [1 for _ in range(10)]
arr[0][0] = 0

for i in range(1, n):
    for j in range(10):
        if j == 0:
            arr[i][j] = arr[i - 1][1]
        elif j == 9:
            arr[i][j] = arr[i - 1][8]
        else:
            arr[i][j] = (arr[i - 1][j - 1] + arr[i - 1][j + 1])

print(sum(arr[n - 1]) % 1000000000)
