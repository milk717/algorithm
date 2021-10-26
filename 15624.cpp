#include <iostream>
#include <string>
#include <cstdio>
using namespace std;
typedef long long int LL;
LL res[1000001];
int main(void) {
    int n;
    cin >> n;
    res[0] = 0;
    res[1] = 1;
    res[2] = 1;
    res[3] = 2;
    for (int i = 4; i < 1000001; i++) {
        res[i] = (res[i - 1] + res[i - 2])%1000000007;
    }
    cout << res[n];
}
