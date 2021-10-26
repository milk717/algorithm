#include <iostream>
#include <string>
#include <cstdio>
using namespace std;
typedef long long int LL;
int mod = 1000000007;
LL res[1000001];
int main(void) {
    int n;
    cin >> n;
    res[0] = 1;
    res[1] = 1;
    res[2] = 3;
    res[3] = 5;
    for (int i = 4; i < 51; i++) {
        res[i] = (res[i - 1] + res[i - 2]+1)%mod;
    }
    cout << res[n];
}
