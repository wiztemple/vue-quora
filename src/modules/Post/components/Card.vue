<template>
  <div>
    <div class="rcard" v-for="post in posts" :key="post.id">
      <div class="p-20">
        <h4 class="rcard-title">{{post.title}}</h4>
        <div class="flex-start">
          <div>
            <img class="rcard-image" v-if={} :src="post.avatar" alt>
          </div>
          <div class="ml-10">
            <div class="card-username">
              <a href="profile.html">{{post.creator}}</a>
            </div>
            <div class="date-span mt--5">11 May</div>
          </div>
        </div>
        <div class="rcard-body">
          <p>{{post.body}}</p>
        </div>
        <div class="space-between">
          <div class="reactions flex-start">
            <div class="reaction">
              <Like/>
            </div>
            <div class="reaction ml-20">
              <CommentIcon/>
            </div>
          </div>
          <div class="dropdown">
            <div class="dropdown-ellipsis">&#8943;</div>
            <div class="dropdown-content">
              <a class="#">Edit &#128221;</a>
              <a class>Delete &#128221;</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end card -->
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Like from "./Like";
import CommentIcon from "./CommentIcon";
import image from '../../../assets/user.png';
export default {
  name: "card",
  components: {
    Like,
    CommentIcon
  },
  methods: {
    ...mapActions('PostStore',["getPosts"])
  },
  computed: {
    ...mapGetters('PostStore',["posts", "postsCount"])
  },
  created() {
    this.getPosts()
  }
};
</script>

