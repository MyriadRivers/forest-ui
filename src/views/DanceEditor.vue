<template>
  <div class="Dance Editor">
    <h1>{{ songName }}</h1>
    <Playlist
      :totalTracks="12"
      :trackNames="['Arm 1', 'Arm 2', 'Arm 3', 'Arm 4', 'Arm 5', 'Arm 6', 'Arm 7', 'Arm 8', 'Arm 9', 'Arm 10', 'Arm 11', 'Arm 12']"
      :totalBeats="songLength"
      :danceStepName = stepName
      :danceStepLength = stepLength
      v-on:update-playlist="updatePlaylist"
    />
    <h1>Dance Steps:</h1>
    <div class="scroll-box">
      <table>
        <tr>
          <DanceStep v-for="(step, i) in stepsList" :key="i"
            :name="stepsList[i].name"
            :beatLength="stepsList[i].length"
            v-on:select-step="setActiveStep"
          />
        </tr>
      </table>
    </div>
    <!-- Placeholder inputs just for demo purposes -->
    <!-- <br>
    <label>Name:</label>
    <input v-model="stepName">
    <br>
    <label>Length:</label>
    <input v-model.number="stepLength"> -->
    <br>
    <label>Song Name:</label>
    <input v-model.number="inputName">
    <br>
    <label>Song Length:</label>
    <input v-model.number="inputLength">
    <br>
    <button @click="updateSong">submit</button>
    <br>
    <!-- Another placeholder to quickly output all the track's contents -->
    <button @click="outputSong">Output Song</button>
    <br>
  </div>
</template>

<script>
// @ is an alias to /src
import Playlist from '@/components/Playlist.vue'
import DanceStep from '@/components/DanceStep.vue'

export default {
  name: 'DanceEditor',
  components: {
    Playlist, DanceStep
  },
  methods: {
    updateSong () {
      this.songLength = this.inputLength
      this.songName = this.inputName
    },
    setActiveStep (name, beatLength) {
      // console.log(name + ' has length ' + beatLength)
      this.stepName = name
      this.stepLength = beatLength
    },
    updatePlaylist (listContents) {
      this.playlistContents = listContents
    },
    outputSong () {
      var songArray = new Array(this.playlistContents.length)
      var trackCounter = 0
      for (var track in this.playlistContents) {
        songArray[trackCounter] = []
        var lastDance = ''
        var breathCounter = 0
        // Iterate through all the beats of the current track of the playlist
        for (let i = 0; i < this.playlistContents[track].length; i++) {
          if (this.playlistContents[track][i] === 1) {
            // Current beat on track is empty, so start counting breaths to see how long the breathing period is
            breathCounter++
            lastDance = ''
          } else if (this.playlistContents[track][i] !== lastDance) {
            if (breathCounter !== 0) {
              // If we waited for breathing room, push that first before pushing the new dance
              songArray[trackCounter].push(breathCounter)
              breathCounter = 0
            }
            // If it's a new dance and not a continuation of the old one, note it down in the array
            songArray[trackCounter].push(this.playlistContents[track][i])
            lastDance = this.playlistContents[track][i]
          }
          // Push any remaining space as breath
          if (i === this.playlistContents[track].length - 1 && breathCounter !== 0) {
            songArray[trackCounter].push(breathCounter)
            breathCounter = 0
          }
        }
        trackCounter++
      }
      var listString = ''
      for (let i = 0; i < songArray.length; i++) {
        var trackString = ''
        for (let j = 0; j < songArray[i].length; j++) {
          trackString += songArray[i][j] + ' '
        }
        trackString += '\n'
        listString += trackString
      }
      console.log(listString)
    },
    debugPlaylist () {
      var playlistString = ''
      for (var track in this.playlistContents) {
        playlistString += track + ': '
        for (let i = 0; i < this.playlistContents[track].length; i++) {
          playlistString += this.playlistContents[track][i] + ' '
        }
        playlistString += '\n'
      }
      console.log('DEBUGGING PLAYLIST:\n' + playlistString)
    }
  },
  data () {
    return {
      // Placeholder attributes passed down to playist and then to track and then to beat cell, clean this up later
      stepName: '',
      stepLength: 0,
      inputName: '',
      inputLength: 64,
      songName: '',
      songLength: 64,
      playlistContents: [],
      stepsList: [{ name: 'iso_left', length: 2 },
        { name: 'iso_right', length: 2 },
        { name: 'knock', length: 32 },
        { name: 'wave_back', length: 4 },
        { name: 'wave_right', length: 4 },
        { name: 'wave_left', length: 4 },
        { name: 'lean_back', length: 6 },
        { name: 'dip', length: 8 },
        { name: 'head_down', length: 2 },
        { name: 'head_up', length: 2 },
        { name: 'head_turn_right', length: 2 },
        { name: 'head_turn_left', length: 2 },
        { name: 'turn_big_right', length: 4 },
        { name: 'turn_big_left', length: 4 },
        { name: 'turn_small_right', length: 4 },
        { name: 'turn_small_left', length: 4 },
        { name: 'wave_diagonal_left', length: 4 },
        { name: 'wave_diagonal_right', length: 4 },
        { name: 'semi_circle', length: 8 },
        { name: 'lean', length: 8 },
        { name: 'circle', length: 14 },
        { name: 'bloom', length: 11 },
        { name: 'alive', length: 4 }]
    }
  }
}
</script>

<style>
h1 {
  text-align: left;
}
.scroll-box {
  max-width: 100vw;
  overflow-x: scroll;
}
</style>
