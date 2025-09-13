import sys
from collections import deque
from itertools import combinations
input = sys.stdin.readline

n, m = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(n)]
max_size = 0

empty_place = [(r, c) for r in range(n) for c in range(m) if arr[r][c] == 0]
virus_place = [(r, c) for r in range(n) for c in range(m) if arr[r][c] == 2]
  
def bfs(seleted_partition):
  dq = deque()
  board = []

  for i in range(n):
    board.append([])
    for j in range(m):
      data = arr[i][j]
      board[i].append(data)

      if data == 2:
        dq.append((i, j))

  for r, c in seleted_partition:
    board[r][c] = 1

  while len(dq):
    row, col = dq.popleft()

    for dr, dc in zip([-1, 0, 1, 0], [0, 1, 0, -1]):
      next_row = row + dr
      next_col = col + dc
        
      if 0 <= next_row < n and 0 <= next_col < m:
        if board[next_row][next_col] == 0:
          board[next_row][next_col] = 2
          dq.append((next_row, next_col))

  safe_cnt = 0
  for i in range(n):
    for j in range(m):
      if board[i][j] == 0:
        safe_cnt += 1
  
  return safe_cnt

for seleted_partition in combinations(empty_place, 3):
  max_size = max(max_size, bfs(seleted_partition))

print(max_size)