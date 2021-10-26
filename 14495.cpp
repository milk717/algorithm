#include <iostream>
#include <string>
#include <cstdio>
using namespace std;
typedef long long int LL;
LL res[117];
int main(void) {
    int n;
    cin >> n;
    res[0] = 1;
    res[1] = res[2] = res[3] = 1;
    for (int i = 4; i <= 116; i++) {
        res[i] = res[i - 1] + res[i - 3];
    }
    cout << res[n];
}
