""" """

import sys
import math

input = sys.stdin.readline

n = int(input())


def is_prime(num):
    for i in range(2, math.ceil(math.sqrt(num))):
        if num % i == 0:
            return False

    return True


def dfs(nums):
    number = int("".join(map(str, nums)))

    if not is_prime(number):
        # print(number, "early return")
        return

    if len(nums) == n:
        print(number)
        return

    for x in [1, 3, 7, 9]:
        dfs([*nums, x])


for x in [2, 3, 5, 7]:
    dfs([x])
