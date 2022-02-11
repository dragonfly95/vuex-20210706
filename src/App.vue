<template>
  <div id="app">

    유저 이름: <input
      v-model="userName"
      type="text"
    >
    <button @click="searchName">
      검색
    </button>

    <div
      v-for="(item, idx) in computedList"
      :key="idx"
    >
      제목: {{ item.title }} 
      저자: {{ item.author }}
    </div>

    <br/>
    <br/>
    <ul>
      <li><a href="/">HOME</a></li>
      <li><a href="/example">Example</a></li>
      <li><a href="/todos">TODO</a></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

const userStore = 'userStore'
const postStore = 'postStore'


export default {
  name: 'App',
  data() {
    return {
      userName: ''
    }
  },
  computed: {
    ...mapGetters(userStore, {
      storeUserName: 'GE_USER_NAME'
    }),
    ...mapGetters(postStore, [
      'GE_POST_LIST'
    ]),
    computedList() {
      let list = [];

      for (let item of this.GE_POST_LIST) {
        if(item.author == this.storeUserName) {
          list.push(item)
        }
      }
      return list;
    },
  },

  watch: {
    storeUserName(val) {
      this.userName = val
    }
  },
  created() {
    this.userName = this.storeUserName
  },
  methods: {

    ...mapActions(userStore, [
      'AC_USER_NAME'
    ]),
    searchName() {
      const payload = {
        userName: this.userName
      }
      this.AC_USER_NAME(payload);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
