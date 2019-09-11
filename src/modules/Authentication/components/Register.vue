<template>
  <div class="w-full max-w-xs m-auto">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Username
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
          @keyup="validateInput"
          v-model="username"
          v-bind:class='{"border-red-500": errors.username && errors.username.isDirty, "border-green-500": errors.username && !errors.username.isDirty}'
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Email
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
          v-model="email"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
          v-model="password"
        />
        <p class="text-xs italic">Please choose a password.</p>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click="register"
        >
          <span v-if="!isLoggedIn">Register</span>
          <span v-else>Loading.....</span>
        </button>
        <router-link
          :to="'/authentication/login'"
          class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >login</router-link
        >
      </div>
    </form>
    <p class="text-center text-gray-500 text-xs">
      &copy;2019 Acme Corp. All rights reserved.
    </p>
  </div>
</template>

<script>
import mixin from '../mixin.js'
export default {
  name: "Register",
  data() {
    return {};
  },
  mixins: [mixin],
  computed: {
     isLoggedIn() {
       console.log(this.$store.state)
       return this.$store.state.AuthStore.isLoading
     },

      errors() {
        return this.$store.state.AuthStore.errors
      },

     username: {
     	get() {
     		return this.$store.state.AuthStore.form.username
      },
      set(value) {
     		this.$store.commit('AuthStore/setFormFields', {field: 'username', value})
      }
     },

		email: {
			get() {
				return this.$store.state.AuthStore.form.email
			},
			set(value) {
				this.$store.commit('AuthStore/setFormFields', {field: 'email', value})
			}
		},

		password: {
			get() {
				return this.$store.state.AuthStore.form.password
			},
			set(value) {
				this.$store.commit('AuthStore/setFormFields', {field: 'password', value})
			}
		}
  },
  methods: {
    async register() {
      // await this.$store.dispatch("AuthStore/createNewUser");
      // this.$router.push({path: '/post'})
      this.$store.dispatch('AuthStore/validateFormInputs');
    },

		validateInput() {
			this.$store.dispatch('AuthStore/validateFormInputs');
    }
  }
};
</script>

<style scoped></style>
