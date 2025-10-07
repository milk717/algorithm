import sys

INF = int(1e9)


def floyd_warshall(graph):
    for k in range(n):
        for i in range(n):
            for j in range(n):
                graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])

    return graph


if __name__ == '__main__':
    input = sys.stdin.readline

    n = int(input())
    graph = []

    for _ in range(n):
        graph.append([INF if x == 0 else x for x in map(int, input().split())])

    distance = floyd_warshall(graph)

    for i in range(n):
        for j in range(n):
            if distance[i][j] == INF:
                print(0, end=' ')
                continue

            print(1 if distance[i][j] > 0 else 0, end=' ')
        print()


