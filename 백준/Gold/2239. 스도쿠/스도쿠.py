'''
1. row에서 가능한 수 모두 반환
2. col에서 가능한 수 모두 반환
3. box에서 가능한 수 모두 반환

1, 2, 3 교집합 중 사전순으로 가장 작은 숫자 뽑아서 채우고
다음 재귀 돌리기 
'''
import sys
input = sys.stdin.readline

def find_empty(board):
    empty = []

    for i in range(9):
        for j in range(9):
            if board[i][j] == 0:
                empty.append((i, j))
    
    return empty


def is_avaiable(board, r, c, num):
    # 행 가능한지 검사
    for j in range(9):
        if board[r][j] == num:
            return False
    
    # 열 가능한지 검사
    for i in range(9):
        if board[i][c] == num:
            return False
    
    # 박스 가능한지 검사
    box_start_row = (r // 3) * 3
    box_start_col = (c // 3) * 3
    for i in range(box_start_row, box_start_row + 3):
        for j in range(box_start_col, box_start_col + 3):
            if board[i][j] == num:
                return False
    
    return True


def print_board(board):
    for row in board:
        print(''.join(map(str, row)))


def dfs(board, empty, index):
    if index == len(empty):
        print_board(board)
        sys.exit(0)

    r, c = empty[index]

    for num in range(1, 10):
        if is_avaiable(board, r, c, num):
            board[r][c] = num
            dfs(board, empty, index + 1)
            board[r][c] = 0


def main():
    board = [list(map(int, list(input().rstrip()))) for _ in range(9)]
    empty = find_empty(board)

    dfs(board, empty, 0)



if __name__ == "__main__":
    main()
