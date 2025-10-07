#include <iostream>

#include <algorithm>

#define INF 210000000

#define MAX 100

using namespace std;

int arr[100][100];

int sho[100][100];

int main(void){

    fill(&arr[0][0], &arr[MAX][MAX], INF);

    fill(&sho[0][0], &sho[MAX][MAX], INF);

    int n, m;

    cin >> n;

    cin >> m;

    for(int i =0; i<m; i++){

        int a,b,c;

        cin >>a>>b>>c;

        a--;

        b--;

        arr[a][b] =min(arr[a][b],c);

        sho[a][b]=arr[a][b];

    }

    for(int k =0; k<n;k++){

        sho[k][k]=0;

    }

    for(int k =0; k<n;k++){

        for(int i =0; i<n;i++){

            for(int j =0; j<n;j++){

                if(i==j)continue;

                sho[i][j]=min(sho[i][j],sho[i][k]+sho[k][j]);

            }

        }

    }

    for(int i=0; i<n;i++){

        for(int j =0; j<n;j++){

            if(sho[i][j]==INF){

                sho[i][j]=0;

            }

            cout<<sho[i][j]<<" ";

        }

        if(i!=n-1) cout<<"\n";

    }

}