<script>
import ToolbarContent from "./public/components/toolbar-content.component.vue";
import FooterContent from "./public/components/footer-content.component.vue";
import BookCard from "./commerce/components/card-content.component.vue";
import CardList from "./commerce/components/card-list.component.vue";
import { LibraryApiService} from "./commerce/services/library-books-api.service";


export default {
  components: {
    ToolbarContent,
    FooterContent,
    BookCard,
    CardList,
  },

  data() {
    return {
      books: [],
      errors: [],
      libraryBooksAPI: new LibraryApiService(),
    };
  },
  created() {
    this.getBooks();
  },
  methods: {
    getBooks() {
      this.libraryBooksAPI.getBooks()
          .then((response) => {
            this.books = response.data;
            console.log(response.data);
          })
          .catch((e) => {
            this.errors.push(e);
          });
    },
  }
};
</script>

<template>
  <div class="w-full">

    <div>
      <toolbar-content></toolbar-content>
    </div>
    <div class="view">
      <h1>Library Books:</h1>
    </div>
    <div class="main">
      <card-list v-if="errors" :books="books"></card-list>
    </div>
    <footer-content></footer-content>
  </div>
</template>

<style scoped>

.view{
  text-align: center;
  margin-top: 1rem;
}

.main {
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap:wrap;
}
</style>
