const app = new Vue({
    el: "#app",
    // 在此处补全代码，实现二级菜单搜索功能
    data: {
        list: [],
        listData: [],
        title: ''
    },
    async created() {
        const res = await axios.get('./data.json')
        this.listData = res.data
        this.list = res.data
    },
    methods: {
        search(n) {
            //搜索函数
            this.list = []
            for (let i = 0; i < this.listData.length; i++) {
                if (this.listData[i].meta.title.includes(n)) {
                    this.list.push(this.listData[i])
                } else if (this.listData[i].children) {
                    const chilData = this.listData[i].children
                    chil: for (let cli = 0; cli < chilData.length; cli++) {
                        if (chilData[cli].meta.title.includes(n)) {
                            this.list.push(this.listData[i])
                            break chil
                        }

                    }
                }

            }
        }
    },
    watch: {
        title: (n, o) => {
            app.search(n)
        }
    }
});
//法二
// const app = new Vue({
//     el:"#app",
//     // 在此处补全代码，实现二级菜单搜索功能
//     data(){
//       return {
//         list:[],
//         value:''
//       }
//     },
//     created(){
//       axios.get('./data.json').then(res=>{
//         this.list=res.data
//       })
//     },
//     methods:{
//       screath(val){
//         this.list.forEach(item => {
//           //是否隐藏
//           item.ishide=true
//           if(item.meta.title.includes(val)){
//             item.ishide=false
//           }
//           if(item.children) {
//             item.children.forEach(item2=>{
//                if(item2.meta.title.includes(val)){
//                 item.ishide=false
//               }
//             })
//           }

//         });
//       }
//     },
//     watch:{
//       value(n,o){
//         this.screath(n)
//       }
//     }

//   });