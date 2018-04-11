// 斐波那契厄尔数组
// 递归和动态规划两种实现，递归之所以慢，在这儿有两个原因
// 1. 重复计算（特殊原因） 2. 频繁压栈出栈函数（普遍原因）

//  0,1,1,2,3,5,8,13,21,34,55

function recurFib(n) {
    if (n < 2) {
        return n;
    } else {
        return recurFib(n - 1) + recurFib(n - 2);
    }
}

function dynFib(n) {
    let val = [];
    if (n === 1 || n === 2) {
        return 1;
    } else {
        val[1] = 1;
        val[2] = 2;
        for (let i = 3; i <= n; i++) {
            val[i] = val[i - 1] + val[i - 2];
        }
        return val[n - 1];
    }
}

function iterFib(n) {
    let last = 1;
    let nextLast = 1;
    let result = 1;
    for (let i = 2; i < n; i++) {
        result = last + nextLast;
        nextLast = last;
        last = result;
    }
    return result;
}

console.log(recurFib(10));
console.log(dynFib(10));
console.log(iterFib(10));