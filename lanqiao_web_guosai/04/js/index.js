// // TODO：请补充代码
let show = document.querySelector('#formula')

let result = document.querySelector('#result')

let buttons = document.querySelectorAll('.calc-button')

// 使用eval() 函数会将传入的字符串当做 JavaScript 代码进行执行。
// 使用Math.sqrt(argu) 接受的如果是字符串类型的数字那么会先转换为数字类型，再开根号

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    if (this.innerText == '=') {
      // 先将字符串给替换一下，再执行其结果
      let newstr = show.value.replace('x', '*').replace('÷', '/')
      result.value = eval(newstr)
    } else if (this.innerText == 'AC') {
      show.value = ''
      result.value = ''
    } else if (this.innerText == '√') {
      result.value = Math.sqrt(show.value)
    } else {
      show.value += this.innerText
    }
  }
}

/* 以上的方法我们也可以使用 
  switch(arg){
    case arg1:
      xxx
      break(return)
    case arg2:
      xxx
      break(return)
    ....
    default:
      xxxxx
      break
}
*/

