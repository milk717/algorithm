import sys

input = sys.stdin.readline

n = int(input())


arr = list(range(0, 10))


def find_decrease_num(next_num, nums, length):
    if length == len(nums):
        arr.append(int("".join(map(str, reversed(nums)))))
        return

    for i in range(next_num, 10):
        find_decrease_num(i + 1, [*nums, i], length)


i = 1

while len(arr) <= n and i <= 9:
    i += 1
    find_decrease_num(0, [], i)

arr.sort()
print(-1 if len(arr) <= n else arr[n])
