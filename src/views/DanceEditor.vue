<template>
  <div class="Dance Editor">
    <Playlist
      :totalTracks="12"
      :trackNames="['Arm 1', 'Arm 2', 'Arm 3', 'Arm 4', 'Arm 5', 'Arm 6', 'Arm 7', 'Arm 8', 'Arm 9', 'Arm 10', 'Arm 11', 'Arm 12']"
      :totalBeats="64"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Playlist from '@/components/Playlist.vue'

export default {
  name: 'DanceEditor',
  components: {
    Playlist
  }
}
</script>
