export default {
  install(Vue) {
    Vue.prototype.$eventBus = new Vue();
  }
}
