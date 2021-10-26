#include <stdio.h>
#include <math.h>
#include <stdlib.h>
int main(void)
{
    int size;
    scanf("%d", &size);
    for (int i = 0; i < size; i++) {
        int x1, y1, r1, x2, y2, r2;
        scanf("%d %d %d %d %d %d", &x1, &y1, &r1, &x2, &y2, &r2);
        double d = sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));
		if (r1 + r2 < d) printf("0\n");
		else if (abs(r1 - r2) > d) printf("0\n");
		else if (d == 0 && r1 == r2) printf("-1\n");
		else if (d == (r1 + r2)) printf("1\n");
		else if (d == abs(r1 - r2)) printf("1\n");
		else printf("2\n");
    }
    return 0;
}
    
