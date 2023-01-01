#include <stdio.h>
int main(void)
{
	int a, b, mod_100, mod_10, one;
	scanf("%d %d", &a, &b);
	mod_100 = b / 100;
	mod_10 = (b - mod_100*100) / 10;
	one = (b - mod_100*100)%10;
	printf("%d\n", a * one);
	printf("%d\n", a * mod_10);
	printf("%d\n", a * mod_100);
	printf("%d", a * b);
}
