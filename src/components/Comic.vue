<template>
  <div class="box">
    <div class="title">{{ comic.title }}</div>
    <Navigation :id="comic.id" />
    <img :src="comic.img"/>
    <Navigation :id="comic.id" />
    <div class="links">
      <ul>
        <li>Permanent link to this comic: {{ location }}</li>
        <li>Image URL (for hotlinking/embedding): {{ comic.img }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  name: 'comic',
  props: ['id'],
  components: {
    Navigation
  },
  computed: {
    comic () {
      return this.$store.getters.comic(this.id)
    },
    location () {
      return `${window.location.origin}/${this.id}`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .title {
    margin: 10px;
    font-size: 21px;
    font-weight: 800;
  }
  .box {
    margin-top: 5px;
    text-align: center;
  }
  .links {
    margin: 35px 0 -10px;
    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
  }
</style>
