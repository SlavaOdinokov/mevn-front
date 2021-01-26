<template>
  <div id="app">
    <Header :categories="categories" :cartCount="cartCount"/>
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <h1 class="my-4">Categories</h1>
          <div class="list-group">
            <router-link
              v-for="({ id, title }, key) in categories"
              :key="key"
              :to="`/category/${id}`"
              class="list-group-item"
            >
              {{ title }}
            </router-link>
          </div>
        </div>
        <div class="col-lg-9 margin-s">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'App',
    components: {
      Header: () => import('@/components/layouts/Header')
    },
    computed: {
      ...mapGetters({
        categories: 'categories',
        cartCount: 'cartCount'
      })
    },
    methods: {
      ...mapActions({
        fetchCategories: 'fetchCategories'
      })
    },
    mounted() {
      this.fetchCategories()
    }
  }
</script>

<style lang="scss">
  body {
    padding-top: 56px;
  }
  .margin-s {
    margin-top: 95px;
  }

  /* * {
    box-sizing: border-box;
  }

  body, html, ul {
    padding: 0;
    margin: 0;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ul {
    list-style-type: none;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  } */
</style>
