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
  props: ['id']
}
</script>

<style scoped>

</style>
