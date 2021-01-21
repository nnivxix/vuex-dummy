<template>
  <div>
    <h3>{{msg}}</h3>
    <p>Hello from vuex and return {{name}} and {{name2}} the {{othername}}</p>
    <p>{{ friend }} and {{notFriend}}</p>
    <button @click="newName">change name</button> <span>{{name}}</span>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  props: ['msg'],
  computed: {
    name(){
      return this.$store.state.name
    },
    ...mapState([
      'name2',

      ]),
    ...mapState({
      othername(state){
        return state.name3
      }
    }),
    friend(){
      return this.$store.getters.friend
    },
    ...mapGetters([
      'notFriend' 
      ]),

  },
  methods:{
    newName(){
  return this.$store.commit('changedName')
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
