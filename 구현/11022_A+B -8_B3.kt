fun main(args: Array<String>) {
    val n = readln().toInt()
    for(i in 1..n){
        val (a,b) = readln().split(" ").map{it.toInt()}
        println("Case #$i: $a + $b = ${a+b}")
    }
}