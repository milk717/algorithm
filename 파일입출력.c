#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#define N_student 20	//Number of student
#define N_sub 30		//Number of sub
#define N_class_A 10	//Number of class A number
#define N_class_B 10	//Number of class B number
//학생 구조체
struct Student{	
	int studentID;	//학번
	char type[2];		//학과(A,B)
	float *sub;		//성적
};
//과목평균 구하고 가장 잘한사람, 가장 못한사람 id반환
void sol(struct Student **s,char **sub_name) {
	float fst = 0, last = 0, m_A = 0, m_B = 0, dif[1000] = { 0, }; //fst = 1등점수, last = 꼴등점수, m_A = A반평균, m_B = B반평균, dif = 평균의 차이
	int fst_ID = 0, last_ID = 0;//fst_ID = 1등의 아이디, last_ID = 꼴등의 아이디
	char prt[1000][1000] = { 0 }, best[10] = { 0 }, worst[10] = { 0 }; //prt에 출력할 문장 넣기, best = 더 잘한반, worst = 못한반
	for (int j = 0; j < N_sub; j++) {
		char pt[1000] = { 0 };
		fst = s[0]->sub[j];
		last = s[0]->sub[j];
		float s_A = 0, s_B = 0;	//s_A = A반 점수합, s_B = B반 점수합
		for (int i = 0; i < N_student; i++) {
			if (i < N_class_A) {
				s_A += s[i]->sub[j];
			}
			else {
				s_B += s[i]->sub[j];
			}
			if (fst < s[i]->sub[j]) {
				fst = s[i]->sub[j];
				fst_ID = i;
			}
			if (last > s[i]->sub[j]) {
				last = s[i]->sub[j];
				last_ID = i;
			}
		}
		m_A = s_A / N_class_A;
		m_B = s_B / N_class_B;
		if (m_A > m_B) {
			strcpy(best, s[0]->type);
			strcpy(worst, s[19]->type);
			dif[j] = m_A - m_B;
		}
		else {
			strcpy(best, s[19]->type);
			strcpy(worst, s[0]->type);
			dif[j] = m_B - m_A;
		}
		sprintf(pt, "%s\t\t%s\t\t%.3f\t\t%d\t\t%.2f\t\t%s\t\t%d\t\t%.2f\t\t%s\n", sub_name[j], &best, dif[j], fst_ID + 1, s[fst_ID]->sub[j], s[fst_ID]->type, last_ID + 1, s[last_ID]->sub[j], s[last_ID]->type);
		strcpy(prt[j], pt);
	}
	FILE* out = fopen("hw3_output.txt", "w");
	float max = 0;
	int index;
	fputs("과목이름\t\t더 잘한 과\t평균의 차이\t수석의 ID\t\t수석의 점수\t수석의 과\t\t꼴지의ID\t\t꼴지의 점수\t꼴지의 과\n",out);
	for (int i = 0; i < N_sub; i++) {
		max = 0;
		for (int j = 0; j < N_sub; j++) {
			if (max < dif[j]) {
				max = dif[j];
				index = j;
			}
		}
		dif[index] = 0;
		fputs(prt[index], out);
	}
	fclose(out);
}
int main(void) {
	//파일 불러오기
	FILE* in = NULL;
	in = fopen("hw3.txt", "r");
	//파일 불러오기 성공여부
	if (in == NULL) {
		printf("파일을 불러오지 못했습니다\n");
		return 0;
	}
	//구조체 동적 할당
	struct Student** s_list = (struct Student**)malloc(N_student * sizeof(struct Student*));
	for (int i = 0; i < N_student; i++) {
		s_list[i] = (struct Student*)malloc(sizeof(struct Student));
		s_list[i]->sub = (float *)malloc(N_sub * sizeof(float));
	}
	//과목 이름 동적 할당
	char** sub_name = (char*)malloc(N_sub * sizeof(char*));
	for (int i = 0; i < N_sub; i++) {
		sub_name[i] = (char*)malloc(10 * sizeof(char));
	}
	//파일 한줄씩 읽기, 구조체에 데이터 입력
	char line[1024];
	char* f_line;
	int j = 0, cnt = 0;
	while (!feof(in)) {
		f_line = fgets(line, 1024, in);	//한줄
		char* ptr = strtok(f_line, " \t\n");	//한줄에서 공백마다 자르기
		float score;		//자른거 실수로 변환해서 넣을 변수
		int i = 0, s = 0, k = 0, ID = 0;
		if (cnt == 0) {
			while (ptr != NULL) {
				if (s == 0) {
					ptr = strtok(NULL, " \t\n");
					s++;
					continue;
				}
				ID = atoi(ptr);
				s_list[k]->studentID = ID;
				if (k == N_student - 1) {
					cnt++;
					break;
				}
				k++;
				ptr = strtok(NULL, " \t\n");
			}
			continue;
		}
		s = 0,k = 0;
		if (cnt == 1) {
			while (ptr != NULL) {
				if (s == 0) {
					ptr = strtok(NULL, " \t\n");
					s++;
					continue;
				}
				strcpy(s_list[k]->type, ptr);
				if (k == N_student - 1) {
					cnt++;
					break;
				}
				k++;
				ptr = strtok(NULL, " \t\n");
			}
			continue;
		}
		s = 0;
		while (ptr != NULL) {		// 한 줄 동안 s_list의 인덱스가 0~9까지 가야하고 sub의 인덱스는 0으로 고정, 한줄이 끝나면 sub의 인덱스는 1증가하고 s_list 는 0으로
			if (s == 0) {
				strcpy(sub_name[j], ptr);
				s++;
				ptr = strtok(NULL, " \t\n");
				continue;
			}
			score = atof(ptr);
			s_list[i]->sub[j] = score;
			ptr = strtok(NULL, "\t\n");
			i++;
		}
		j++;
	}
	//분석, 계산
	sol(s_list, sub_name);
	//파일 닫아주기, 메모리 해제, 프로그램 종료
	for (int i = 0; i < N_student; i++) {
		free(s_list[i]);
	}
	free(s_list);
	fclose(in);
	return 0;
}
