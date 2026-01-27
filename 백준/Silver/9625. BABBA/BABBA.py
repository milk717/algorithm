"""
(1, 0):A
(0, 1):B
(1, 1):BA
(1, 2):BAB
(2, 3):BABBA
"""

import sys

input = sys.stdin.readline

k = int(input())

a, b = 1, 0

for _ in range(k):
    a, b = b, a + b

print(a, b)
