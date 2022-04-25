<template>
  <div class="test1">
    NAME: {{ name }} <br>
    HBD: <span>{{ hbd }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Teera Binkasem',
      age: 22,
      hbd: '06-01-2002',
    }
  },
}

</script>

<style>
  .test1{
    font-weight: bold;
    color:blueviolet;
  }
</style>
