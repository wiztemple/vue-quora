<template>
  <div>
    <Modal :showModal="showModal">
      <template v-slot:modal-header> 
        <h3>Modal Header</h3>
      </template>
      <template v-slot:modal-body> 
        <form>
          <div class="input-control">
            <label class="label">TITLE/TOPIC</label>
            <div class="flex-start align-center">
              <div class="emoji-size" v-if="false">😐</div>
              <input 
                class="input-field input-field__lg" 
                type="text"
                v-model="form.topic"
                placeholder="Title/Topic ✍" 
              />
            </div>
          </div>
           <div class="input-control">
            <label class="label">Description</label>
            <input
              class="input-field" 
              type="text"
              v-model="form.description"
              placeholder="🖊 description"
            />
          </div>
          <div class="input-control">
            <label class="label">content</label>
            <textarea class="textarea" v-model="form.content" cols="3" rows="4" placeholder="🖊 content"></textarea>
          </div>
          <div class="greyline"></div>
           <div class="flex-start">
            <button class="button cancel-btn">Cancel</button>
            <button class="button button-sm button-dark button-rounded ml-10" @click="createPost">Create</button>
           </div>
        </form>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
	data() {
		return {
			form: {
        topic: '',
        description: '',
        content: ''
      }
    }
  },
  components: {
    Modal
  },
  computed: {
    showModal() {
      return this.$store.state.PostStore.showModal
    }
  },
  methods: {
		createPost(){
      this.$store.dispatch('Post/createSinglePost', {value: this.form})
    }
  }
}
</script>
