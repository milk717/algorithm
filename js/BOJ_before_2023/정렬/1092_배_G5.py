N = int(input())
wl = list(map(int, input().split()))
M = int(input())
bw = list(map(int, input().split()))
cnt = 0
wl.sort(reverse=True)
bw.sort(reverse=True)
if wl[0] < bw[0]:
    cnt = -1
else :
    while(True):
        if len(bw) == 0 : break
        for i in range(N):
            for j in range(len(bw)):
                if wl[i] >= bw[j]:
                    del bw[j]
                    break
        cnt += 1
print(cnt)
