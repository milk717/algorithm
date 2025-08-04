import sys
input = sys.stdin.read

data = input().split()
T = int(data[0])
nums = list(map(int, data[1:]))

max_n = max(nums)
count = [[0, 0] for _ in range(max_n + 1)]

count[0] = [1, 0]

if max_n > 0:
    count[1] = [0, 1]

for i in range(2, max_n + 1):
    count[i][0] = count[i-1][0] + count[i-2][0]
    count[i][1] = count[i-1][1] + count[i-2][1]

for n in nums:
    print(count[n][0], count[n][1])