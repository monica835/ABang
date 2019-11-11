<template>
<section class="search-sec">
    <div class="container">
        <form action="#" method="post" novalidate="novalidate">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                          <select class="form-control search-slt">
                            <option class="datepicker">Choose your Choices</option>
                              <option>Car</option>
                              <option>Van</option>
                              <option>Motorcycle</option>
                              <option>Bus</option>
                              <option>Boat</option>                            
                            </select>
                       </div>
                       <div class="col-lg-3 col-md-3 col-sm-12 p-0 ">
                            <!-- <div class="form-control search-slt"> -->
                              <input type="text" class="datepicker" placeholder="location"/>
                            <!-- </div>                            -->
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0 ">
                            <div class="form-control search-slt">
                               <input type="date" v-model="date">
                            </div>                           
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            <button type="button" class="btn btn-primary wrn-btn"  @click="search">Search</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </form>
    </div>
</section>
</template>
<style scoped>
.search-sec{
    padding: 2rem;
}
.search-slt{
    display: block;
    width: 100%;
    font-size: 0.875rem;
    line-height: 1.5;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    height: calc(3rem + 2px) !important;
    border-radius:0;
    font-family:  Raleway-SemiBold;
}
.wrn-btn{
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    text-transform: capitalize;
    height: calc(3rem + 2px) !important;
    border-radius:0;
    font-family:  Raleway-SemiBold;
}
.datepicker{
  width: 100%;
    font-size: 16px;
    font-weight: 400;
    text-transform: capitalize;
    height: calc(3rem + 2px) !important;
    border-radius:0;
    font-family:  Raleway-SemiBold;
}


.container {
    max-width: 1140px;
    margin-top: 270px;
}
option{
  font-family: Raleway-SemiBold;
}
</style>
<script>
import ROUTER from 'router'
export default {
  name: 'component',
props: [],
mounted() {

},
data() {
  return {
    // date: new Date().toJSON.split('T')[0],
    date: new Date(),
  }
},
methods: {
  search(){
    ROUTER.push('/nextpage');
  }
},

 }

</script>

