#include <stdio.h>
#include <math.h>
int a[1000001] = { 0,};
int main(void)
{
    int m, n;
    scanf("%d %d", &m, &n);
    a[0] = 1, a[1] = 1;
    for (int i = 2; i < 1000001/i; i++)
    {
        if (a[i] == 1) continue;
        for (int j = i*i; j < 1000001; j += i)
        {
            if(j%i == 0) a[j] = 1;
        }
    }
    for (int i = m; i <= n; i++) {
        if (a[i] == 0) printf("%d\n", i);
    }
    return 0;
}
