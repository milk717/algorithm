import kotlin.math.pow

fun main(args: Array<String>) {
    val a = readln().toInt()
    val b = readln().toInt()
    val c = readln().toInt()

    val mul = a*b*c
    var sum = 0.0
    for (i in mul.toString()){
        sum += (10f).pow(i-'0')
    }
    var result = ""
    for (i in 9 downTo 0){
        val tmp = (sum/10f.pow(i)).toInt()
        result+="$tmp\n"
        sum -= tmp*(10f.pow(i))
    }
    println(result.slice(IntRange(0,result.length-2)).reversed())
}
