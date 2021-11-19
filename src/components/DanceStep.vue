<template>
    <td>
        <input class="dance-step" type="radio" name="steps" :value="name" @change="selectStep">
        <br>
        <label>{{ name }}</label>
        <br>
        <label>{{ beatLength }}</label>
    </td>
</template>
<script>
export default {
  name: 'DanceStep',
  props: ['name', 'beatLength'],
  methods: {
    selectStep () {
      this.$emit('select-step', this.name, this.beatLength)
    }
  }
}
</script>
<style scoped>
.dance-step {
    min-width: 200px;
}
</style>
