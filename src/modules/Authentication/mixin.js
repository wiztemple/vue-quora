const mixin = {
  data() {
    return {
      errors: {}
    }
  },
  methods: {
    validation() {
      Object.keys(this.form).forEach(key => {
        if (this.form[key] == '') {
          const error = {
            [key]: {
              isValid: false
            }
          }
          this.errors = {...error,...this.errors}
        } else {
          const error = {
            [key]: {
              isValid: true
            }
          }
          this.errors = { ...error, ...this.errors }
        }
      })
    }
  }
};

export default mixin;
