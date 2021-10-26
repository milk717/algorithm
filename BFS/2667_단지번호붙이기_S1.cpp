#include <cstdio>
#include <queue>
#include <algorithm>
#include <utility>
#define couple pair<int, int>
using namespace std;

int N;
int map[25][25];
int visited[25][25];
int res[25];
int bundle = 0;

void BFS(int a, int b) {
	queue<couple> q;
	q.push(couple(a, b));
	int cnt = 1;
	while (!q.empty()) {
		int x = q.front().first;
		int y = q.front().second;
		q.pop();
		if (x + 1 < N && map[x + 1][y] == 1 && visited[x + 1][y] == 0) {
			visited[x + 1][y] = 1;
			cnt++;
			q.push(couple(x + 1, y));
		}
		if (x - 1 >= 0 && map[x - 1][y] == 1 && visited[x - 1][y] == 0) {
			visited[x - 1][y] = 1;
			cnt++;
			q.push(couple(x - 1, y));
		}
		if (y + 1 < N && map[x][y+1] == 1 && visited[x][y+1] == 0) {
			visited[x][y+1] = 1;
			cnt++;
			q.push(couple(x, y+1));
		}
		if (y - 1 >=0 && map[x][y - 1] == 1 && visited[x][y - 1] == 0) {
			visited[x][y - 1] = 1;
			cnt++;
			q.push(couple(x, y - 1));
		}
	}
	res[bundle] = cnt;
	bundle++;
}
int main(void) {
	scanf("%d", &N);
	for (int i = 0; i < N; i++) {
		for (int j = 0; j < N; j++) {
			scanf("%1d",&map[i][j]);
		}
	}

	for (int i = 0; i < N; i++) {
		for (int j = 0; j < N; j++) {
			if (visited[i][j] == 0 && map[i][j] == 1) {
				visited[i][j] = 1;
				BFS(i, j);
			}
		}
	}
	printf("%d\n", bundle);
	sort(res, res + bundle);
	for (int i = 0; i < bundle; i++) {
		printf("%d\n", res[i]);
	}
}
