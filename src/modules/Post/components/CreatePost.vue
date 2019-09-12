<template>
  <div>
    <Modal :showModal="showModal">
      <template v-slot:modal-header> 
        <h3>Modal Header</h3>
      </template>
      <template v-slot:modal-body> 
        <form @submit.prevent="handleSubmit">
          <div class="input-control">
            <label class="label">TITLE/TOPIC</label>
            <div class="flex-start align-center">
              <div class="emoji-size">😐</div>
              <input 
                class="input-field input-field__lg" 
                type="text" 
                v-model="postData.title"
                placeholder="Title/Topic ✍" 
              />
            </div>
          </div>
          <div class="input-control">
            <label class="label">CONTENT</label>
            <input 
              class="input-field" 
              type="text" 
              v-model="postData.body"
              placeholder="🖊 content" 
            />
          </div>
          <div class="greyline"></div>
           <div class="flex-start">
            <button class="button cancel-btn">Cancel</button>
            <button class="button button-sm button-dark button-rounded ml-10">Create</button>
           </div>
        </form>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue'
import { CREATE_POST } from "@/store/mutation-type"

export default {
  components: {
    Modal
  },
  data() {
    return {
      postData: {
        title: '',
        body: '',
      }
    }
  },
  computed: {
    showModal() {
      return this.$store.state.createPostModalIsShown
    }
  },
  methods: {
   handleSubmit() {
    const { title, body } = this.postData
    const payload = { title, body }
    this.$store.dispatch(CREATE_POST, payload)
    // reset form data
    this.postData = {
      title: '',
      body: ''
    }
   }
  }
}
</script>
