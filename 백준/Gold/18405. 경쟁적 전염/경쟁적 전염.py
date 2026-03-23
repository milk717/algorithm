import sys
from collections import deque, defaultdict

input = sys.stdin.readline

N, K = map(int, input().split())
board = [list(map(int, input().split())) for _ in range(N)]
S, X, Y = map(int, input().split())

directions = [(-1, 0), (0, 1), (1, 0), (0, -1)]
virus_positions = defaultdict(set)

def print_matrix(title):
    print(title, '='*N*3)
    for row in board:
        print(*row)


def in_range(r, c):
    return 0 <= r < N and 0 <= c < N
    

def bfs(sr, sc):
    dq = deque([(sr, sc)])
    visited = set([(sr, sc)])
    virus = board[sr][sc]

    while dq:
        cr, cc = dq.popleft()
        
        for dr, dc in directions:
            nr, nc = cr + dr, cc + dc

            if (nr, nc) not in visited and in_range(nr, nc):
                if board[nr][nc] == 0:
                    board[nr][nc] = virus
                    visited.add((nr, nc))
                    virus_positions[virus].add((nr, nc))


def is_edge(r, c):
    for dr, dc in directions:
        nr, nc = r + dr, c + dc

        if in_range(nr, nc) and board[nr][nc] == 0:
            return True

    return False


def spread():
    for virus in range(1, K+1):
        copied = virus_positions[virus].copy()
        for (r, c) in copied:
            if is_edge(r, c):
                bfs(r, c)

            virus_positions[virus].remove((r, c))
                
    # print_matrix('spread')

def main():
    for i in range(N):
        for j in range(N):
            x = board[i][j]
            if x != 0:
                virus_positions[x].add((i, j))

    for _ in range(S):
        spread()
    
    print(board[X-1][Y-1])

main()