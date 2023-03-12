#include <stdio.h>
#include <string.h>
int main(void)
{
    int T;
    scanf("%d", &T);
    for (int t = 0; t < T; t++) { 
        char s[200] = { 0 }; 
        scanf("%s", s); 
        int len_s = strlen(s), ca = 0;
        for (int i = 0; i < len_s; i++) {
            switch (ca) {
            case 0: 
                if (s[i] == '0')
                    ca = 1;
                else if (s[i] == '1')
                    ca = 2;
                else ca = 7;
                break;
            case 1: 
                if (s[i] == '1')
                    ca = 0;
                else 
                    ca = 7;
                break;
            case 2: 
                if (s[i] == '0')
                    ca = 3;
                else 
                    ca = 7;
                break;
            case 3: 
                if (s[i] == '0')
                    ca = 4;
                else
                    ca = 7;
                break;
            case 4: 
                if (s[i] == '1')
                    ca = 5;
                else if (s[i] == '0')
                    ca = 4;
                else
                    ca = 7;
                break;
            case 5: 
                if (s[i] == '0')
                    ca = 1;
                else if (s[i] == '1') {
                    ca = 6;
                }
                else
                    ca = 7;
                break;
            case 6:
                if (s[i] == '0') {
                    if (i + 1 < len_s) {
                        if (s[i + 1] == '0')
                            ca = 3;
                        else if (s[i + 1] == '1')
                            ca = 1;
                        else ca = 7;
                    }
                }
                else if (s[i] == '1')
                    ca = 6;
                else ca = 7;
                break;
            case 7:
                ca = 7;
            }
        }
        if (ca == 5 || ca == 6||ca == 0) printf("YES\n");
        else printf("NO\n");

    }
}
