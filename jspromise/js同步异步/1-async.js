setTimeout(()=>{console.log(1)},20)
setTimeout(()=>{console.log(2)},0)  //=>默认会有最小的等待时间（v8一般是5-6MS）
console.time('WHILE')
let i = 0;
while(i<=10){i++}
console.timeEnd('WHILE')
setTimeout(()=>{console.log(3)},10)
console.log(4)

// 4 2 1 3

