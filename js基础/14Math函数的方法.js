### Math及常用分方法
Math称为数学函数，但是它属于队形类型的
```javascript
typeof Math => 'object'
```
之所以叫做数学函数，是因为Math这个对象中提供了很多操作数字的方法。

### Math中提供的常用方法
“abs”：取绝对值
```javascript
Math.abs(10)  // 10
Math.abs(-10) // 10
```

"ceil/floor": 向上或者向下取整
```javascript
Math.ceil(10.51)  // 11
Math.ceil(-10.51) // -10

Math.floor(10.3)  // 10
Math.floor(-10.1)  // -11
```



“round”: 四舍五入
```javascript
Math.round(10.49)  // 10
Math.round(10.5)   // 11
Math.round(-10.5)  // -10
Math.round(-10.51) // -11
```

“sqrt” 开平方
```javascript
Math.sqrt(100)  // 10
Math.sqrt(16)   // 4
```

“pow” 取幂（n的M次方）
```javascript
Math.pow(2,10)  // 1024
Math.pow(16)    // 4
```

“max/min”  获取最大值和最小值
```javascript
Math.max(12,23,34,45,5,6);  //5
Math.min(12,23,34,45,5,6);  //45
```

“PI” 获取圆周率
```javascript
Math.PI  //3.1415926
```

“random” 获取0-1之间的随机效数 （包括0，不包括1）
```javascript
Math.random()
```


Math.round(Math.random()*(m-n)+n) //: 获取n-们之间的随机整数
Math.floor(Math.random() * (max - min + 1) + min)


查看math的所有方法
Math
