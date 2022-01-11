import sys
t = int(sys.stdin.readline())
arr = []

for i in range(t):
    a = list(map(int,sys.stdin.readline().split()))
    arr.append(a)

for i in range(1, t):
    for j in range (3):
        if(j == 0):
            arr[i][0] += min(arr[i-1][1],arr[i-1][2])
        elif(j == 1):
            arr[i][1] += min(arr[i-1][0],arr[i-1][2])
        else:
            arr[i][2] += min(arr[i-1][0],arr[i-1][1])

print(min(arr[t-1]))