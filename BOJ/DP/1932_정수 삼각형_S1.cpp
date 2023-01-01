#include<iostream>
#include<algorithm>
using namespace std;

int arr[500][500];
int res[500][500];

int main(void)
{
	int n, output = 0;
	cin >> n;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j <= i; j++) {
			cin >> arr[i][j];
		}
	}

	res[0][0] = arr[0][0];

	for (int i = 1; i < n; i++) {
		for (int j = 0; j <= i; j++) {
			if (j - 1 >= 0) {
				res[i][j] = max(res[i - 1][j - 1], res[i - 1][j]) + arr[i][j];
			}
			else {
				res[i][j] = res[i - 1][j] + arr[i][j];
			}
		}
	}

	for (int i = 0; i < n; i++) {
		for (int j = 0; j <= i; j++) {
			output = max(output, res[i][j]);
		}
	}

	cout << output;
}