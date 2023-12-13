<script lang="ts">
import TheWelcome from '../components/TheWelcome.vue';

export default {
  data() {
    return {
      year: '2023',
      input:''
    };
  },
  components: {
    TheWelcome
  },
  methods :{
    // async getDrivers(year: string): Promise<void> {
    // try {
    //   // Assuming driverService.getDriver returns a Promise
    //   driverService.getDriver(year);
    //   // Additional logic after successfully getting the driver for the specified year
    // } catch (error) {
    //   // Handle errors here
    //   console.error('Error fetching driver:', error);
    // }

    show(){
      console.log(this.input);
    }
  }
}
</script>

<template>
  <main>
    <the-welcome />
    <div>
    </div>
    <textarea v-model="input" @click="show"></textarea>
  </main>
</template>
