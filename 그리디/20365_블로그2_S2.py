"""
해결 파란색, 미해결 빨간색
첫줄입력 == 색칠해야하는 문제 수
두번째줄입력 == 무슨색으로 칠할지
"""
#RRBB => 2나와야하는데 아래 코드대로면 3나옴
#RRBBRRR => 3

""" 이거아님. 두개같은경우는 상황마다 달라서 두개다 계산해야함
일단 많이 칠해야하는 색으로 전체를 칠해보자.
그 다음에 나머지 칠해야 하는 색이 연속돼있는지 띄어져있는지에 따라 최솟값 결정
"""
import sys
n = int(sys.stdin.readline())
str = sys.stdin.readline().rstrip()

cntR = 0
cntB = 0
i = 0
while(i<n):
	if(str[i] == "R"): 	
		i += 1
		continue	
	else:
		j = i
		cntB += 1
		while(j<n-1):
			if(str[j] == str[j+1]): 
				j += 1
				i = j+1
			else:
				i = j+1
				break
	i+=1

i = 0	
while(i<n):
	if(str[i] == "B"): 	
		i += 1	
		continue
	else:
		j = i
		cntR += 1
		while(j<n-1):
			if(str[j] == str[j+1]): 
				j += 1
				i = j+1
			else:
				i = j+1
				break
	i+=1

res = min(cntR,cntB)
print(res+1)
