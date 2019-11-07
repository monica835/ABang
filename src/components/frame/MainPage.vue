<template>

   
<!-- <div class="input-group">
    <input type="text" class="form-control primary " placeholder="Search this blog">
    <div class="input-group-append">
      <button class="btn btn-primary" type="button"><i class="fa fa-search"></i>
      </button>
    </div> -->
 <div>
     <h1 class="text">Having some trouble searching for transportation rentals?</h1>
     <h2 class="textone">Wait and search in Abang.com</h2>
     <P></P>
  <div class="wrap">
   <div class="search">
      <input type="text" class="searchTerm" placeholder="What are you looking for?">
      <button type="submit" class="searchButton btn btn">
        <i class="fa fa-search"></i>
     </button>
   </div>
</div>
</div>

</template>
<style scoped>
/* .has-search .form-control {
    padding-left: 2.375rem;
	border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    width: -2px;
	margin-right: 0px;
    margin-left: 272px;
    margin-top: 293px
	
}
.input-group > .form-control[data-v-941d690c]:not(:last-child), .input-group > .custom-select[data-v-941d690c]:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    margin-top: 293px;
    margin-left: 239px;
	border-color:  #4C93FF;
    border:5px solid  #4C93FF;
} */
.has-search .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: #aaa;
}
.input-group-prepend, .input-group-append {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    margin-top: 293px;
    margin-right: 270px;
}
.search {
  width: 100%;
  position: relative;
  display: flex;
}

.searchTerm {
  width: 100%;
  border: 3px solid #4C93FF;
  border-right: none;
  padding: 5px;
  height: 36px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9DBFAF;
}

.searchTerm:focus{
  color: #4C93FF;
}

.searchButton {
  width: 40px;
  height: 36px;
  border: 1px solid #4C93FF;
  background: #4C93FF;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}

/*Resize the wrap to see the search bar change!*/
.wrap{
  width: 30%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.text{
    font-family:'Times New Roman', Times, serif;
    font-size: 20px;
    margin-top: 266px;
}
.textone{
    font-family:'Times New Roman', Times, serif;
    font-size: 15px;

}

</style>

