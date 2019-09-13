<template>
  <div>
    <div class="rcard">
      <div class="p-20">
        <h4 class="rcard-title">Lorem ipsum dolor sit amet.</h4>
          <div class="flex-start">
            <div>
              <img  class="rcard-image" src="@/assets/images/user.png" alt="">
            </div>
            <div class="ml-10">
              <div class="card-username"><a href="profile.html">sullivan wisdom</a></div>
              <div class="date-span mt--5">11 May</div>
            </div>
          </div>
          <div class="rcard-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id incidunt vitae dolores exercitationem a tenetur, provident, fugiat fuga corporis explicabo harum modi omnis nostrum quia ipsam facere repudiandae at, soluta dicta eum porro qui cupiditate reprehenderit odit! Ab voluptate, explicabo eos quos animi quis unde fugiat impedit illum modi voluptas ex, veniam aperiam adipisci aliquam repellendus excepturi ut iure. Nobis saepe alias sequi maxime facere nihil. Illo ea blanditiis voluptates obcaecati labore cupiditate accusantium possimus velit nobis, sapiente id saepe cum consequatur eaque molestiae esse eum veritatis dicta! Fuga, illum reprehenderit voluptatum incidunt laudantium itaque fugiat perferendis tenetur sed illo!</p>
          </div>
          <div class="space-between">
            <div class="reactions flex-start">
              <div class="reaction">
                <Like />
              </div>
              <div class="reaction ml-20">
                <CommentIcon />
              </div>
            </div>
            <div class="dropdown">
              <div class="dropdown-ellipsis">&#8943;</div>
              <div class="dropdown-content">
                <a class="#"> Edit &#128221;</a>
                <a class=""> Delete &#128221;</a>
              </div>
            </div>
          </div>
      </div>
    </div><!-- end card -->
  </div>
</template>
<script>
// import { mapGetters, mapActions } from 'vuex';
// import { GET_ALL_POSTS } from "@/store/mutation-type";
import Like from './Like'
import CommentIcon from './CommentIcon'
  export default {
  name: "card",
  components: {
    Like,
    CommentIcon
  },
  // data() {
  //   return {
  //     page: 0,
  //     isTruncated: false
  //   }
  // },
  // methods: {
  //   ...mapActions([GET_ALL_POSTS])
  // },
  // methods: {},
  // computed: {
  //   ...mapGetters(["posts","postsCount"]),
  // },
  // mounted() {
  //   this.$store.dispatch(GET_ALL_POSTS, this.page)
  //   document.addEventListener('scroll', this.handlePageScroll);
  // }
  }
</script>

