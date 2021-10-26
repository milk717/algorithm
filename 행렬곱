#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <math.h>
#define A_row 4		//A의 행
#define A_col 3		//A의 열
#define B_row 3		//B의 행
#define B_col 5		//B의 열

//행렬곱 함수
void multiplyMatrix(int A[A_row][A_col], int B[B_row][B_col], double *p, double *s)
{
	int C[A_row][B_col] = { 0, };		//곱해진 행렬이 들어갈 배열
	int i, j, k;						//인덱스 접근
	double sum = 0, P;					//평균과 분산을 구하기 위한 합계 저장 변수, 평균을 저장하기 위한 변수
	//행렬곱
	for (i = 0; i < A_row; i++) 
	{
		for (j = 0; j < B_col; j++)
		{
			for (k = 0; k < B_row; k++)
			{
				C[i][j] = C[i][j] + A[i][k] * B[k][j];
			}
			sum += + C[i][j];			//평균을 구하기 위해 합계 계산
		}
	}
	*p = sum / (A_row * B_col);			//메인함수의 평균값을 보내준다
	P = sum / (A_row * B_col);			//표준편차를 계산하기 위한 평균값을 저장
	int d;								//편차를 저장할 변수
	sum = 0;							//편차 제곱의 합을 새로 저장하기위해 sum변수를 0으로 초기화
	//편차 제곱으 합 구하기
	for (i = 0; i < A_row; i++)
	{
		for (j = 0; j < B_col; j++)
		{
			d = p - C[i][j];			//편차계산
			sum += pow(P - C[i][j], 2); //편차 제곱을 모두 더한다
		}
	}
	double s2 = sum / (A_row * B_col);	//분산을 계산
	*s = sqrt(s2);						//표춘편차를 계산해서 메인함수로 보내줌
	}

int main(void)
{
	int i, j;							//인덱스 접근
	srand(time(NULL));					//랜덤값
	//A 행렬 만들기
	int A[A_row][A_col] = { 0, };
	for (i = 0; i < A_row; i++)
	{
		for (j = 0; j < A_col; j++)
		{
			A[i][j] = rand() % 10;
		}
	}
	//B 행렬 만들기
	int B[B_row][B_col] = { 0, };
	for (i = 0; i < B_row; i++)
	{
		for (j = 0; j < B_col; j++)
		{
			B[i][j] = rand() % 10;
		}
	}
	double p, s;					//평균과 표준편차
	multiplyMatrix(A, B,&p,&s);		//일단보류
	printf("평균 = %lf\n표준편차 = %lf\n",p, s);
}
