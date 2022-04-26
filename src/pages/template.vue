<template>
  <div class="text-bold" :title="age">
    Hello {{ name }}
  </div>
  <div>Hello <span v-html="name"></span></div>
  <button :disabled="lock">
    test <b>{{ name }}</b>
  </button>
</template>

<script>
export default {
  data() {
    return {
      name: 'Somsak',
      name2: '<i onclick="alert(\'test\')">Somsak</i> Sae-Lim',
      age: 25,
      lock: false,
    }
  },
}
</script>

<style>
.text-bold {
  font-weight: bold;
}
</style>
