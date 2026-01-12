import sys

input = sys.stdin.readline

n = int(input())

arr = [[" "] * ((2 * n) - 1) for _ in range(2 * n)]


def print_star(arr):
    print("\n".join(map(lambda x: "".join(x), arr)))


def triangle(r, c, size):
    if size == 3:
        arr[r][c] = "*"
        arr[r + 1][c - 1] = "*"
        arr[r + 1][c + 1] = "*"

        for i in range(-2, 3):
            arr[r + 2][c + i] = "*"

        return

    half = size // 2
    triangle(r, c, half)
    triangle(r + half, c - half, half)
    triangle(r + half, c + half, half)


triangle(0, n - 1, n)

print_star(arr)
