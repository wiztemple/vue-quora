<template>
  <div class="w-full max-w-xs m-auto">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grasy-700 leading-tight focus:outline-none focus:shadow-outline"
               id="email" type="email" placeholder="Email" v-model="form.email">
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
               id="password" type="password" placeholder="******************" v-model="form.password">
        <p class="text-red-500 text-xs italic">Please choose a password.</p>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button" @click="loginUser">
          Sign In
        </button>
        <router-link :to="'/authentication/register'" class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">register</router-link>
      </div>
    </form>
    <p class="text-center text-gray-500 text-xs">
      &copy;2019 Acme Corp. All rights reserved.
    </p>
  </div>
</template>

<script>
	export default {
    name: 'Login',
    data() {
      return {
        form: {
          email: "",
          password: ""
        }
      }
    },
    methods: {
      async loginUser() {
        await this.$store.dispatch("AuthStore/loginUser", this.form);
        this.$router.push({path: '/post'})
      }
    }
	}
</script>
