#include <stdio.h>
int main(void)
{
    int end[] = { 0,31,28,31,30,31,30,31,31,30,31,30,31 };
    char *a[7] = { "SUN","MON","TUE","WED","THU","FRI","SAT", };
    int x, y;
    scanf("%d %d", &x, &y);
    for (int i = 0; i < x; i++) {
        y += end[i];
    }
    printf("%s\n", a[y % 7]);
}
