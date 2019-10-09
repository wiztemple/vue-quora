<template>
  <div class="slideIn" :class="[active ? 'slideIn' : 'fadeOut']" :style="{display: active ? 'block' : 'none'}" id="pos-absolute">
    <div class="alert" :class="`alert-${alertType}`">
      <div class="alert-content">
        <div class="alert-icon">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3333 4L6 11.3333L2.66667 8"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <span class="emoji2" :class="alertType"></span>
        <div class="alert-message">{{message}}</div>
      </div>
      <div class>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13 1L1 13" stroke="#C4C4C4" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M1 1L13 13" stroke="#C4C4C4" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      message: '',
      type: '',
      timer: null,
    };
  },
  computed: {
    alertType() {
      return this.$options.supportedTypes.includes(this.type) ? this.type : 'info'
    }
  },
  mounted() {
    this.$eventBus.$on("show alert", ({
      message = '',
      type = 'success',
      timeout = 4000,
    } = {}) => {
      if (this.timer) clearTimeout(this.timer);
      this.active = true;
      this.message = message;
      this.type = type;
      this.timer = setTimeout(this.close, timeout);
    });
  },
  methods: {
    close() {
      this.active = false;
      this.message = '',
      this.type = ''
    }
  },
  supportedTypes: ['success', 'info', 'danger', 'warning'],
};
</script>

<style lang="scss">
.alert {
  display: flex;
  justify-content: space-between;
  align-items: center;
  // position: relative;
  padding: 15px 20px;
  margin-bottom: 16px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
  background-color: white;
  &-content {
    display: flex;
    justify-content: flex-start;
  }
  &-success {
    border-left: 2px solid #02a959;
  }
  &-info {
    border-left: 2px solid #2a83d6;
    position: absolute;
    top: 0px;
  }
  &-warning {
    border-left: 2px solid #eaa318;
  }
  &-danger {
    border-left: 2px solid #d60b2f;
  }
}

.alert div:not(:first-child) {
  margin: 0 10px;
}
.alert .emoji,
.alert .alert-message {
  padding-top: 3px;
}

.alert .alert-icon {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
.alert-success .alert-icon {
  background-color: #02a959;
}
.alert-info .alert-icon {
  background-color: #2a83d6;
}
.alert-warning .alert-icon {
  background-color: #eaa318;
}
.alert-danger .alert-icon {
  background-color: #d60b2f;
}
.dismiss-btn svg:hover path {
  stroke: #777;
}
.emoji2 {
  font-size: 20px;
  min-width: 1em;
  margin: 0 0.4em;
}
.emoji2::after {
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.success::after {
  content: "😀";
  --grin-1: "😁";
  --grin-2: "😂";
  animation-name: threeFrames;
  animation-duration: 2s;
}
.danger::after {
  content: "😟";
  --grin-1: "😠";
  --grin-2: "😡";
  animation-name: threeFrames;
  animation-duration: 2s;
}
.warning::after {
  content: "🙂";
  --grin-1: "🙁";
  --grin-2: "🙄";
  animation-name: threeFrames;
  animation-duration: 2s;
}
.info::after {
  content: "✊";
  --grin-1: "✋";
  --grin-2: "✌";
  animation-name: threeFrames;
  animation-duration: 2s;
}

#pos-absolute {
  position: fixed;
  display: none;
  top: 50px;
  right: 10px;
  z-index: 200000;
}

.slideIn {
  animation: slideIn 1s;
}

.fadeOut {
  animation: fadeOut 3s ease-in-out;
}

@keyframes threeFrames {
  33.333% {
    content: var(--grin-1);
    transform: rotate(90deg);
  }

  66.666% {
    content: var(--grin-2);
    transform: rotate(90deg);
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    display: none;
  }
}

@keyframes slideIn {
  0% {
    right: -1000px;
  }

  100% {
    right: -500px;
  }
}
</style>
