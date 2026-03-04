import sys
from itertools import product 

input = sys.stdin.readline

'''
3^8 * 10 = 6561 * 10 = 65610
'''

def str_to_num(str_or_num):
    string = str(str_or_num)
    return int(''.join(string.split(' ')))

def calc(expr):
    res = str_to_num(expr[0])

    for i in range(1, len(expr), 2):
        if expr[i] == '+':
            res += str_to_num(expr[i+1])
        elif expr[i] == '-':
            res -= str_to_num(expr[i+1])
        
    return res


t = int(input())

for _ in range(t):
    n = int(input())

    res = []
    for signs in product(['+', '-', ' '], repeat=n-1):
        expr = [1]
        # print(*signs)

        num = 2
        for sign in signs:
            if sign == ' ':
                expr.append(f'{expr.pop()} {num}')
            else:
                expr.append(sign)
                expr.append(num)
            
            num += 1

        # print(''.join(map(str, expr))
        if calc(expr) == 0:
            res.append(''.join(map(str, expr)))

    print('\n'.join(sorted(res)))
    print()
            

