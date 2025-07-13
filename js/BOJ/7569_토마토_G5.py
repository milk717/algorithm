import sys
from collections import deque
n,m,h = map(int,input().split())
boxList = []
queue = deque([])
 
for i in range(h):
    tmpList = []
    for j in range(m):
        tmpList.append(list(map(int,sys.stdin.readline().split())))
        for k in range(n):
            if tmpList[j][k]==1:
                queue.append([i,j,k,0])
    boxList.append(tmpList)


heiList = [1,-1,0,0,0,0];
rowList = [0,0,-1,1,0,0];
colList = [0,0,0,0,-1,1];
day = 0

while(queue):
    curHei,curRow, curCol,cnt = queue.popleft()
    day = cnt

    for i in range(6):
        tarHei = curHei + heiList[i]
        tarRow = curRow + rowList[i]
        tarCol = curCol + colList[i]
        if 0<=tarHei<h and 0<=tarRow<m and 0<=tarCol<n and boxList[tarHei][tarRow][tarCol] == 0:
            queue.append([tarHei, tarRow, tarCol, cnt+1])
            boxList[tarHei][tarRow][tarCol] = 1

for i in range(h):
    for j in range(m):
        for k in range(n):
            if boxList[i][j][k] == 0:
                print(-1)
                exit(0)
            
print(day)