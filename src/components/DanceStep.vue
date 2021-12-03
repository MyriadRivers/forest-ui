<template>
    <label>
      <input type="radio" name="steps" :value="name" :checked="selected">
      <td :class="`dance-step checked-${selected}`" @click="selectStep">
        {{ name }}
        <br>
        {{ beatLength }}
      </td>
    </label>
</template>
<script>
export default {
  name: 'DanceStep',
  props: ['name', 'beatLength'],
  methods: {
    selectStep () {
      this.selected = true
      this.$emit('select-step', this.name, this.beatLength)
    }
  },
  data () {
    return {
      selected: false
    }
  }
}
</script>
<style scoped>
td {
  border: 1px solid white;
;
}
.dance-step {
    padding: 10px;
}
[type=radio]:checked + .dance-step{
  background: white;
}
[type=radio] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
[type=radio] + .dance-step {
  cursor: pointer;
}
</style>
