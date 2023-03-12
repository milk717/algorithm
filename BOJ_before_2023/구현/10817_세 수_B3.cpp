#include <iostream>
#include <string>

using namespace std;

int compare(const void* a, const void* b)
{
	const int* x = (int*)a;
	const int* y = (int*)b;

	if (*x > *y)
		return 1;
	else if (*x < *y)
		return -1;

	return 0;
}

int main() {
	int arr[3], max = 0;
	cin >> arr[0] >> arr[1] >> arr[2];

	qsort(arr, 3,sizeof(int), compare);
	cout << arr[1];
}