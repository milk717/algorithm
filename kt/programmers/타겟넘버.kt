class Solution {

    private var answer = 0;

    //부호, 깊이(인덱스), 배열, 지금까지 계산된 값, 타겟값
    fun dfs(sign : Boolean, depth: Int, numbers: IntArray, result: Int, target: Int){
        //이번 인덱스 계산 된 값 저장
        var sumResult = result;

        //부호별로 계산
        when(sign){
            true->{             
                sumResult += numbers[depth]
            }
            false->{
                sumResult -= numbers[depth]
            }
        }

        //재귀함수 종료조건
        if(depth+1 == numbers.size){
            //종료할 때 타겟값과 같으면 값 늘려줌
            if(sumResult==target){
               answer++
            }
            return
        }
        dfs(true,depth+1,numbers,sumResult,target)
        dfs(false,depth+1,numbers,sumResult,target)
    }

    fun solution(numbers: IntArray, target: Int): Int {

        dfs(true, 0, numbers, 0,target)
        dfs(false, 0, numbers, 0,target)

        return answer
    }
}