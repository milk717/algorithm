#include <iostream>
using namespace std;

int arr[100001];

int main(void)
{
    int n;
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }

    for (int i = 1; i < n; i++)
    {
        arr[i] = max(arr[i - 1] + arr[i], arr[i]);
    }

    int res = arr[0];
    for (int i = 1; i < n; i++)
    {
        res = max(res, arr[i]);
    }
    cout << res;
}