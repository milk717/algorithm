import sys
from itertools import permutations

input = sys.stdin.readline

n, m, k = map(int, input().split())
a = [list(map(int, input().split())) for _ in range(n)]
commands = [tuple(map(int, input().split())) for _ in range(k)]


def print_matrix(matrix):
    for row in matrix:
        print(*row)
    print()


def rotate_matrix(matrix, cmd):
    r, c, s = cmd
    r -= 1
    c -= 1

    for k in range(s, 0, -1):
        top, left = r - k, c - k
        bottom, right = r + k, c + k

        cur = matrix[top][left]

        # top
        for col in range(left + 1, right + 1):
            matrix[top][col], cur = cur, matrix[top][col]

        # right
        for row in range(top + 1, bottom + 1):
            matrix[row][right], cur = cur, matrix[row][right]

        # bottom
        for col in range(right - 1, left - 1, -1):
            matrix[bottom][col], cur = cur, matrix[bottom][col]

        # left
        for row in range(bottom - 1, top - 1, -1):
            matrix[row][left], cur = cur, matrix[row][left]

def find_min_row(matrix):
    return min([sum(row) for row in matrix])


res = float("inf")
for t in permutations(commands):
    a_copy = [row.copy() for row in a]
    for cmd in t:
        rotate_matrix(a_copy, cmd)

    res = min(res, find_min_row(a_copy))

print(res)