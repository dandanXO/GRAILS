<template>
  <div>
    <h1>HOME PAGE</h1>

  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      msg: 'Welcome to Your Grails & Vue.js App',
      serverInfo: null,
      showLinks: false,
      serverURL: process.env.SERVER_URL
    }
  },
  methods: {
    toggleLinks: function () {
      this.showLinks = !this.$data.showLinks
    }
  },
  created: function () {
    fetch(`${this.$data.serverURL}/application`)
      .then(response => response.json())
      .then(json => {
        this.serverInfo = json
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .navbar-nav li button {
    background: transparent;
    border: none;
    line-height: 20px;
    font-size: 18px;
    color: white;
    padding: 25px 15px;
  }

  .btn-primary:active, .btn-primary.active, .open > .dropdown-toggle.btn-primary {
    background-color: #e7e7e7;
  }

  button span.caret {
    margin-left: 2px;
  }

  .plus-logo {
    font-size: 10rem;
    margin-left: -100px;
    margin-right: -13px;
  }

  .hero-logo {
    width: 161px;
    margin-right: -161px;
    margin-bottom: 88px;
  }
</style>
