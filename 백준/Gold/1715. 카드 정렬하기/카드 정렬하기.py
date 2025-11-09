import sys
import heapq
input = sys.stdin.readline

n = int(input())
cards = [int(input()) for _ in range(n)]
heapq.heapify(cards)

res = 0

while len(cards) >= 2:
    a, b = heapq.heappop(cards), heapq.heappop(cards)
    res += (a+b)
    heapq.heappush(cards, a+b)

print(res)