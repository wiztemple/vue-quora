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
import { SWITCH_CREATEPOST_MODAL } from "@/store/mutation-type";

export default {
  props: ['showModal'],
  methods: {
    closeModal() {
      this.$store.dispatch(SWITCH_CREATEPOST_MODAL, false)
    }
  }
}
</script>
