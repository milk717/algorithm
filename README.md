# 노트 정리
> [!NOTE]
> 각 유형별 자주 쓰는 코드 스니펫 정리 with 파이썬

## 누적합
```python
# arr = [1, 3, 4, 5, 8, 10]

prefix_sum = [0]
for index, num in enumerate(arr):
	prefix_sum.append(prefix_sum[-1] + num)
	
# prefix_sum = [1, 4, 8, 13, 21, 31]
```
- `prefix_sum` 초기에 0 넣는 이유?
	- 누적합 배열 기반으로 구간합 구한다고 가정했을 때. 예를들어 구간 2~4까지의 합
	- 그러면 포함되는 요소는 `arr[2] + arr[3] + arr[4]` 임
	- 이를 구하려면 `prefix_sum[4] - prefix_sum[1] = 21 - 4 = 17`
	- 실제로 더한다면 `arr[2] + arr[3] + arr[4] = 4 + 5 + 8 =17` 
	- 즉 `구간의 끝 - 구간의 시작 - 1 지점`으로 구간합 구해야함.
	- 구간 시작이 0인 경우도 있기 때문에 인덱스 0 자리에 0 넣어야 계산 편함
## 투포인터
### Only 투포인터
- target_num을 만족하는 가장 짧은 연속된 수열의 길이라고 가정했을 때
```python
# arr = [1, 3, 4, 5, 8, 10]
# target_num = 13

left = 0
right = 0
total = 0
min_len = float('inf')

while True:
	if right == len(arr):
		break
		
	if total >= target_num:
		min_len = min(min_len, right - left)
		total -= arr[left]
		left += 1
	else:
		total += arr[right]
		right += 1
```
### prefix_sum + 투포인터
- target_num을 만족하는 가장 짧은 연속된 수열의 길이라고 가정했을 때
```python
# arr = [1, 3, 4, 5, 8, 10]
# target_num = 13

prefix_sum = [0]
for index, num in enumerate(arr):
	prefix_sum.append(prefix_sum[-1] + num)

left = 0
right = 0
min_len = float('inf')

while right <= len(arr):
	total = prefix_sum[right] - prefix_sum[left]
	if total >= target_num:
		min_len = min(min_len, right - left)
		left += 1
	else:
		right += 1
```
- `total = prefix_sum[right] - prefix_sum[left]`인 이유는 보통 range 잡을 때 start ~ end라고 가정하면
- start index는 포함되고, end인덱스는 포함 x (파이썬 range 생각하면 쉬움)이기 때문
