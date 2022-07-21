// menuList 仅为示例数据，非实际使用数据，实际使用数据层级不确定（可能是四级五级六级等），数据结构与 menuList 一致
// 1. `parentId` 如果为 `-1`，则表示此条数据为顶级数据。
// 2. `parentId` 为该条数据的父级数据的 `id`。

let menuList = [
  { parentId: -1, name: "添加管理员", id: 10, auth: "admin" },
  { parentId: 10, name: "管理员权限分配", id: 11, auth: "admin-auth" },
  { parentId: -1, name: "商品管理", id: 1, auth: "product" },
  { parentId: 1, name: "商品列表", id: 4, auth: "productList" },
  { parentId: 4, name: "商品分类", id: 5, auth: "category" },
  { parentId: 5, name: "添加分类", id: 8, auth: "addClassification" },
  { parentId: 4, name: "商品上架", id: 6, auth: "product" },
  { parentId: -1, name: "评论管理", id: 2, auth: "comments" },
  { parentId: -1, name: "个人中心", id: 3, auth: "profile" },
];

/**
 * @param {*} menuList 传入的数据
 * @return {*} menus 转化后的树形结构数据，auths 转化后的权限列表数组
 */

const getMenuListAndAuth = (menuList) => {
  // TODO：待补充代码
  // 用于存放结果
  const menus = []
  const auths = []
  // 用于存储menuList中的每一个对象的对象容器
  const map_obj = {}
  for(let items of menuList){
    auths.push(items.auth)
    // 对象的解构赋值
    const { id,parentId } = items
    // 如果该对象容器没有该id所对应的对象那么给它赋值成一个对象，该对象中有一个属性children将来用于其子对象
    if(!map_obj[id]){
      map_obj[id] = {
        children:[]
      }
    }
    // 解构赋值该对象
    map_obj[id] = {
      ...items,
      children:map_obj[id]['children']
    }
    // menuList数组中的每一个对象都是tree结构中的一部分
    const tree_item = map_obj[id]

    // 如果该对象的parentId == -1 说明该对象是tree结构的根，那么直接放入到menus中
    if(parentId ==-1){
      menus.push(tree_item)
    }else{
      // parentId != -1 说明该对象是tree结构的根的子孙对象
      /* 再判断存放所有对象的map_obj是否已经存放了该对象，如果还没有
      那么就提前为它创建一个坑位，并且把tree_item作为子孙提前放入到children数组中
      为38-41行代码的对象解构赋值做准备
      */
      if(!map_obj[parentId]){
        map_obj[parentId] = {
          children:[]
        }
      }
      map_obj[parentId]['children'].push(tree_item)
    }
   }
   console.log(menus)
   console.log(auths)
  // 
  return { menus, auths }; // menus 转化后的树形结构数据，auths 转化后的权限列表数组
};

// 请勿删除和修改以下代码
try {
  module.exports = { getMenuListAndAuth };
} catch (e) {}
