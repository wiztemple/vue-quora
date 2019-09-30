<template>
   <div class="header">
      <nav class="navbar fixed-top" role="navigation" aria-label="main navigation">
        <div class="container">
          <div class="brand">
            <router-link to="/" class="navbar-item">VUE-QUORA</router-link>
            <a role="button" class="navbar-burger burger" aria-label="menu">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div class="nav-menu">
            <div class="navbar-left">
              <router-link class="navbar-item" to="/posts">Feeds</router-link>
              <div class="navbar-item">
                <button class="button button-dark button-rounded" @click="toggleCreateModal">Create Post</button>
              </div>
            </div>
            <div class="navbar-right">
              <router-link class="navbar-item" to="/register">
                Sign Up
              </router-link>
              <router-link class="navbar-item" to="/login">
                Log In
              </router-link>
            </div>
          </div>
        </div>
      </nav>
      <CreatePost />
     </div>
</template>
<script>
import CreatePost from '../modules/Post/components/CreatePost'

export default {
  name: "Nav",
  components: {
    CreatePost
  },
  methods: {
    toggleCreateModal() {
      this.$store.dispatch("PostStore/switchModal", true)
    }
  }
}
</script>