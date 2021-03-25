<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
html, body{
  margin:0;
  padding: 0;
  background-color: #fff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

@media screen and (max-width: 775px) {
  body{
    overflow-x:hidden;
  }
}
</style>
