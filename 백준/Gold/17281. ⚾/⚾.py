"""
선수 배열 = 8!
이닝 n = 50
8! * 50 = 2,016,000 -> 완탐 가능

1. 선수 순서 배열 permutations
2. 게임 진행
"""

import sys
from itertools import permutations


input = sys.stdin.readline


def solve():
    n = int(input())
    arr = [[0, *map(int, input().split())] for _ in range(n)]

    res = 0
    for x in permutations(range(2, 10), 8):
        players = [*x[0:3], 1, *x[3:]]

        nxt_player_idx = 0
        total_score = 0

        for game in range(n):
            b1, b2, b3 = 0, 0, 0
            out_cnt = 0
            cur_player_idx = nxt_player_idx

            while True:
                if out_cnt >= 3:
                    nxt_player_idx = cur_player_idx
                    break

                cur_player = players[cur_player_idx]
                cur_score = arr[game][cur_player]
                cur_player_idx = (cur_player_idx + 1) % 9

                if cur_score == 0:
                    out_cnt += 1
                else:
                    if cur_score == 1:
                        total_score += b3
                        b3, b2, b1 = b2, b1, 1
                    elif cur_score == 2:
                        total_score += b3 + b2
                        b3, b2, b1 = b1, 1, 0
                    elif cur_score == 3:
                        total_score += b3 + b2 + b1
                        b3, b2, b1 = 1, 0, 0
                    elif cur_score == 4:
                        total_score += b3 + b2 + b1 + 1
                        b3, b2, b1 = 0, 0, 0

        res = max(res, total_score)

    print(res)


solve()
