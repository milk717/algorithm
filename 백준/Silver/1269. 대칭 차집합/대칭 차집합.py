import sys
input = sys.stdin.readline

a_len, b_len = map(int, input().split())
a = set(map(int, input().split()))
b = set(map(int, input().split()))

sym_diff = a ^ b
print(len(sym_diff))