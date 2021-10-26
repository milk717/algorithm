#include <stdio.h>
#include <math.h>
int main(void) {
    int t, x1, y1, x2, y2,n,cnt = 0;
    scanf("%d", &t);
    for (int T = 0; T < t; T++) {
        scanf("%d %d %d %d", &x1,&y1,&x2,&y2);
        scanf("%d", &n);
        for (int i = 0; i < n; i++) {
            int cx, cy, r,ce1,ce2;
            scanf("%d %d %d", &cx, &cy, &r);
            ce1 = pow((cx - x1), 2) + pow((cy - y1), 2);
            ce2 = pow((cx - x2), 2) + pow((cy - y2), 2);
            if (ce1 < r*r) cnt++;
            else if (ce2 < r*r) cnt++;
        }
        printf("%d\n", cnt);
    }
}

