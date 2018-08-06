<template>




    <b-col cols="10">

      <h2>
        Customer List
      </h2>

        <select v-model="selected">

          <option v-for="(item, index) in factory" v-bind:value="item.factory" v-on:click="getnumber">
            {{ item.factory }}
          </option>
        </select>

        <span>Selected: {{ selected }}</span>




<b-form-select v-model="selected" class="mb-12">
 <option  v-for="(item, index) in numbers" v-bind:value="item" >{{ item }}</option>
</b-form-select>

    </b-col>


</template>

<script>

import axios from 'axios'

export default {
  name: 'CustomerList',
  data () {
    return {
      fields: {
        name: { label: 'Name', sortable: true, 'class': 'text-center' },
        city: { label: 'City', sortable: true },
        actions: { label: 'Action', 'class': 'text-center' }
      },
      factory: [],
      selected: "",
      numbers:[],
      errors: []
    }
  },
  created () {
    axios.get(`http://localhost:8080/display`)
    .then(response => {
    console.log(response.data)
      this.factory = response.data
    })
    .catch(e => {

      this.errors.push(e)
    })
  },
  methods: {
    getnumber (customer) {
      console.log(this.selected)
      axios.get('http://localhost:8080/display/'+this.selected)
      .then(response => {
         console.log(response.data)
         this.numbers = response.data
      })
      .catch(e => {
        consolo.log(e)
      })
    }
  }
}
</script>
<style>
.container{
  margin: 0 auto;
    width: 100%;
}
</style>
