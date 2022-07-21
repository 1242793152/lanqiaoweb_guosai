$(function () {
  // 使用 ajax 获取 userList.json 数据并渲染到页面
  getData();

  // 存储人员信息
  let people_arr = []

  // 为按钮添加事件
  $("#add").click(function () {
    // TODO：补充代码，实现功能
    // 获取选中的option
    let selecteds = $('#leftSelect option:selected')
    // 通过jquery获取的元素都是伪数组，不是真正的数组，因此可以使用jquery的each()方法
    //  $.each(arr,function(index,currentValue){})
    console.log(selecteds)
    selecteds.each((index,item)=>{
      /*
      empty() remove() 使用empty()会删除其内部所有元素但是ul本身还存在
      而ul使用remove()则会删除掉元素以及本身  
      */ 
    //  第一步先删除
     $(`#leftSelect option[value=${item.value}]`).remove()
    //  第二步添加
     $('#rightSelect').append(`<option value="${item.value}">${item.value}</option>`)
    //  第三部更改显示的权限
    })
    changeAccess('管理员',selecteds)
  });

  $("#addAll").click(function () {
    // TODO：补充代码，实现功能
    // 先获取所有的元素
    let selecteds = $('#leftSelect>option')
    // 删除左边所有的元素
    $(`#leftSelect `).empty()

    selecteds.each((index,item)=>{
      // 添加到右边
      $(`#rightSelect`).append(`<option value="${item.value}">${item.value}</option>`)
    })
    changeAccess('管理员',selecteds)
  });
  $("#remove").click(function () {
    // TODO：补充代码，实现功能
    // 1.获取元素
    let selecteds = $(`#rightSelect option:selected`)
    selecteds.each((index,item)=>{
      // 2删除元素
      $(`#rightSelect option[value=${item.value}]`).remove()
      // 3添加元素
      $('#leftSelect').append(`<option value="${item.value}">${item.value}</option>`)
    })
    changeAccess('普通用户',selecteds)
  });

  $("#removeAll").click(function () {
    // TODO：补充代码，实现功能
    //1获取元素
    let selecteds = $(`#rightSelect>option`)
    //2删除所有元素
    $(`#rightSelect`).empty()
    selecteds.each((index,item)=>{

      $(`#leftSelect`).append(`<option value="${item.value}">${item.value}</option>`)
    })
    changeAccess('普通用户',selecteds)

  });
})

/**
 * 修改权限
 * @param {Object} right 要修改的权限
 * @param {Object} changeList 要修改权限的用户列表
 */
function changeAccess(right, changeList) {
  // TODO：补充代码，实现功能
  changeList.each((index,item)=>{
    $(`#userList tbody tr[name=${item.value}] td:last`).html(right)
  })

}
// 异步获取数据
function getData() {
  // 这里访问本地的json格式文件会存在跨域问题，因此必须使用插件liver server实现这个功能
  // TODO：补充代码，实现功能
  $.ajax({
    // 	规定发送请求的 URL。默认是当前页面。
    url: '/lanqiao_web/lanqiaoweb_guosai/lanqiao_web_guosai/06/js/userList.json',
    // 规定请求的类型（GET 或 POST）。
    type: 'GET',
    // data	规定要发送到服务器的数据
    //data:{}
    // 请求成功当请求成功时运行的函数。    
    success(result, status, xhr) {
      // console.log(result) //result 是获取的所有数据
      people_arr = JSON.parse(JSON.stringify(result))
      console.log(people_arr)
      // console.log($("#userList tbody")[0].innerHTML)
      // 做法一
      // result.forEach(ele => {
      //   $("#userList tbody").html(
      //     $("#userList tbody").html() +
      //     ` <tr >
      //              <td>${ele.name}</td>
      //              <td>${ele.right ? "管理员" : "普通用户"}</td> 
      //       </tr>`
      //   )
      // })
      // 做法二跟做法一类似
      for(let i =0;i<result.length;i++){
        // console.log(result[i]) 这里最好给每一个tr都设置一个名字，该名字用于去区分tr的不同
        $("#userList tbody")[0].innerHTML+=`
        <tr name='${result[i].name}'>
                   <td>${result[i].name}</td>
                   <td>${result[i].right ? "管理员" : "普通用户"}</td> 
        </tr>`
      }
      /* 做法三  $('<input type="text" id="textEdit2">').appendTo('div')
      子元素.appendTo(父元素)
      父元素.append(子元素)
      */
    },
    // 请求失败	如果请求失败要运行的函数。
    error(xhr, status, error) {
      console.log(status)
      console.log(xhr)
      console.log(error)
    }
  })

}
