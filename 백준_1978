#include <stdio.h>
#include <math.h>
int a[1000001] = { 0, };
int main(void)
{
    int N, b[100] = { 0, };
    scanf("%d",&N);
    for (int n = 0; n < N; n++) {
        scanf("%d", &b[n]);
    }
    a[0] = 1, a[1] = 1;
    for (int i = 2; i < 1000001 / i; i++)
    {
        if (a[i] == 1) continue;
        for (int j = i * i; j < 1000001; j += i)
        {
            if (j % i == 0) a[j] = 1;
        }
    }
    int cnt = 0;
    for (int i = 0; i < N; i++) {
        if (a[b[i]] == 0) cnt++;
    }
    printf("%d", cnt);
    return 0;
}
