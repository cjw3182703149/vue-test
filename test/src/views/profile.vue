<template>
  <div>
    <h1>profile</h1>
    <h1>{{$route.params.id}}</h1>
    <h1>{{id}}</h1>
  </div>
</template>

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

<style scoped>

</style>
