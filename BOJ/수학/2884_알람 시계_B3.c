#include <stdio.h>
int main(void)
{
	int h, m;
	scanf("%d %d", &h, &m);
	int H = h, M = m - 45;
	if (M < 0) {
		H--;
		M = 60 + M;
		if (H < 0) {
			H = 24 + H;
		}
	}
	printf("%d %d", H, M);
}
