class Solution {
    fun solution(record: Array<String>):
            ArrayList<String> {
        val arr = record
            .map{it.split(" ")}

        var uidNickNameMap = mutableMapOf<String, String>()

        var res = arrayListOf<String>()

        for(log in arr){
           // println(log)
            when(log[0]){
                "Enter"->{
                    uidNickNameMap[log[1]] = log[2]
                    res.add("${log[1]} 님이 들어왔습니다.")
                }
                "Leave"->{
                    res.add("${log[1]} 님이 나갔습니다.")
                }
                "Change"->{
                    uidNickNameMap[log[1]] = log[2]
                }
            }
        }

        for(i in 0 until res.count()){
            // println(res[i].split(" ")[0])
            
            val uuid = res[i].split(" ")[0]

            res[i] = res[i].replace("$uuid ", uidNickNameMap[uuid]!!)
        }

        return res
    }
}