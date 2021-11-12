<template>
  <div class="playlist">
    <div class="playlist-holder">
      <table>
        <thead>
          <tr>
              <th scope="row"> Track </th>
              <td v-for="(beat, i) in totalBeats" :key="i"> {{ i + 1 }} </td>
          </tr>
        </thead>
        <tbody>
          <Track
            v-for="(track, i) in totalTracks"
            :key="i"
            :name="trackNames[i]"
            :totalBeats="totalBeats"
            :dStepName = danceStepName
            :dStepLength = danceStepLength
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Track from '@/components/Track.vue'

export default {
  name: 'Playlist',
  props: {
    totalTracks: Number,
    trackNames: Array,
    totalBeats: Number,
    // Placeholder attributes passed down to track and then to beat cell, clean this up later
    danceStepName: String,
    danceStepLength: Number
  },
  components: {
    Track
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.playlist-holder {
  max-width: 100vw;
  overflow-x: scroll;
}
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>
