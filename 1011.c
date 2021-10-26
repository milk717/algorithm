#include <stdio.h>
#include <math.h>
int main(void)
{
    int T;
    scanf("%d", &T);
    for (int t = 0; t < T; t++) {
        long long x, y,di,bu = 1,i = 0,count = 0,dif;
        scanf("%lld %lld", &x, &y);
        di = (long long)sqrt(y - x);
        dif = y - x;
        if ( dif == pow(di,2)) { //두 지점의 거리가 제곱수일때
            printf("%lld\n", (2 * di) - 1);
        }
        else if (pow(di, 2) < dif && dif <= pow(di, 2) + di) {
            printf("%lld\n", 2 * di);
        }
        else if (pow(di, 2) + di < dif && dif < pow(di + 1, 2)) {
            printf("%lld\n", (2 * di) + 1);
        }
    }
    return 0;
}
