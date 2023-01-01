fun main(args: Array<String>) {
    val n = readln().toInt()
    var tmp = n
    var cnt = 0
    do{
        tmp = tmp%10*10+(tmp/10+tmp%10)%10
        cnt++
    } while(n != tmp)
    println(cnt)
}
