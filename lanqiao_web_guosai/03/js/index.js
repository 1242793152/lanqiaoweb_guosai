// TODO：请补充代码
function startGame() {
  let imgs = $('.img-box img')
  /*
  使用jquery显示和隐藏动画
  1.show(time) 带动画的显示
  2.hide(time) 带动画的隐藏  传入的参数是时间参数
  */ 
  imgs.show(1000)
  $('#start').hide()
  imgs.hide(1000)
 
  // 用于存储第一次点击时显示的图片还有父元素的容器，
  let obj1 = {

  }
  // 用于存储第二次点击时显示的图片还有父元素的容器，
  let obj2 = {

  }
  //点击的次数
  var num = 0
  //显示分数
  var grade = 0

  // visibility:hidden不显示但是占据位置
  // display:none 既不显示也不占据位置
  for(let i = 1;i<=16;i++){
    document.querySelector(`#item${i}`).onclick = function(){
      num++
      if(num==1){
        this.firstElementChild.style.display = 'block'
        obj1.parentId = this.id
        obj1.childId= this.firstElementChild.id
        obj1.imgSrc = this.firstElementChild.src
      }
      if(num==2){
        this.firstElementChild.style.display = 'block'
        obj2.parentId = this.id
        obj2.childId= this.firstElementChild.id
        obj2.imgSrc = this.firstElementChild.src
        // console.log(obj2)

        if(obj1.imgSrc == obj2.imgSrc){
          // 进入判断说明图片一样，那么就让它们俩个都消失
          $(`#${obj1.parentId}`)[0].style.visibility = 'hidden'
          $(`#${obj2.parentId}`)[0].style.visibility = 'hidden'
          obj1 = {}
          obj2 = {}
          num = 0
          grade+=2
          $('#score')[0].innerText = grade
        }else{
          setTimeout(()=>{
          $(`#${obj1.childId}`)[0].style.display = 'none'
          $(`#${obj2.childId}`)[0].style.display = 'none'
          grade-=2
          obj1 = {}
          obj2 = {}
          num = 0
          $('#score')[0].innerText = grade
          },500)         
        }
      }
    }
  }
}
