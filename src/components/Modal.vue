<template>
  <div>
     <div class="modal"  v-if="showModal">
      <div class="modal-content">
        <div class="modal-header">
          <span @click="closeModal" class="close">&#9587;</span>
          <h5><slot name="modal-header"></slot></h5>
        </div>

        <div class="modal-body"><slot name="modal-body"> </slot></div>
        <div class="modal-footer flex-end">
          <slot name="modal-footer"> </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['showModal'],
  methods: {
    closeModal() {
      this.$store.dispatch("PostStore/switchModal", false)
    }
  }
}
</script>
