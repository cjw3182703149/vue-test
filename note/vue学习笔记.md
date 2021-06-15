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

