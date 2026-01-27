import sys

input = sys.stdin.readline
print = sys.stdout.write

k = int(input())

a, b = 1, 0

for _ in range(k):
    a, b = b, a + b

print(f"{a} {b}")
