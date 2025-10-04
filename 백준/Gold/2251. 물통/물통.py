import sys
from collections import deque
from itertools import permutations


def bfs(cups):
    a, b, c = cups
    init_water = (0, 0, c)
    dq = deque([init_water])
    visited = set([init_water])
    c_water = set([c])

    while dq:
        cur_water_status = dq.popleft()

        for from_cup, to_cup in permutations(range(3), 2):
            next_water_status_list = list(cur_water_status)
            # 그냥 단순히 교환 하면 안되고, 사이즈 고려 해서 교환
            from_cup_size, to_cup_size = cups[from_cup], cups[to_cup]
            from_cup_water, to_cup_water = cur_water_status[from_cup], cur_water_status[to_cup]

            # 현재 옮기려는 컵에 물이 없거나, 목적지인 컵에 물이 가득차있으면 스킵
            if from_cup_water == 0 or to_cup_water == to_cup_size:
                continue

            # 용량: 2 3 8
            # 현재: 1 0 8
            # 현재 컵에 있는 물의 양이 옮기려는 통의 남은 양보다 많을 때
            # 같을때는?
            # 용량: 9 3 8
            # 현재: 1 0 8
            if from_cup_water >= to_cup_size - to_cup_water:
                next_water_status_list[from_cup] -= to_cup_size - to_cup_water
                next_water_status_list[to_cup] += to_cup_size - to_cup_water
            # 용량: 9 3 3
            # 현재: 2 0 1
            # from_cup_water < to_cup_size - to_cup_water
            else:
                next_water_status_list[from_cup] -= from_cup_water
                next_water_status_list[to_cup] += from_cup_water

            next_water_status = tuple(next_water_status_list)
            if next_water_status not in visited:
                dq.append(next_water_status)
                visited.add(next_water_status)

                if next_water_status[0] == 0:
                    c_water.add(next_water_status[2])

    return c_water


if __name__ == '__main__':
    input = sys.stdin.readline
    cups = list(map(int, input().split()))
    res = bfs(cups)
    print(*sorted(res))



