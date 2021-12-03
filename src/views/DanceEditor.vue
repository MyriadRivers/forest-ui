<template>
  <div id="dance-editor">
    <div id="song-holder">
      <div id="song-info-bar">
      <div id="song-name-holder">
        <h1 id="song">Song</h1><h1 id="song-name">{{songName}}</h1>
      </div>
      <div id="song-parameters">
        <label>Song Name:</label>&nbsp;
        <input id="song-name-input" v-model.number="inputName">&nbsp;
        <label>Song Length:</label>&nbsp;
        <input id="song-length-input" v-model.number="inputLength">&nbsp;
        <button @click="updateSong">SAVE</button>&nbsp;
        <button @click="outputSong">OUTPUT</button>
      </div>
    </div>
    <Playlist
      :totalTracks="12"
      :trackNames="['Arm 1', 'Arm 2', 'Arm 3', 'Arm 4', 'Arm 5', 'Arm 6', 'Arm 7', 'Arm 8', 'Arm 9', 'Arm 10', 'Arm 11', 'Arm 12']"
      :totalBeats="songLength"
      :danceStepName = stepName
      :danceStepLength = stepLength
      v-on:update-playlist="updatePlaylist"
    />
    </div>
    <div id="dance-step-holder">
      <h1>Dance Steps</h1>
      <table id="dance-step-table">
        <tr>
          <td v-for="(step, i) in stepsList" :key="i">
            <DanceStep
              :name="stepsList[i].name"
              :beatLength="stepsList[i].length"
              v-on:select-step="setActiveStep"
            />
          </td>
        </tr>
      </table>
    </div>
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
#song-holder {
  padding: 20px;
  background: white;
}
#song-info-bar {
  display: flex;
  justify-content: flex-end;
  font-size: 0px;
}
#song-name-holder {
  display: block;
}
#song {
  display: inline-block;
  margin-right: 20px;
}
#song-name {
  display: inline-block;
  color: #f5bfe4;
}
#song-name-input {
  width: 240px;
}
#song-length-input {
  width: 60px;
}
.scroll-box {
  max-width: 100vw;
  overflow-x: scroll;
}
#dance-step-holder {
  padding: 20px;
}
#dance-step-table {
  display: block;
  text-align: left;
  margin-top: 15px;
}
#dance-step-table td {
  display: inline-block;
}
#song-parameters {
  display: inline-block;
  margin-left: auto;
  margin-right: 0;
  font-size: 25px;
}

#song-parameters button {
  border: none;
  background: #42b983;
  color: white;
  font-family: inherit;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
}

#song-parameters button:active {
  background: #f5bfe4;
}

#song-parameters input {
  font-family: inherit;
  font-size: 20px;
  border: none;
  background: #f2f2f2;
  padding: 10px;
}

#song-parameters input:focus {
  outline: none;
}
</style>
