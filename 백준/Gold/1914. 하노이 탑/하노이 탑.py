import sys

input = sys.stdin.readline

res = []


def hanoi(n, start, end, mid):
    if n == 1:
        res.append(f'{start} {end}')
        return
    
    hanoi(n-1, start, mid, end)
    res.append(f'{start} {end}')
    hanoi(n-1, mid, end, start)


n = int(input())

print(2**(n) - 1)

if n <= 20:
    hanoi(n, 1, 3, 2)
    print('\n'.join(res))