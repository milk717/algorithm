import sys

sysInput = sys.stdin.readline

n = int(sysInput())

arr = [0 for _ in range(10001)]

for i in range(n):
    number = int(sysInput())
    arr[number]+=1

for i in range(10001):
    for j in range(arr[i]):
        print(i)