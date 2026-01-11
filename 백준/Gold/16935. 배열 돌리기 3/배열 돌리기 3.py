import sys
from itertools import permutations


def print_matrix(arr):
    for row in arr:
        print(*row)


# 상하반전
def command1(arr):
    arr.reverse()


# 좌우반전
def command2(arr):
    for row in arr:
        row.reverse()


# 오른쪽으로 90도 회전
def command3(arr):
    arrT = list(map(list, zip(*arr)))

    for row in arrT:
        row.reverse()

    return arrT


# 왼쪽으로 90도 회전
def command4(arr):
    for row in arr:
        row.reverse()

    arrT = list(map(list, zip(*arr)))

    return arrT


def command5(arr, n, m):
    new_arr = [[0] * m for _ in range(n)]

    # 4 -> 1
    for i in range(n // 2, n):
        for j in range(m // 2):
            new_arr[i - n // 2][j] = arr[i][j]

    # 1 -> 2
    for i in range(n // 2):
        for j in range(m // 2):
            new_arr[i][j + m // 2] = arr[i][j]

    # 2 -> 3
    for i in range(n // 2):
        for j in range(m // 2, m):
            new_arr[i + n // 2][j] = arr[i][j]

    # 3 -> 4
    for i in range(n // 2, n):
        for j in range(m // 2, m):
            new_arr[i][j - m // 2] = arr[i][j]

    return new_arr


def command6(arr, n, m):
    new_arr = [[0] * m for _ in range(n)]

    # 1 -> 4
    for i in range(n // 2):
        for j in range(m // 2):
            new_arr[i + n // 2][j] = arr[i][j]

    # 4 -> 3
    for i in range(n // 2, n):
        for j in range(m // 2):
            new_arr[i][j + m // 2] = arr[i][j]

    # 3 -> 2
    for i in range(n // 2, n):
        for j in range(m // 2, m):
            new_arr[i - n // 2][j] = arr[i][j]

    # 2 -> 1
    for i in range(n // 2):
        for j in range(m // 2, m):
            new_arr[i][j - m // 2] = arr[i][j]

    return new_arr


def main():
    input = sys.stdin.readline
    n, m, r = map(int, input().split())
    arr = [list(map(int, input().split())) for _ in range(n)]
    commands = map(int, input().split())

    for command in commands:
        if command == 1:
            command1(arr)
        elif command == 2:
            command2(arr)
        elif command == 3:
            arr = command3(arr)
            n, m = m, n
        elif command == 4:
            arr = command4(arr)
            n, m = m, n
        elif command == 5:
            arr = command5(arr, n, m)
        elif command == 6:
            arr = command6(arr, n, m)

    print_matrix(arr)


main()
