<template>
  <div id="app">
    <b-row class="" >
      <b-col cols="2">
  <sidebar/>
  </b-col>
    <router-view/>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
