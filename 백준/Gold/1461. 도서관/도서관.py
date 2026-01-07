import sys
import math

input = sys.stdin.readline

n, m = map(int, input().split())
arr = list(sorted(map(int, input().split())))

plus = [0, *filter(lambda x: x > 0, arr)]
minus = [0, *sorted(map(lambda x: abs(x), filter(lambda x: x < 0, arr)))]
res = 0


def calc_plus():
    global res
    books_cnt = n - len(minus) + 1

    for i in range(1, len(plus)):
        distance = plus[i] - plus[i - 1]

        res += 2 * distance * (math.ceil((books_cnt - m) / m)) + distance

        books_cnt -= 1


def calc_minus():
    global res
    books_cnt = n - len(plus) + 1

    for i in range(1, len(minus)):
        distance = minus[i] - minus[i - 1]

        res += 2 * distance * (math.ceil((books_cnt - m) / m)) + distance

        books_cnt -= 1


if max(map(lambda x: abs(x), plus)) > max(map(lambda x: abs(x), minus)):
    calc_minus()
    res += minus[-1]
    calc_plus()
else:
    calc_plus()
    res += plus[-1]
    calc_minus()

print(res)
