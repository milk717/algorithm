import sys
input = sys.stdin.readline

n = int(input())
groups = set()
for _ in range(n):
    word = input().strip()
    groups.add(''.join(sorted(word)))
print(len(groups))