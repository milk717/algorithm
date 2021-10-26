import sys
N, M = map(int,sys.stdin.readline().split())
maze = []
for i in range(N):
    maze.append(list(input()))
q = [[0,0]]
visit = [[0]*M for i in range(N)]
visit[0][0] = 1
#print(maze)
#print(q)
#print(visit)
i = 0
while (q):
    #print("q = ",q)
    y, x = q.pop(0)
    if (y == N-1 and x == M-1):
        print(visit[y][x])
        break
    if (x-1 >= 0 and maze[y][x-1] == '1'and visit[y][x-1] == 0):
        visit[y][x-1] = visit[y][x]+1
        q.append([y, x-1])
    if (x+1 < M and maze[y][x+1] == '1'and visit[y][x+1] == 0):
        visit[y][x+1] = visit[y][x]+1
        q.append([y, x+1]) 
    if (y-1 >= 0 and maze[y-1][x] == '1'and visit[y-1][x] == 0):
        visit[y-1][x] = visit[y][x]+1
        q.append([y-1,x])
    if (y+1 < N and maze[y+1][x] == '1'and visit[y+1][x] == 0):
        visit[y+1][x] = visit[y][x]+1
        q.append([y+1,x])
    #print("visit = ",visit)
  
