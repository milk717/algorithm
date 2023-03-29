/*
* n을 몇 번 사용?
* (더하는 순서 바뀌어도 갯수는 동일....조합?)
* 1 => n
* 2 => n+n, n-n, n*n, n/n, nn
* 3 => n+n+n, n+n-n, n-n-n, nn+n, nn-n, n*n*n, nn*n, n/n+n .....
* 3일때는 n을 두번 사용하는 것 + 추가된 n에 대한 사칙연산
*
* n을 m번 사용해서 연산하는 모든 경우를 배열에 저장놓고, 그 값이 number 와 일치하면 정답
* */
class Solution {
    fun solution(N: Int, number: Int): Int {
        if(N==number) return 1;
        //<n 몇번씀?, n을 m번 써서 만들 수 있는 모든 계산결과>
        val numberMap = HashMap<Int,ArrayList<Int>>()

        //계산된 숫자 중복체크 배열
        val numberCheck = arrayListOf<Int>()

        //1개 사용해서 구할 때는 무조건 N
        numberMap[1] = arrayListOf(N)
        numberCheck.add(N)

        for(i in 2..8 ){
            val tempArr = arrayListOf<Int>()    //n을 i번 쓸 때 만들어지는 모든 수를 저장하는 배열

            //nn, nnn 같은 수 구해서 리스트에 넣어줌
            var temp = ""
            repeat(i){
                temp += N.toString()
            }
            tempArr.add(temp.toInt())
            numberCheck.add(temp.toInt())

            //n을 m번 사용해서 구한 결과들을 구하기 위해 이전 모든 값 참조
            for(j in 1 until i){
                for(nowNumber in numberMap[i-j]!!){
                    for(beforeNumber in numberMap[j]!!){
//                        println(tempArr)
                        if(!numberCheck.contains(nowNumber+beforeNumber)){
                            tempArr.add(nowNumber+beforeNumber)
                            numberCheck.add(nowNumber+beforeNumber)
                        }
                        if(!numberCheck.contains(nowNumber-beforeNumber)){
                            tempArr.add(nowNumber-beforeNumber)
                            numberCheck.add(nowNumber-beforeNumber)
                        }
                        if(!numberCheck.contains(nowNumber*beforeNumber)){
                            tempArr.add(nowNumber*beforeNumber)
                            numberCheck.add(nowNumber*beforeNumber)
                        }
                        if(beforeNumber != 0){
                            if(!numberCheck.contains(nowNumber/beforeNumber)){
                                tempArr.add(nowNumber/beforeNumber)
                                numberCheck.add(nowNumber/beforeNumber)
                            }
                        }
                    }
                }
                if(tempArr.contains(number)){
//                    println(numberMap)
                    return i
                }
            }
            numberMap[i] = tempArr
        }
        return -1
    }
}