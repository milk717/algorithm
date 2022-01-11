"""
만약 지금 가려는 오리가 루트노드로 가고싶어한다면 무조건 갈 수 있음
하지만 루트 노드로 간 오리가 있다면 다른 오리들은 이제 땅으로 못감.

현재 오리가 가려는 땅의 번호에서 계속해서 루트노드로 타고올라가면서 비어있는지 확인하기
"""

import sys
import math
input = sys.stdin.readline

n,q = map(int,input().split())

arr = []  #오리의 희망땅 저장할 배열  
visited = list(0 for i in range(n+1))    #땅 방문처리 하고
res = list(0 for i in range(q)) #처음 마주치는 점유된 땅의 번호 저장할 배열

for i in range(q):
    arr.append(int(input().rstrip()))

#지금오리가 가려는 땅이 주인없는 땅이고, 루트노드가 모두 비어있다면 갈 수 있음. 
#왼쪽이던 오른쪽이던 노드의 부모는 인덱스를 2로 나눈 것의 몫
for i in range(len(arr)):
    #print("arr",arr[i])
    parentIndex = arr[i]
    h = int(math.log2(arr[i]))+1    #가려는 노드가 몇층에 있는지(첫층 일층)
    for j in range(h):  
        #print("parentIndex",parentIndex)
        if(visited[parentIndex]!=0):
            res[i] = parentIndex
        parentIndex = (parentIndex//2)

    if(res[i] == 0):
        visited[arr[i]] = 1
    #print(res)
      
for x in res:
    print(x)