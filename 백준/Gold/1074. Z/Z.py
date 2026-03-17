import sys

input = sys.stdin.readline

N, R, C = map(int, input().split())

def main(n, acc, r, c):
    # print(n, acc, r, c, cnt)
    if n == 0:
        return acc
    
    # 0
    if r < 2**(n-1) and c < 2**(n-1):
        # print(0)
        return main(n-1, acc, r, c)
    # 1
    elif r < 2**(n-1) and c >= 2**(n-1):
        # print(1)
        return main(n-1, acc + 2**(2*(n-1)), r, c - (2**(n-1)))
    # 2
    elif r >= 2**(n-1) and c < 2**(n-1):
        # print(2)
        return main(n-1, acc + 2 * (2**(2*(n-1))), r - (2**(n-1)), c)
    # 3
    elif r >= 2**(n-1) and c >= 2**(n-1):
        # print(3)
        return main(n-1, acc + 3 * (2**(2*(n-1))), r - (2**(n-1)), c - (2**(n-1)))

print(main(N, 0, R, C))