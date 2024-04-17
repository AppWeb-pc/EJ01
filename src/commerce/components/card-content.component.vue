<script>
import { Book } from "../model/book.entity.js";
export default{
  name: "book-card",
  props: {
    book: Book
  }
}
</script>

<template>
  <pv-card class="book-card">
    <template #header>
      <div class="header-card">
        <img :src="book.cover" alt="Book Cover" class="book"/>
      </div>
    </template>
    <template #title><p class="title">{{ book.title }}</p></template>
    <template #subtitle>
      <p class="original-title" >{{ book.originalTitle }}</p>
    </template>
    <template #content>
      <div class = "content-card">
        <p>{{ book.description }}</p><br>
        <p><b>Number of pages:</b> {{book.pages}}</p>
      </div>
    </template>
    <template #footer>
      <div class="footer-card">
        <p>Release Date: {{ book.releaseDate }}</p>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>

.book-card {
  width: 25rem;
  padding: 3rem;
  box-shadow: 0px 0px 5px 0px #858585;
  margin: 1rem;
}
.book {
  width: 100%;
  overflow: hidden;
}
.title{
  color: #000000;
  font-size:2rem;
  font-weight:bold;
  padding-top: 1rem;
}
.original-title{
  color: #5a5a5a;
  font-size: 1.5rem;
  padding-top: 1rem;
}
.content-card {
  margin-top: 1.5rem;
  text-align: justify;
}
.footer-card {
  padding-top: 1rem;
}

</style>