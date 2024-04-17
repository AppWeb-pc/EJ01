<script>
import BookCard from "./card-content.component.vue";
export default {
  name: "card-list",
  components: {BookCard},
  props: {
    books: Object,
  }
}
</script>

<template>
  <div v-for="book in books"><book-card :book="book"></book-card></div>
</template>
