<template>
  <div>
    <Modal :showModal="showModal">
      <template v-slot:modal-header>
        <h3>Modal Header</h3>
      </template>
      <template v-slot:modal-body>
        <form @submit.prevent="createPost">
          <div class="input-control">
            <label class="label">TITLE/TOPIC</label>
            <div class="flex-start align-center">
              <div class="emoji-size" v-if="false">😐</div>
              <input
                class="input-field input-field__lg"
                type="text"
                v-model="form.title"
                placeholder="Tthis.tle/Topic ✍"
          this.  >
            </div>
          </div>
          <div class="input-control">
            <label class="label">Description</label>
            <input
              class="input-field"
              type="text"
              v-model="form.description"
              placeholder="🖊 description"
            >
          </div>
          <div class="input-control">
            <label class="label">body</label>
            <textarea
              class="textarea"
              v-model="form.body"
              cols="3"
              rows="4"
              placeholder="🖊 content"
            ></textarea>
          </div>
          <div class="greyline"></div>
          <div class="flex-start">
            <button class="button cancel-btn">Cancel</button>
            <button class="button button-sm button-dark button-rounded ml-10">
              <div class="lds-ellipsis" v-if="isLoading">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <span v-else>Create</span>
            </button>
          </div>
        </form>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import image from "../../../assets/user.png";

export default {
  data() {
    return {
      form: {
        title: "",
        description: "",
        body: "",
        avatar: image
      },
      isLoading: false
    };
  },
  components: {
    Modal
  },
  computed: {
    showModal() {
      return this.$store.state.PostStore.showModal;
    }
  },
  methods: {
    async createPost() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("PostStore/createSinglePost", this.form);
        this.resetForm();
        this.$eventBus.$emit("show alert", {
          message: "Post created successfully",
          type: "success"
        });
      } catch (e) {
        this.$eventBus.$emit("show alert", {
          message: "Error creating post",
          type: "danger"
        });
        console.log(e);
      }
      this.isLoading = false;
      //  this.$store.dispatch("PostStore/switchModal", false);
    },
    resetForm() {
      this.form.title = "";
      this.form.description = "";
      this.form.body = "";
    }
  }
};
</script>

<style scoped>
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 14px;
}
.lds-ellipsis div {
  position: absolute;
  top: 27px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 6px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 6px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 26px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 45px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
}
</style>
