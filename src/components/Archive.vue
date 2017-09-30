<template>
  <div class="box">
    <h1>Comics:</h1>
    <p>(Hover mouse over title to view publication date)</p>
    <ol>
      <li v-for="comic in comics" :key="comic.id">
        <router-link :to="{name: 'comics', params: { id: comic.id }}" :title="comic.date">
          {{ comic.title }}
        </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'archive',
  computed: mapGetters(['comics'])
}
</script>

<style lang="scss" scoped>
  .box {
    margin-top: 5px;
  }
  h1 {
    text-align: center;
  }
  p {
    text-align: center;
  }
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      text-align: center;
      
    }
  }
</style>
