#include <algorithm>
#include <queue>
#include <utility>
#include <cstdio>
#include <tuple>
#define SIZE 50
#define couple tuple<int,int,int>
using namespace std;

int lab[SIZE][SIZE];
int visited[SIZE][SIZE];
int n, m;
int res = 10130717;

class LAB {
public:
	void Select(int cnt);
	void BFS();
	int Cheek();
	void Visited_reset();
};
void LAB::Select(int cnt) {
	if (cnt == m) {
		BFS();
		Visited_reset();
		return;
	}
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++) {
			if (lab[i][j] == 2 && visited[i][j] == 0) {
				visited[i][j] = 1;
				Select(cnt + 1);
				visited[i][j] = 0;
			}
		}
	}
}
void LAB::BFS() {
	queue<couple> q;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++) {
			if (visited[i][j] == 1) {
				q.push(couple(i, j, 0));
			}
		}
	}
	while (!q.empty()) {
		int x = get<0>(q.front());
		int y = get<1>(q.front());
		int sec = get<2>(q.front());
		q.pop();
		if (x + 1 < n && visited[x + 1][y] == 0 && lab[x + 1][y] != 1) {
			visited[x + 1][y] = sec+1;
			q.push(couple(x + 1, y, sec+1));
		}
		if (x - 1 >= 0 && visited[x - 1][y] == 0 && lab[x - 1][y] != 1) {
			visited[x - 1][y] = sec+1;
			q.push(couple(x - 1, y, sec + 1));
		}
		if (y + 1 < n && visited[x][y + 1] == 0 && lab[x][y + 1] != 1) {
			visited[x][y + 1] = sec+1;
			q.push(couple(x, y + 1, sec + 1));
		}
		if (y - 1 >= 0 && visited[x][y - 1] == 0 && lab[x][y - 1] != 1) {
			visited[x][y - 1] = sec+1;
			q.push(couple(x, y - 1, sec + 1));
		}
	}
	int c = Cheek();
	if (c == 1) {
		res = -1;
	}
	else {
		res = min(res, c);
	}
}
int LAB::Cheek() {
	int max_sec = 0;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++) {
			max_sec = max(max_sec, visited[i][j]);
			if (visited[i][j] == 0 && lab[i][j] != 1) {
				return 1;
			}
		}
	}
	return max_sec;
}
void LAB::Visited_reset() {
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++) {
			visited[i][j] = 0;
		}
	}
}
int main(void) {
	LAB result;
	scanf("%d %d", &n, &m);

	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++) {
			scanf("%d", &lab[i][j]);
		}
	}

	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++) {
			if (lab[i][j] == 2) {
				visited[i][j] = 1;
				result.Select(1);
				visited[i][j] = 0;
			}
		}
	}

	printf("%d", res);
}
