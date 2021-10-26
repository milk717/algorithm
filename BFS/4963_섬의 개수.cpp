#include <cstdio>
#include <queue>
#include <algorithm>
#include <utility>
#define couple pair<int, int>
using namespace std;

int w, h;
int map[50][50];
int visited[50][50];
int island;

void BFS(int a, int b) {
	queue<couple> q;
	q.push(couple(a, b));
	while (!q.empty()) {
		int x = q.front().first;
		int y = q.front().second;
		q.pop();
		if (x + 1 < h && map[x + 1][y] == 1 && visited[x + 1][y] == 0) {
			visited[x + 1][y] = 1;
			q.push(couple(x + 1, y));
		}
		if (x - 1 >= 0 && map[x - 1][y] == 1 && visited[x - 1][y] == 0) {
			visited[x - 1][y] = 1;
			q.push(couple(x - 1, y));
		}
		if (y + 1 < w && map[x][y + 1] == 1 && visited[x][y + 1] == 0) {
			visited[x][y + 1] = 1;
			q.push(couple(x, y + 1));
		}
		if (y - 1 >= 0 && map[x][y - 1] == 1 && visited[x][y - 1] == 0) {
			visited[x][y - 1] = 1;
			q.push(couple(x, y - 1));
		}
		if (x - 1 >= 0 && y + 1 < w && map[x - 1][y + 1] == 1 && visited[x - 1][y + 1] == 0) {
			visited[x - 1][y + 1] = 1;
			q.push(couple(x - 1, y + 1));
		}
		if (x - 1 >= 0 && y - 1 >=0 && map[x - 1][y - 1] == 1 && visited[x - 1][y - 1] == 0) {
			visited[x - 1][y - 1] = 1;
			q.push(couple(x - 1, y - 1));
		}
		if (x + 1 < h && y + 1 < w && map[x + 1][y + 1] == 1 && visited[x + 1][y + 1] == 0) {
			visited[x + 1][y + 1] = 1;
			q.push(couple(x + 1, y + 1));
		}
		if (x + 1 < h && y - 1 >= 0 && map[x + 1][y - 1] == 1 && visited[x + 1][y - 1] == 0) {
			visited[x + 1][y - 1] = 1;
			q.push(couple(x + 1, y - 1));
		}

	}
	island++;
}
int main() {
	while (1){
		scanf("%d %d", &w, &h);
		if (w == 0 && h == 0) {
			return 0;
		}
		for (int i = 0; i < h; i++) {
			for (int j = 0; j < w; j++) {
				scanf("%d", &map[i][j]);
			}
		}
		for (int i = 0; i < 50; i++) {
			for (int j = 0; j < 50; j++) {
				visited[i][j] = 0;
			}
		}
		island = 0;
		for (int i = 0; i < h; i++) {
			for (int j = 0; j < w; j++) {
				if (visited[i][j] == 0 && map[i][j] == 1) {
					visited[i][j] = 1;
					BFS(i, j);
				}
			}
		}
		printf("%d\n", island);
	}
	return 0;
}