<template>
  <div class="list">
    <h1>List</h1>
    <router-link :to="{name: 'helloworld', params: {msg: '好自为之'}}">helloworld</router-link>
  </div>
</template>

<script>
export default {
  name: 'list',
  data(){
    return {
      msg: '888$'
    }
  }
}
</script>