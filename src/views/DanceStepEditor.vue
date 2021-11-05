<template>
  <div class="dance-step-editor">
    <Playlist
      :totalTracks="7"
      :trackNames="['Joint 1', 'Joint 2', 'Joint 3', 'Joint 4', 'Joint 5', 'Joint 6', 'Joint 7']"
      :totalBeats="64"
    />
  </div>
</template>

<script>
import Playlist from '@/components/Playlist.vue'

export default {
  name: 'DanceStepEditor',
  props: ['stepBeatLength'],
  components: {
    Playlist
  }
}
</script>
