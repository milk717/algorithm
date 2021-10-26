T = int(input())
A = []
B = []
for i in range(T):
    a, b = map(int, input().split())
    A.append(a)
    B.append(b)
C = [[10],[1],[2,4,8,6],[3,9,7,1],[4,6],[5],[6],[7,9,3,1],[8,4,2,6],[9,1]]
for i in range(0, T):
    if A[i]%10 == 2 or A[i]%10 == 3 or A[i]%10 == 7 or A[i]%10 == 8:
        q = B[i]%4
        print(C[A[i]%10][q-1])
    elif A[i]%10 == 4 or A[i]%10 == 9:
        q = B[i]%2
        print(C[A[i]%10][q-1])
    else:
        print(C[A[i]%10][0])
