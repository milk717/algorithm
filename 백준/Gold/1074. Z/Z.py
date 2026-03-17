import sys

input = sys.stdin.readline

N, R, C = map(int, input().split())

def main(n, acc, r, c, cnt):
    # print(n, acc, r, c, cnt)
    if cnt == N:
        print(acc)
        return
    
    # 0
    if r < 2**(n-1) and c < 2**(n-1):
        # print(0)
        main(n-1, acc, r, c, cnt + 1)
    # 1
    elif r < 2**(n-1) and c >= 2**(n-1):
        # print(1)
        main(n-1, acc + 2**(2*(n-1)), r, c - (2**(n-1)), cnt+1)
    # 2
    elif r >= 2**(n-1) and c < 2**(n-1):
        # print(2)
        main(n-1, acc + 2 * (2**(2*(n-1))), r - (2**(n-1)), c, cnt+1)
    # 3
    elif r >= 2**(n-1) and c >= 2**(n-1):
        # print(3)
        main(n-1, acc + 3 * (2**(2*(n-1))), r - (2**(n-1)), c - (2**(n-1)), cnt+1)

main(N, 0, R, C, 0)