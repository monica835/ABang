<template>
  <div >
    <!-- <b-navbar toggleable="lg" type="dark" class="navbar"  >
      <b-navbar-brand href="#" id="title">ABang</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
       <b-collapse id="nav-collapse" is-nav> -->
      <!-- <b-navbar-nav class="ml-auto" is-nav v-if="auth.user===null"> -->
        <!-- <b-nav-item  v-show="$route.path === '/register' || $route.path === '/login'|| $route.path === '/' ? true: false" v-on:click="redirect('/login')">Login</b-nav-item> -->
        <!-- <b-nav-item  v-show="$route.path === '/register' || $route.path === '/login'|| $route.path === '/' ? true: false" @click="redirect('/register')" >Register</b-nav-item> -->
      <!-- </b-navbar-nav> -->
      
         
    <!-- <input class="form-control  ml-auto" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success ml-auto" type="submit">Register</button>
    <button class="btn btn-outline-success ml-auto" type="submit">Login</button> -->
    <b-navbar toggleable="lg" type="dark" class="navbar"  >
  <a class="navbar-brand a" >ABang</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
    <form class="form-inline my-2 my-lg-0">
      <!-- <input class="form-control mr-sm-2" type="search" placeholder="Search"> -->
      <button class="btn btn-outline-primary my-2 my-sm-0 custom-css" type="submit">Register</button>
       <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Login</button>
    </form>
  </div>
    </b-navbar>
  </div>
</template>
<style scoped >
.navbar{
   background-color:white;
   height: 100px;
   -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75); 

}
.ml-auto{
  background-color: white;
  margin-left: 108px;
}
a{
  color: brown;
  font-family: cursive;

}

</style>
<script>
import Router from 'router'
import AUTH from 'services/auth'
export default  {
  data(){
    return{
      auth:AUTH
    }
  },
    methods: {
        redirect(route){
            Router.push(route)
        }
    }
}
</script>
