import sys
from collections import deque
input = sys.stdin.readline

da = [-1,1,-1,1] 
db = [-1,1,1,-1]

n,a,b = map(int,input().split())

k = 0
q = deque([[k,a,b]])
while(q):
    arr = q.pop()
    k = arr[0]
    a = arr[1]
    b = arr[2]
    if(a == b):
        print(k)
        exit(1)
    for i in range(4):
        aa = a + da[i]*2**k
        bb = b + db[i]*2**k
        if(0<=aa and aa <n and 0<=bb and bb<n):
            #print(k+1,aa,bb)
            q.appendleft([k+1,aa,bb])
print("-1")