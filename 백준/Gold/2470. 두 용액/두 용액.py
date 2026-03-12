'''
숫자가 크니까 이분탐색 고려? 아니지 숫자 자체가 큰거고, N은 별로 안큼
투포인터로 탐색하면서, 두 선택한 값이 양수일 때는 오른쪽 인덱스 줄이기, 음수일 때는 왼쪽 줄여가면서 절대값 최소 찾기
'''
import sys
input = sys.stdin.readline

def main(n, arr):
    left, right = 0, n - 1

    min_abs = float('inf')
    res = (left, right)

    while left < right:
        cur_sum = arr[left] + arr[right]
        cur_sum_abs = abs(cur_sum)

        if cur_sum_abs < min_abs:
            min_abs = cur_sum_abs
            res = (left, right)

        if cur_sum >= 0:
            right -= 1
        else:
            left += 1
    
    return res


if __name__ == "__main__":
    n = int(input())
    arr = sorted(list(map(int, input().split())))

    left, right = main(n, arr)

    print(*sorted([arr[left], arr[right]]))
