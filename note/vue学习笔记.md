![image-20210602194650888](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210602194650888.png)

![image-20210602195506327](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210602195506327.png)

![image-20210602202320447](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210602202320447.png)

## 一、基本的双向绑定

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
</head>
<body>
    <div id="app">
        {{message}}
    </div>

    <!-- 绑定属性 -->
    <div id="app2"  v-bind:title="message">
        这是一个测试
    </div>
    <!-- 1、导入vue.js -->
    <script src="../js/vue.js"></script>
    <script>
        var vm = new Vue({
            el: "#app",
            data: {
                message : "hello vue"
            }
        });
        var vm2 = new Vue({
            el: "#app2",
            data: {
                message: "hello vue"
            }
        })
    </script>
</body>
</html>
```

## 二、判断

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
</head>
<body>
    <div id="app">
        {{message}}
    </div>

    <!-- 绑定属性 -->
    <div id="app2"  v-bind:title="message">
        这是一个测试
    </div>
    <!-- 1、导入vue.js -->
    <script src="../js/vue.js"></script>
    <script>
        var vm = new Vue({
            el: "#app",
            data: {
                message : "hello vue"
            }
        });
        var vm2 = new Vue({
            el: "#app2",
            data: {
                message: "hello vue"
            }
        })
    </script>
</body>
</html>
```

## 三、循环迭代

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="app">
    <!--  迭代器 -->
    <li v-for="item in items">
        {{item.message}}
    </li>
    <li v-for="(item,index) in items">
        {{item.message}}--{{index}}
    </li>
</div>
<script src="../js/vue.js"></script>
<script>
    var vm = new Vue({
        el: "#app",
        data: {
            items: [
                {message: "第一个"},
                {message: "第二个"}
            ]
        }
    })
</script>
</body>
</html>
```

## 四、方法

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="app">
    <!-- v-on用于绑定事件的 -->
    <button v-on:click="sayHi" v-text="message"></button>
</div>
<script src="../js/vue.js"></script>
<script>
    var vm = new Vue({
        el: "#app",
        data: {
            message: "hello"
        },
        methods: {
            // 方法必须定义在vue的method对象中
            sayHi: function () {
                alert(this.message)
            }
        }
    })
</script>
</body>
</html>
```

## 五、表单

![image-20210606213857772](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210606213857772.png)

