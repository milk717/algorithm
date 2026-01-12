import sys

input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().split()))
largest = [arr[0]]


def binary_search(arr, l, r, target):
    while l <= r:
        mid = (l + r) // 2

        if arr[mid] < target:
            l = mid + 1
        else:
            r = mid - 1

    return l


i = 1
for x in arr[1:]:
    if x <= largest[-1]:
        index = binary_search(largest, 0, i, x)
        largest[index] = x
    else:
        largest.append(x)
        i += 1

print(len(largest))
