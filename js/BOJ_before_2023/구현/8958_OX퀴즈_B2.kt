fun main(args: Array<String>) {
    val n = readln().toInt()
    for(i in 1..n){
        val str = readln()
        var score = 0;
        var cnt = 0;
        for(c in str){
            if(c == 'O'){
                cnt++;
                score += cnt;
            }else{
                cnt = 0;
            }
        }
        println(score);
    }
}
