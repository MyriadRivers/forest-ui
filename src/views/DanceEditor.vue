<template>
  <div class="Dance Editor">
    <Playlist
      :totalTracks="12"
      :trackNames="['Arm 1', 'Arm 2', 'Arm 3', 'Arm 4', 'Arm 5', 'Arm 6', 'Arm 7', 'Arm 8', 'Arm 9', 'Arm 10', 'Arm 11', 'Arm 12']"
      :totalBeats="64"
      :danceStepName = stepName
      :danceStepLength = stepLength
    />
    <!-- Placeholder inputs just for demo purposes -->
    <br>
    <label>Name:</label>
    <input v-model="stepName">
    <br>
    <label>Length:</label>
    <input v-model.number="stepLength">
    <br>
    <button>submit</button>
    <!-- Another placeholder to quickly output all the track's contents -->
  </div>
</template>

<script>
// @ is an alias to /src
import Playlist from '@/components/Playlist.vue'

export default {
  name: 'DanceEditor',
  components: {
    Playlist
  },
  data () {
    return {
      // Placeholder attributes passed down to playist and then to track and then to beat cell, clean this up later
      stepName: '',
      stepLength: 8
    }
  }
}
</script>
