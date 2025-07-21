import sys

input = sys.stdin.readline

n = int(input().strip())

students = [tuple(input().split()) for _ in range(n)]

students.sort(key=lambda x: (x[1], x[0]))

for first, last in students:

    print(first, last)