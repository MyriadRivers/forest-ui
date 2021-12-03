<template>
    <td :class="`beatcell empty-${ isEmpty }`" v-if="danceStepLength != 0" :colspan="danceStepLength" @click="addStep" @contextmenu.prevent="removeStep">
        {{ danceStep }}
    </td>
</template>

<script>
export default {
  name: 'BeatCell',
  props: ['beatNumber', 'danceStepName', 'danceStepLength', 'isFree'],
  methods: {
    addStep () {
      if (this.isEmpty && this.isFree) {
        this.danceStep = this.danceStepName
        this.$emit('add-step', this.beat, this.danceStepLength)
        this.isEmpty = false
      }
    },
    removeStep () {
      if (!this.isEmpty) {
        this.danceStep = ''
        this.$emit('remove-step', this.beat, this.danceStepLength)
        this.isEmpty = true
      }
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

<style scoped>
/* Sets beat cells to a color if they are currently populated
   TODO: Make the color distinct for different dance steps */
.empty-false {
  background: #f5bfe4;
}
</style>
