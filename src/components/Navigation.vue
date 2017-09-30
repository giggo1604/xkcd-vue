<template>
  <nav>
    <ul>
      <li><router-link :to="{ name: 'comics', params: { id: navigation.oldest }}">|<</router-link></li>
      <li><router-link :to="{ name: 'comics', params: { id: navigation.prev }}">< Prev</router-link></li>
      <li><router-link :to="{ name: 'random' }">Random</router-link><li>
      <li><router-link :to="{ name: 'comics', params: { id: navigation.next }}">Next ></router-link></li>
      <li><router-link :to="{ name: 'comics', params: { id: navigation.newest }}">>|</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'navigation',
  props: ['id'],
  computed: {
    navigation () {
      return this.$store.getters.navigation(this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
  list-style-type: none;
  li {
    display: inline-block;
    a {
      display: inline-block;
      background-color: #6e7b91;
      color: #ffffff;
      border: 1.5px solid #333333;
      border-radius: 3px;
      font-size: 16px;
      font-weight: 600;
      padding: 1.5px 12px;
      margin: 0 4px;
      text-decoration: none;
      box-shadow: 0 0 5px 0 grey;
      transition: background-color ease-in 400ms;
      &:hover {
        text-decoration: none;
        background-color: #ffffff;
        color: #6e7b91;
        transition: background-color ease-in 400ms;
      }
    }
  }
}
</style>
