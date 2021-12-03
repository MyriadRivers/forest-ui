<template>
  <div class="top-bar">
    <img id="logo" src="./assets/forest_logo_white.png" alt="Forest"/>
    <div id="nav">
      <router-link to="/">dance editor</router-link>&nbsp;
      <router-link to="/dance-step-editor">step editor</router-link>&nbsp;
      <router-link to="/stage-editor">stage editor</router-link>
    </div>
  </div>
  <router-view/>
</template>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}
/* Webfont: BloggerSans-Medium */@font-face {
    font-family: 'BloggerSansMedium';
    src: url('./assets/fonts/BloggerSans-Medium.eot'); /* IE9 Compat Modes */
    src: url('./assets/fonts/BloggerSans-Medium.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('./assets/fonts/BloggerSans-Medium.woff') format('woff'), /* Modern Browsers */
         url('./assets/fonts/BloggerSans-Medium.ttf') format('truetype'), /* Safari, Android, iOS */
         url('./assets/fonts/BloggerSans-Medium.svg#BloggerSans-Medium') format('svg'); /* Legacy iOS */
    font-style: normal;
    font-weight: normal;
    text-rendering: optimizeLegibility;
}

@font-face {
  font-family: 'RobotoBold';
  src: url('./assets/fonts/roboto-condensed.bold.ttf');
}

#app {
  font-family: 'BloggerSansMedium', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #272526;
  background: #f5bfe4;
}

h1 {
  font-family: 'RobotoBold';
  font-size: 50px;
  text-transform: uppercase;
  line-height: 1;
}

#logo {
  align-self: center;
}

.top-bar {
  display: flex;
  justify-content: flex-end;
  background: #272526;
  padding: 20px;
}

#nav {
  display: inline-block;
  padding: 30px;
  margin-left: auto;
  margin-right: 0;

  font-family: 'BloggerSansMedium';
  font-size: 50px;

  a {
    color: white;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
