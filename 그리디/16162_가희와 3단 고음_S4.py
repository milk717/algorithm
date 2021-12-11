# 3개의 음, 1음부터시작, 몇음씩증가

import sys
n,a,d = map(int,sys.stdin.readline().split())

arr = list(map(int,sys.stdin.readline().split()))

x = 0 #몇단고음까지 가능한지

for i in arr:
    #print("="*10)
    #print("i == (x)*d + a",i,(x)*d + a)
    if (i == (x)*d + a):
    	x+=1
    #print("x가",x)
    
print(x)
