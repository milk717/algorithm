def selection_sort(arr):
  for i in range(len(arr)):
    min_index = arr.index(min(arr[i:]))
    arr[i], arr[min_index] = arr[min_index], arr[i]
  return arr

arr = [10, 7, 8, 9, 1, 5]
print(selection_sort(arr))