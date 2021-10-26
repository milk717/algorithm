#include <stdio.h>
#include <string.h>
int main(void)
{
	char color[10][10] = { "black", "brown", "red", "orange", 
		"yellow","green", "blue", "violet","grey", "white" };
	char f[10], s[10], t[10];
	int F = 0, S= 0, T=1;
	scanf("%s", f);
	scanf("%s", s);
	scanf("%s", t);
	for (int i = 0; i < 10; i++)
	{
		if (strcmp(color[i], f)==0)
			F = i * 10;
		if (strcmp(color[i], s) == 0)
			S = i;
		if (strcmp(color[i], t) == 0)
		{
			for (int j = 0; j < i; j++)
				T = T * 10;
		}
	}
	printf("%d", (F+S)*T);
}
