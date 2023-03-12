#include <iostream>
using namespace std;

int arr[10001];
int tmp[10001];

int main(void)
{
    int n;
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }

    tmp[0] = arr[0];
    tmp[1] = arr[0] + arr[1];

    for (int i = 2; i < n; i++)
    {
        tmp[i] = max(tmp[i - 1], arr[i] + arr[i - 1] + tmp[i - 3]);
    }

    for (int i = 0; i < n; i++)
    {
        cout >> arr[i];
    }
}