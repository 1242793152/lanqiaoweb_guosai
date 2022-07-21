/**
 * @param {Object} oldArr
 * @param {Object} num
 * */
const splitArray = (oldArr, num) => {
  // TODO：请补充代码实现功能
  console.log(oldArr,num)
  let arr = []
  // let length = Math.ceil(oldArr.length/num)
  console.log(length)
  for(let i =0;i<oldArr.length;i+=num){
    // console.log(oldArr.slice(i,i+num))
    arr.push(oldArr.slice(i,i+num))
  }
  console.log(arr)
  return arr
  
};
module.exports = splitArray; // 检测需要，请勿删除
