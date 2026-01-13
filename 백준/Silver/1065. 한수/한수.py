import sys

input = sys.stdin.readline

n = int(input())
arr = list(map(lambda x: list(map(int, list(str(x)))), range(111, n + 1)))

res = 99 if n >= 99 else n

for row in arr:
    for i in range(2, len(row)):
        if row[1] - row[0] != row[i] - row[i - 1]:
            break
        else:
            if i == len(row) - 1:
                res += 1

print(res)
