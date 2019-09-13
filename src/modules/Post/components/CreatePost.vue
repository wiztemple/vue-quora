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
              <div class="emoji-size">😐</div>
              <input 
                class="input-field input-field__lg" 
                type="text" 
                placeholder="Title/Topic ✍" 
              />
            </div>
          </div>
           <div class="input-control">
            <label class="label">Description</label>
            <input 
              class="input-field" 
              type="text" 
              placeholder="🖊 content" 
            />
          </div>
          <div class="input-control">
            <textarea class="textarea" cols="3" placeholder="🖊 content"></textarea>
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

export default {
  components: {
    Modal
  },
  computed: {
    showModal() {
      return this.$store.state.PostStore.showModal
    }
  },
  methods: {}
}
</script>
