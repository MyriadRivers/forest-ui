<template>
  <tr class="track">
      <th scope="row"> {{ name }} </th>
      <BeatCell
        v-for="(beat, i) in totalBeats" :key="i"
        danceStepName="Dummy Step"
        :danceStepLength="beatLength"
        v-on:add-step="merge"
        v-on:remove-step="unmerge"
      />
  </tr>
</template>

<script>
import BeatCell from '@/components/BeatCell.vue'

export default {
  components: { BeatCell },
  name: 'Track',
  props: ['name', 'totalBeats'],
  methods: {
    merge (stepLength) {
      console.log('merge!')
      this.beatLength = 4
    },
    unmerge (stepLength) {
      console.log('unmerge!')
      this.beatLength = 1
    }
  },
  data () {
    return {
      beatSteps: new Array(this.totalBeats)
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
