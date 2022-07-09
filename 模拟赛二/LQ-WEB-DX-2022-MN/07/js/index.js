const climbStairs = (n) => {
    // TODO：请补充代码
    /**
     * 思路：分析可得第n阶梯子的跳法等于第n-1和第n-2阶梯子的跳法之和
     */
    //法一：递归思想
    if (n <= 2) {
        return n
    } else {
        return climbStairs(n - 1) + climbStairs(n - 2)
    }


    //法二：第1阶梯子有一种跳法 第2阶梯子有2种跳法，用a，b往后移代表第n-1和第n-2阶梯子的跳法
    // if (n <= 2) {
    //     return n
    // }
    // let a = 1
    // let b = 2
    // let c
    // while (n > 2) {
    //     c = a + b
    //后移a，b
    //     a = b
    //     b = c
    //     n--
    // }
    // return c


    //法三：利用解构赋值，整体思想与法二一样
    // if (n <= 2) {
    //     return n
    // }
    // let a = 1
    // let b = 2
    // while (n > 2) {
    //     // 解构赋值
    //     [b, a] = [a + b, b]
    //     n--
    // }
    // return b

};
module.exports = climbStairs;