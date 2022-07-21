// 实现选项卡功能
function init() {
    // TODO 待补充代码
    const tabs = document.querySelectorAll('.tabs div')

    // const content = document.querySelectorAll('#content div')
    // for (let index = 0; index < tabs.length; index++) {
    //     tabs[index].onclick = function() {
    //         for (let i = 0; i < tabs.length; i++) {
    //             tabs[i].classList.remove('active')
    //             content[i].classList.remove('active')
    //         }
    //         this.classList.add('active')
    //         content[index].classList.add('active')
    //     }
    // }
    const contents = document.querySelectorAll('#content div')
    for(let index =0;index<tabs.length;index++){
        tabs[index].onclick = function(){
            // 每次点击都移除那个有active类的元素

            document.querySelector('.tabs div.active').classList.remove('active')

            this.classList.add('active')

            contents[index].classList.add('active')
        }
    }
}
init();