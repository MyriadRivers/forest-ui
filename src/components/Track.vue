<template>
  <tr class="track">
      <th scope="row"> {{ name }} </th>
      <BeatCell
        v-for="(beat, i) in totalBeats"
        :key="i"
        :beatNumber="i"
        :danceStepName="dStepName"
        :danceStepLength="beatCellLengths[i]"
        :isFree="isFree(i)"
        v-on:add-step="merge"
        v-on:remove-step="unmerge"
      />
  </tr>
</template>

<script>
import BeatCell from '@/components/BeatCell.vue'

export default {
  name: 'Track',
  props: ['name', 'totalBeats', 'dStepName', 'dStepLength'],
  components: { BeatCell },
  methods: {
    merge (beatIndex) {
      // console.log('merge at ' + beatIndex)
      // dummy length for now, move the set steplength step to somewhere outside where it happens before any function, not just merge
      this.stepLength = this.dStepLength

      this.beatCellLengths[beatIndex] = this.stepLength
      // set all cell lengths to 0 for the duration of the step; these cells will all be merged into the first

      for (let i = 1; i < this.stepLength; i++) {
        this.beatCellLengths[beatIndex + i] = 0
      }
      // this.debugCells()
    },
    unmerge (beatIndex) {
      // console.log('unmerge at ' + beatIndex)
      this.stepLength = 1

      this.beatCellLengths[beatIndex] = this.stepLength
      // revert all trailing 0 length cells (previously merged) back to length 1
      for (let i = beatIndex + 1; this.beatCellLengths[i] === 0; i++) {
        this.beatCellLengths[i] = 1
      }
      // this.debugCells()
    },
    initBeats () {
      var beatsArray = new Array(this.totalBeats)
      // all beat cells initially length 1
      for (let i = 0; i < this.totalBeats; i++) {
        beatsArray[i] = 1
      }
      return beatsArray
    },
    isFree (beatIndex) {
      this.stepLength = this.dStepLength
      for (let i = 0; i < this.stepLength; i++) {
        // TODO: Change check from against 1 to an actual flag for being free, as there can be valid dance steps that are 1 beat long
        if (this.beatCellLengths[beatIndex + i] !== 1) return false
      }
      return true
    },
    debugCells () {
      var cellLengths = ''
      for (let i = 0; i < this.totalBeats; i++) {
        cellLengths += this.beatCellLengths[i] + ' '
      }
      console.log(cellLengths)
    }
  },
  data () {
    return {
      beatCellLengths: this.initBeats(),
      stepLength: 0
    }
  }
}
</script>

<style>
  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
  }
</style>
