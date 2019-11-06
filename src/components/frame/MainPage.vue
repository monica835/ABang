<template>

   
<div class="input-group">
    <input type="text" class="form-control " placeholder="Search this blog">
    <div class="input-group-append">
      <button class="btn btn-secondary" type="button">
        <i class="fa fa-search"></i>
      </button>
    </div>
  </div>

</template>
<style scoped>
.has-search .form-control {
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
	border-color: blue;
}
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
</style>

