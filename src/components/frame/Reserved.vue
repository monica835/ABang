<template> 
  <mdb-date-picker v-model="date" />
</template>
<script>
  import { mdbDatePicker } from 'mdbvue';
  export default {
    name: 'Example',
    components: {
      mdbDatePicker
    },
    data() {
      return {
        date: ''
      };
    }
  }
</script>