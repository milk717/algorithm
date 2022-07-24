from collections import deque

def solution(priorities, location):
    queue = deque()
    cnt = 0
    maxPrioritie = max(priorities)

    for i in range(0, len(priorities)):
        queue.append([i, priorities[i]])


    while queue:
        now = queue.popleft()
        if now[1] == maxPrioritie:  #현재 대기열 맨앞 프린터가 최고 우선순위 일 때
            cnt += 1
            if now[0] == location:
                return cnt
            priorities.remove(now[1])
            maxPrioritie = max(priorities)
        else:                       #현재 대기열 맨앞 프린터가 최고 우선순위가 아닐 때
            queue.append(now)