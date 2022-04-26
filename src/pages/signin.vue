<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="rounded-lg shadow-gray-400 shadow-md bg-white">
      <div class="px-3 h-10 leading-10 bg-blue-900 text-white rounded-t-md text-xl">
        Sign-in
      </div>
      <form class="pt-3">
        <div class="flex flex-col px-3">
          <label for="username" class="h-8 leading-8">User name</label>
          <input
            type="text" id="username" v-model="username" :disabled="busy"
            class="border-2 rounded-md h-10 px-2"
          >
        </div>
        <div class="flex flex-col px-3">
          <label for="password" class="h-8 leading-8">Password</label>
          <input
            type="password" id="password" v-model="password" :disabled="busy"
            class="border-2 rounded-md h-10 px-2"
          >
        </div>
        <div class="px-3 h-10 flex items-center gap-2">
          <input type="checkbox" id="remember" v-model="remember" :disabled="busy" class="w-5 h-5">
          <label for="remember">Remember username?</label>
        </div>
        <div class="p-3 flex gap-3 justify-center">
          <button
            type="button" :disabled="lock || busy" @click="signin"
            class="h-10 w-30 bg-blue-600 text-white rounded-md"
          >
            Sign-In
          </button>
          <button
            type="reset" :disabled="busy"
            class="h-10 w-30 border-blue-600 border-2 rounded-md"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  </div>

  <div v-if="busy" class="fixed top-0 bottom-0 left-0 right-0 opacity-80 bg-gray-400">
    Please wait...
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      remember: false,
      ok: true,
      busy: false,
    }
  },
  computed: {
    lock() {
      return this.username === '' || this.password === ''
    },
  },
  methods: {
    signin() {
      // console.log('xxx')
      this.busy = true
      setTimeout(() => {
        this.busy = false
      }, 3000)
    },
  },
}
</script>
