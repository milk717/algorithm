import sys
t = int(sys.stdin.readline())

arr = [0 for i in range(12)]
arr[0] = 1
arr[1] = 2
arr[2] = 4
arr[3] = 7

for i in range(t):
    n = int(sys.stdin.readline())
    for j in range(4,n):
        arr[j] = arr[j-1]+arr[j-2]+arr[j-3]
    print(arr[n-1])
