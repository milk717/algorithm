let arr = new Array(10001).fill(true);
arr[0] = false;
for (let i = 1; i <= 10000; i++) {
    let num = i;
    while (num <= 10000) {
        num = num + num.toString().split('').reduce((acc, cur) => acc + +cur, 0)
        arr[num] = false
    }
}

arr.forEach((v,i)=>v && console.log(i))

