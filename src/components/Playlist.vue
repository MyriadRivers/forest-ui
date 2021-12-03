<template>
  <div class="playlist">
    <div class="scroll-box">
      <table>
        <thead>
          <tr>
              <th scope="row"> </th>
              <td v-for="(beat, i) in totalBeats" :key="i"> {{ i + 1 }} </td>
          </tr>
        </thead>
      </table>
      <table>
        <tbody>
          <Track
            class="track"
            v-for="(track, i) in totalTracks"
            :key="i"
            :name="trackNames[i]"
            :totalBeats="totalBeats"
            :dStepName = danceStepName
            :dStepLength = danceStepLength
            v-on:update-track-contents="updateTracks"
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
  // Probably don't need both the number of tracks and the names, since you can get number from names
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
  },
  methods: {
    updateTracks (trackName, contents) {
      this.trackContents[trackName] = contents
      this.$emit('update-playlist', this.trackContents)
    },
    initializeTracks () {
      var tracksArray = {}
      for (let i = 0; i < this.trackNames.length; i++) {
        tracksArray[this.trackNames[i]] = new Array(this.totalBeats)
        for (let j = 0; j < this.totalBeats; j++) {
          tracksArray[this.trackNames[i]][j] = 1
        }
      }
      return tracksArray
    }
  },
  data () {
    return {
      trackContents: this.initializeTracks()
    }
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
.track {
  &:nth-of-type(odd) {
    background: #f2f2f2;
  }
  &:nth-of-type(even) {
    background: white;
  }
}
table, th, td {
  border-collapse: collapse;
}
th {
  text-transform: uppercase;
  font-weight: normal;
  height: 30px;
  min-width: 30px;
}
td {
  min-width: 60px;
  padding-right: 1px;
}
</style>
