<template>
    <td class="beat-cell" :colspan="stepLength" @click="addStep" @contextmenu.prevent="removeStep">
        {{ danceStep }}
    </td>
</template>

<script>
export default {
  name: 'BeatCell',
  props: ['danceStepName', 'danceStepLength'],
  methods: {
    addStep () {
      if (this.isEmpty) {
        this.danceStep = this.danceStepName
        this.stepLength = this.danceStepLength
        this.$emit('add-step', this.stepLength)
      }
      this.isEmpty = false
    },
    removeStep () {
      if (!this.isEmpty) {
        this.danceStep = ''
        this.stepLength = 1
        this.$emit('remove-step', this.stepLength)
      }
      this.isEmpty = true
    }
  },
  data () {
    return {
      danceStep: '',
      stepLength: Number,
      isEmpty: Boolean
    }
  }
}
</script>
