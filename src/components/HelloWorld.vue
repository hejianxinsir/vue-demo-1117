<template>
  <div class="hello">
    <h2>HelloWorld</h2>
    <p>获取的n：{{this.$store.getters.getN}}</p>
    <p>通过 mapGetters 获取n：{{getN}}</p>
    <p>通过 mapState 获取 n: {{n}}</p>
    
    <button @click="ppp">mutations +1</button>
    <button @click="ggg">actions +1</button>
    <button @click="inc">mapMutation +1 </button>
    <button @click="incAction">mapAction +1</button>
    <hr>

    <p>moduleA 的 n：{{this.$store.state.moduleA.an}}</p>
    <button @click="lll">moduleA +1</button>
    <hr>

    <p>moduleB 的 n: {{this.$store.state.moduleB.bn}}</p>
    <button @click="vvv">moduleB +1</button>
    <!-- <h1>{{ msg }}</h1>
    <p>{{xxx}}</p>
    <button @click="send">sendMessage</button> -->
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapActions, mapState} from 'vuex';

export default {
  name: 'HelloWorld',
  props: ['msg', 'xxx'],
  data(){
    return {
    }
  },
  methods: {
    send(){
      this.$emit('yyy', '给父组件100￥')
    },
    ppp(){
      this.$store.commit('inc')
    },
    ggg(){
      this.$store.dispatch('incAction')
    },
    lll(){
      this.$store.commit('moduleA/inc')
    },
    vvv(){
      this.$store.commit('moduleB/inc')
    },
    ...mapMutations(['inc']),
    ...mapActions(['incAction'])
  },
  computed: {
    ...mapGetters(['getN']),
    ...mapState(['n'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  border: 1px solid gray;
}
</style>