![image-20210606215952714](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210606215952714.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<script src="../js/vue.js"></script>
<body>
<div id="app">
    输入的文本:<input type="text" v-model="message"> {{message}}
    性别： <input type="radio" name="sex" value="男" v-model="sexmessage">男
    <input type="radio" name="sex" value="女" v-model="sexmessage">女
    <p>
        选择的性别:{{sexmessage}}
    </p>

    <!-- v-model是进行双向绑定，就是互相可以获取值 -->
    下拉框：
    <select name="select1" id="select1" v-model="selected">
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>
    <p>
        {{selected}}
    </p>
</div>
<script>
    var vm = new Vue({
        el: "#app",
        data: {
            message: "",
            sexmessage: "",
            selected: ""
        }
    })
</script>
</body>
</html>
```

## 六、组件

![image-20210615213607751](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210615213607751.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<script src="../js/vue.js"></script>
<body>
<div id="app">
    <!-- 这里使用自定义组件标签 shu是下面组件中的参数  v-bind:属性名="值"， v-bind就是绑定值-->
    <cai v-for="item in items" v-bind:shu="item" ></cai>
</div>
<script>
    // 定义一个vue组件
    Vue.component("cai", {
        props: ['shu'], // 参数列表，在使用这个标签时，使用v-bind:属性名="值"进行属性绑定
        template: '<li>{{shu}}</li>'
    });
    var vm = new Vue({
        el: "#app",
        data: {
            items: ["java", "linux", "前端"]
        }
    })
</script>
</body>
</html>
```

## 七、Axios异步通信

![image-20210615215918774](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210615215918774.png)

跨域请求解决，在springboot的controller类中写@CrossOrigin

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!--  v-clock:解决闪烁的问题-->
    <style>
        [v-clock] {
            display: none;
        }
    </style>
</head>
<body>
<div id="app" v-clock>
    <!-- {{message}} -->
    {{info.address.city}}
    {{info.address.country}}
    {{info.name}}
    <a v-bind:href="info.url">点击</a>

</div>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script type="text/javascript">
        var vm = new Vue({
            el: "#app",
            data: {
                message: ""
            },
            data(){
                return {
                    // 请求的返回参数合适，必须和json字符串一样
                    info: {
                        name: null,
                        address: {
                            street: null,
                            city: null,
                            country: null
                        }
                    }
                }
            },
            mounted() { // 钩子函数
                axios.get('../data.json').then(response=>(this.info = response.data));
                // 调用springboot的后端接口
                // axios.get('http://localhost:8001/dept/get/1').then(response=>(this.message = response.data));
                //axios.get('http://localhost:8001/dept/get/1').then(response=>{多行代码});
                // 完整是axios请求
                // axios({
                //     url: `${backend}/person-info/findByUserName/find`,//请求的url
                //     method: "get",//请求的类型
                //     params: {
                //         username //请求参数
                //     },
                //     withCredentials: true//是否认证
                // }).then(res => {
                //     this.userDetail = res.data.data;//对返回类型的操作
                // }).catch(err => {  // 异常处理
                //     console.log(err);
                // })
                
                // axios({
                //     url: `${backend}/chatroom/reject/add/chatroom/request`,
                //     method: "post",
                //     data: qs.stringify({
                //         username, chatroomId, role
                //     }),
                //     withCredentials: true
                // }).then(res => {
                //     this.$message.info(res.data.message);
                //     if (res.data.code === 200) {
                //         setTimeout(() => { //该方法用于在指定的毫秒数后调用函数或计算表达式
                //             location.reload();//类似于你浏览器上的刷新页面按钮
                //         }, 1000);
                //     }
                // }).catch(err => {
                //     console.log(err);
                // });
            }
        })
    </script>
</body>
</html>
```

参考格式

```vue
<script>
import {backend} from "@/js/network";
import axios from "axios";
import qs from "qs";
export default {
  data() {
    // 数据处理
    let validateChatroomName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入聊天室名称'));
      } else {
        callback();
      }
    };
    let validateChatroomType = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请选择聊天室类型'));
      } else {
        callback();
      }
    };
    let validateChatroomContent = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入聊天室描述'));
      } else {
        callback();
      }
    };
    // 返回的数据格式
    return {
      applies: [],
      chatroomDetail: null,
      ruleForm: {
        name: '',
        type: '',
        content: ''
      },
      userDetail: null,
      rules: {
        name: [
          { validator: validateChatroomName, trigger: 'blur' }
        ],
        type: [
          { validator: validateChatroomType, trigger: 'blur' }
        ],
        content: [
          { validator: validateChatroomContent, trigger: 'blur' }
        ]
      },
      addChatroom(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            axios({
              url: `${backend}/chatroom/add`,
              method: "post",
              data: {
                name: this.ruleForm.name,
                type: this.ruleForm.type,
                content: this.ruleForm.content
              },
              headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
              withCredentials: true
            }).then(res => {
              this.$message.info(res.data);
              setTimeout(() => {
                location.reload();
              }, 1000);
            }).catch(err => {
              console.log(err);
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  },
  methods: {
    addUserToChatroom(username, chatroomId, role) {
      axios({
        url: `${backend}/chatroom/add/chatroom`,
        method: "post",
        data: qs.stringify({
          username, chatroomId, role
        }),
        withCredentials: true
      }).then(res => {
        this.$message.info(res.data.message);
        if (res.data.code === 200) {
          setTimeout(() => {
            location.reload();
          }, 1000);
        }
      }).catch(err => {
        console.log(err);
      });
    },
    rejectAddUserToChatroom(username, chatroomId, role) {
      axios({
        url: `${backend}/chatroom/reject/add/chatroom/request`,
        method: "post",
        data: qs.stringify({
          username, chatroomId, role
        }),
        withCredentials: true
      }).then(res => {
        this.$message.info(res.data.message);
        if (res.data.code === 200) {
          setTimeout(() => {
            location.reload();
          }, 1000);
        }
      }).catch(err => {
        console.log(err);
      });
    },
    showUserDetail(username) {
      axios({
        url: `${backend}/person-info/findByUserName/find`,
        method: "get",
        params: {
          username
        },
        withCredentials: true
      }).then(res => {
        this.userDetail = res.data.data;
      }).catch(err => {
        console.log(err);
      })
    },
    showChatroomDetail(chatroomId) {
      axios({
        url: `${backend}/chatroom/chatroom/detail`,
        params: {id: chatroomId},
        withCredentials: true
      }).then(res => {
        this.chatroomDetail = res.data.data;
      })
    }
  },
  // 创建vue时进行的操作
  created() {
    axios({
      url: `${backend}/chatroom/add/chatroom/request/list`,
      method: "get",
      withCredentials: true,
    }).then(res => {
      console.log(res);
      let i = 1;
      res.data.data.forEach(e => {
        e.id = i;
        i++;
      });
      this.applies = res.data.data;
    }).catch(err => {
      console.log(err);
    })
  }
}
</script>
```

## 八、计算属性

​	![image-20210620220539838](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210620220539838.png)

![image-20210620221631965](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210620221631965.png)

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<script src="../js/vue.js"></script>
<body>
    <div id="app">
        <p>currentTime1: {{currentTime1()}}</p> <!-- 调用函数后面必须加() -->
        <p>currentTime1: {{currentTime2}}</p>
    </div>
<script>
    var vm = new Vue({
        el: "#app",
        data: {
            message: "hello"
        },
        methods: {
            currentTime1 : function () {
                return Date.now(); // 返回当前时间戳
            }
        },
        computed: { // 计算属性，methods与computed方法名不能重名
            currentTime2 : function () {
                return Date.now();// 与methods重名，会调用methods方法
            }
        }
    })
</script>
</body>
</html>
```

## 九、插槽slot

### 	9.1内容分发

​	在vue.js中我们使用<slot>元素作为承载分发内容的出口，可以应用在组合组件的场景。

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<script src="../js/vue.js"></script>
<body>
<div id="app">
<!--    <p>列表书籍（下面的插槽就是为实现动态定义这些标签）</p>-->
<!--    <ul>-->
<!--        <li>Java</li>-->
<!--        <li>linux</li>-->
<!--        <li>python</li>-->
<!--    </ul>-->
    <todo>
        <todo-title slot="todo-title" v-bind:title="title"></todo-title>
        <to-items slot="todo-items" v-for="item in todoItems" v-bind:item="item"></to-items>
    </todo>
</div>
<script>
    // slot:插槽,可以理解成通配符,实现动态配置
    Vue.component("todo", {
       template: '<div>' +
                        '<slot name="todo-title"></slot>' +
                        '<ul>' +
                            '<slot name="todo-items"></slot>' +
                        '</ul>' +
                 '</div>'
    });
    // 第一个插槽
    Vue.component('todo-title',{
        props: ['title'],
        template: '<div>{{title}}</div>'
    });
    // 第二个插槽
    Vue.component('to-items', {
        props: ['item'],
        template: '<li>{{item}}</li>'
    });
    var vm = new Vue({
        el: "#app",
        data: {
            title: "技术列表",
            todoItems: ['我的那么', 'Java', 'python', '前端']
        }
    });
</script>
</body>
</html>
```

### 9.2 自定义内容分发

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<script src="../js/vue.js"></script>
<body>
<div id="app">
<!--    <p>列表书籍（下面的插槽就是为实现动态定义这些标签）</p>-->
<!--    <ul>-->
<!--        <li>Java</li>-->
<!--        <li>linux</li>-->
<!--        <li>python</li>-->
<!--    </ul>-->
    <todo>
        <todo-title slot="todo-title" v-bind:title="title"></todo-title>
        <!-- 这里通过v-on:组件中方法名="vue中方法名"  来实现组件中方法调用vue中方法 -->
        <to-items slot="todo-items" v-for="(item,index) in todoItems" v-bind:item="item" v-bind:index="index" v-on:remove="removeItems(index)">

        </to-items>
    </todo>
</div>
<script>
    // slot:插槽,可以理解成通配符,实现动态配置
    Vue.component("todo", {
       template: '<div>' +
                        '<slot name="todo-title"></slot>' +
                        '<ul>' +
                            '<slot name="todo-items"></slot>' +
                        '</ul>' +
                 '</div>'
    });
    // 第一个插槽
    Vue.component('todo-title',{
        props: ['title'],
        template: '<div>{{title}}</div>'
    });
    // 第二个插槽
    Vue.component('to-items', {
        props: ['item', 'index'],
        // 这里绑定了remove这个删除事件
        template: '<li>{{item}}<button v-on:click="remove">删除</button></li>',
        // 只能绑定当前组件的方法
        methods: {
            // 自定义组件分发
            remove: function (index) {
                // 调用vue绑定这个组件的方法
                // 在子组件中需要向父组件传值处使用this.$emit("function",param);   
                //其中function为子组件定义函数，param为需要传递参数
                this.$emit('remove', index)
            }
        }
    });
    var vm = new Vue({
        el: "#app",
        data: {
            title: "技术列表",
            todoItems: ['我的那么', 'Java', 'python', '前端']
        },
        methods: {
            removeItems: function (index) {
                // 从索引2开始删除3个元素，然后在添加两个元素
                //this.todoItems.splice(2,3,'one', 'two');//有返回值的，返回值就是被删除的两个元素
                //this.todoItems.splice(2,0,'one', 'two');// 只删除不添加
                // 一次删除一个元素
                this.todoItems.splice(index, 1);
                console.log(this.todoItems);
            }
        }
    });
</script>
</body>
</html>
```

## 十、vue-cli

![image-20210629210808646](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210629210808646.png)

安装 npm install cnpm -g 淘宝镜像

![image-20210629211916910](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210629211916910.png)

查看创建方式

![image-20210629212302352](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210629212302352.png)

### 创建vue-cli项目

（1）创建文件夹，并cd到对应文件夹下，执行vue init webpack myvue   其中myvue是项目名称

![image-20210629213128136](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210629213128136.png)

（2）执行npm install，然后他会根据package.json自动下载

![image-20210629214556934](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210629214556934.png)

（3）如果出现错误，npm audit fix进行修复

（4）使用npm run dev进行运行

（5）打开默认端口网页

![image-20210629215346832](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210629215346832.png)

### 什么是webpack？

类似于Java中maven

![image-20210702210830115](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210702210830115.png)

![image-20210702211215666](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210702211215666.png)

在main.js中使用下面的代码导入依赖

![image-20210702211614417](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210702211614417.png)

在App.js中暴露依赖

![image-20210702211728005](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210702211728005.png)

'use strict'严格规范，如果下面写错或者是不规范，会直接报错

![image-20210702212310060](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210702212310060.png)

```shell
# 下载webpack
npm install webpack -g
npm install webpack-cli -g
# 测试是否下载成功
webpack -v
webpack-cli -v
```

### 配置

创建webpack.config.js配置文件

- entry:入口文件，指定Webpack用哪个文件作为项目的入口
- output:输出，指定webpack把处理完成的文件放置到指定路径
- module:模块，用于处理各种类型的文件
- plugins:插件,如：热更新、代码重用等
- resolve:设置路径指向
- watch:监听，用于设置文件改动后直接打包

### 使用webpack

（1）创建项目

（2）创建一个名为modules的目录，用于放置js模块等资源文件

（3）在modules下创建模块文件，如hello.js，用于编写js模块相关代码

hello.js

```js
//暴露一个方法
exports.sayHi = function () {
    document.write("<h1>学习中</h1>")
}
```

main.js

```js
var hello = require("./hello")
hello.sayHi()
```

webpack.config.js

```js
module.exports = {
    entry: './modules/main.js',//入口
    output: {
        filename: "./js/bundle.js"//输入的文件
    }
};
```

然后使用webpack命令进行打包，也可以使用webpack --watch进行监听打包，就是一旦有改变，他会自动在打包

在index.html中使用已经打包的文件

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script src="dist/js/bundle.js"></script>
</body>
</html>
```

### vue-router路由

![image-20210704182018077](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210704182018077.png)

使用 npm install vue-router --save-dev进行安装



使用说明：

（1）先创建两个vue文件

content.vue

```vue
<template>
  <h1>内容</h1>
</template>

<script>
export default {
  name: "content"
}
</script>

<style scoped>

</style>
```

main.vue

```vue
<template>
  <h1>首页</h1>
</template>

<script>
export default {
  name: "main"
}
</script>

<style scoped>

</style>
```

(2)创建router包，并在包下创建index.js

```js
import Vue from 'vue'
import VueRouter from 'vue-router'
import content from "../components/content";
import main from "../components/main";
//安装路由
Vue.use(VueRouter);
//配置导出路由
export default new VueRouter({
  routes: [
    {
      //路由路径
      path: '/content',
      name: 'content',
      //跳转的组件
      component: content
    },
    {
      path: '/main',
      name: 'main',
      component: main
    }
  ]
});
```

（3）在main.js文件中配置路由

```js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
```

（4）在App.vue中使用路由

```vue
<template>
  <div id="app">
    <h1>名字</h1>
    <router-link to="/main">首页</router-link>
    <router-link to="/content">内容页</router-link>
<!--    页面展示-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

## 十一、ElementUI

![image-20210711220839648](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210711220839648.png)

![image-20210711232723512](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210711232723512.png)

使用操作

1、在main.js增加这一个操作

```js
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
```

2、后面就是配置路由



#### 路由嵌套

```js
{
  path: '/main',
  name: 'main',
  component: main,
  children: [
    {path: '/profile', component: profile},
    {path: '/list', component: List}
  ]
},
```

#### 参数传递

一、在params这里写参数列表

注意这里to前面需要有:,name不能是  /名称

```vue
<router-link :to="{name: 'profile', params: {id:1}}">
```

二、路由配置，在后面增加 :参数列表

```js
children: [
  {path: '/profile:id', component: profile},
  {path: '/list', component: List}
]
```

三、页面获取参数

```vue
<h1>profile {{$router.params.id}}</h1>
```



还可以把第二步中修改为

```js
{path: '/profile:id', component: profile, props: true},
```

然后第三步就可以

```vue
export default {
  name: "profile",
  props: ['id']
}
```

```
<h1>{{id}}</h1>
```



#### 重定向

在路由中增加这个配置

```js
{
  path: '/gohome',
  redirect: '/main'
}
```



其他方法

路由配置

```js
{
  path: '/main/:name',
  name: 'main',
  component: main,
  props: true,
  children: [
    {path: '/profile:id', component: profile, props: true},
    {path: '/list', component: List}
  ]
},
```

main.vue

```vue
 <span>{{name}}</span>
<script>
export default {
  name: "main",
  props: ['name']
};
```

login.vue

```vue
this.$router.push("/main/"+this.loginForm.name);
```

![image-20210719144452080](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210719144452080.png)

index.js

```js
mode: 'history',
```



#### 404处理

增加一个notfound.vue

```vue
<template>
  <h1>你的页面跑了</h1>
</template>

<script>
export default {
  name: "notfound"
}
</script>

<style scoped>

</style>
```

路由配置

```js
{
  path: '*',
  component: notfound
}
```

![image-20210719222638326](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210719222638326.png)

```vue
<script>
export default {
  name: "profile",
  props: ['id'],
  // 进入之前做的事情
  beforeRouteEnter:(to,from,next)=>{
    console.log("进入之前");
    // next()必须得写，不然不能进入下一步
    next();
  },
  beforeRouteLeave:(to,from,next)=>{

  }
}
</script>
```

![image-20210719223320319](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210719223320319.png)

在钩子函数中使用异步请求

1、安装axios  cnpm install -s

2、main.js中引用axios



![image-20210719223348310](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210719223348310.png)

```vue
<script>
export default {
  name: "profile",
  props: ['id'],
  // 进入之前做的事情
  beforeRouteEnter:(to,from,next)=>{
    console.log("进入之前");
    // next()必须得写，不然不能进入下一步
    next(vm => {
      vm.getData();//进入路由前执行getData
    });
  },
  beforeRouteLeave:(to,from,next)=>{

  },
  methods: {
    getData: function (){
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/static/mock/data.json',
      }).then(function (reponse){
        console.log(reponse)
      })
    }
  }
}
</script>
```
