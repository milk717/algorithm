def insert_sort(arr):
  for i in range(1, len(arr)):
    key = arr[i]
    j = i - 1
    while j >= 0 and arr[j] > key:
      arr[j+1] = arr[j]
      j -= 1
    arr[j+1] = key
  return arr

arr = [10, 7, 8, 9, 1, 5]
print(insert_sort(arr))