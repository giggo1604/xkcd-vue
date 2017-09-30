<template>
  <Comic :id="comic.id"></Comic>
</template>

<script>
import { mapGetters } from 'vuex'
import Comic from './Comic'

export default {
  name: 'latest',
  components: { Comic },
  computed: mapGetters({ comic: 'latestComic' })
}
</script>
