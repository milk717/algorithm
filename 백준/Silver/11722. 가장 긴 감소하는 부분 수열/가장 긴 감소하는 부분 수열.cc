#include<iostream>
#include<algorithm>
using namespace std;

int arr[1001];
int res[1001];

int main(void)
{
	int n,check;
	cin >> n;

	for (int i = 0; i < n; i++) {
		cin >> arr[i];
	}

	res[0] = 1;

	for (int k = 1; k < n; k++) {		//res 돌기
		check = 0;
		for (int i = 1; i <= k; i++) {
			if (arr[k] < arr[k - i]) {
				res[k] = max(res[k - i] + 1,res[k]);
				check = 1;
			}
			else if (k - i == 0 && !check) {
				res[k] = 1;
				break;
			}
		}
	}

	int output = 0;
	for (int i = 0; i < n; i++) {
		output = max(output, res[i]);
		//cout << res[i] << ", ";
	}
	//cout << endl;
	cout << output;
}