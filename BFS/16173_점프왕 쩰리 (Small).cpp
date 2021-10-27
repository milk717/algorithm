#include <iostream>
#include <queue>
#include <utility>

using namespace std;
#define couple pair<int, int>
int arr[4][4];
int visited[4][4];
int n, temp;

string move() {
	queue<couple> q;

	//상, 하 좌, 우
	int dx[4] = { 0,1,0,0 };
	int dy[4] = { 0,0,0,1 };

	q.push(couple(0,0));	//초기 좌표값 q에 넣어줌
	visited[0][0] = 1;		//방문처리

	while (!q.empty()) {
		//좌표값
		int px = q.front().first;
		int py = q.front().second;
		int postion = arr[px][py];
		q.pop();

		if (postion == -1)return "HaruHaru";	//도착함
		//cout << "현재 postion = " << postion << "\n";
		for (int i = 0; i < 4; i++) {
			int nx = px + dx[i]*postion;
			int ny = py + dy[i]*postion;
			//cout << "for문동작 "<<i<<"\n";

			//지금 가려는 곳이
			//방문하지 않았고, 배열 범위 안에 있다면
			if (!visited[nx][ny] && nx < n && ny < n) {
				//cout << nx << ", " << ny << " 방문함\n";
				visited[nx][ny] = 1;		//방문처리해주고
				q.push(couple(nx, ny));		//감 == q에 넣어줌
				//cout << nx << ", " << ny << " q에 넣음\n";
			}
		}
		//cout << endl;
	}
	//게임 승리 못한다면
	return "Hing";
}
int main(void) {
	
	cin >> n;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++) {
			cin >> arr[i][j];
		}
	}

	cout << move();
}