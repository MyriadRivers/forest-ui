<template>
    <td class="beat-cell" :colspan="danceStepLength" @click="addStep" @contextmenu.prevent="removeStep">
        {{ danceStep }}
    </td>
</template>

<script>
export default {
  name: 'BeatCell',
  props: ['beatNumber', 'danceStepName', 'danceStepLength'],
  methods: {
    addStep () {
      console.log('column span, supposedly ' + this.danceStepLength)
      if (this.isEmpty) {
        this.danceStep = this.danceStepName
        this.$emit('add-step', this.beat, this.danceStepLength)
      }
      this.isEmpty = false
    },
    removeStep () {
      if (!this.isEmpty) {
        this.danceStep = ''
        this.$emit('remove-step', this.beat, this.danceStepLength)
      }
      this.isEmpty = true
    }
  },
  data () {
    return {
      beat: this.beatNumber,
      danceStep: '',
      isEmpty: Boolean
    }
  }
}
</script>
