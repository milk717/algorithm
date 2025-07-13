#include <iostream>
#include <algorithm>
#include <queue>
typedef long long int ll;
using namespace std;
ll res[1000000];
int main(void) {
	int N;
	cin >> N;
	res[0] = 0;
	res[1] = 1;
	res[2] = 2;
	res[3] = 3;
	res[4] = 5;
	//00 11
	//001 100 111
	//0011 0000 1001 1100 1111
	//00111 00001 10011 11001 11111 11100 00100 10000
	for (int i = 4; i <= N; i++) {
		res[i] = (res[i - 1]%15746 + res[i - 2]%15746)%15746;
		//cout << res[i] << '\n';
	}
	cout << res[N];
}
