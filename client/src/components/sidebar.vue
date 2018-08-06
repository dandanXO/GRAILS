<template>

    <div>
        <b-card no-body
                style="max-width: 20rem;"
                img-src="https://placekitten.com/380/200"
                img-alt="Image"
                img-top>
            <h4 slot="header">General Function</h4>


            <b-list-group flush>
            <b-list-group-item><router-link  to="/diplay"> <b-button variant="primary " size="lg" >show Q4</b-button></router-link></b-list-group-item>

                <b-list-group-item><router-link  to="/p1"> <b-button variant="primary " size="lg" >Gbutton1</b-button></router-link></b-list-group-item>
                <b-list-group-item><router-link  to="/p2"> <b-button variant="primary " size="lg" >Gbutton2</b-button></router-link></b-list-group-item>
<b-card-footer><h4>Other Function</h4></b-card-footer>
                <b-list-group-item><router-link  to="/p3"> <b-button variant="primary " size="lg" >Obutton1</b-button></router-link></b-list-group-item>

            </b-list-group>


            <b-card-img src="https://placekitten.com/480/210"
                        alt="Image"
                        bottom></b-card-img>
        </b-card>
    </div>

</template>

<script>

export default {

  data () {
    return {

    }
  },

  methods: {

  }
}
</script>
