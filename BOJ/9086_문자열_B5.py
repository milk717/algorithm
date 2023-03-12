import sys
input = sys.stdin.readline

n = int(input())

for i in range(n):
    word = input()
    print(word[0]+word[-2])

