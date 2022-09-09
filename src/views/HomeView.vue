<template>
  <div class="home">
    <Button label="Submit" icon="pi pi-check" iconPos="right" />
    <div>
      <Calendar inputId="basic" v-model="date1" autocomplete="off" />
    </div>


    <div class="p-d-inline">Displayed as inline.</div>
    <div class="p-d-flex">Displayed as a flexbox container.</div>
    <div class="p-d-block p-d-lg-inline">Inline for larger screens and block for others.</div>
    <div class="p-d-md-none">Visible on a Small Screen</div>
    <div class="p-d-none p-d-md-inline-flex">Hidden on a Small Screen</div>
    <div class="p-d-none p-d-print-block">Only visible when printed.</div>
    <div class="p-d-block p-d-print-none">Not available for printing.</div>

    <div class="p-d-flex">
      <div class="p-mr-2">Item 1</div>
      <div class="p-mr-2">Item 2</div>
      <div>Item 3</div>
    </div>
    <div class="p-d-flex p-flex-column">
      <div class="p-mb-2">Item 1</div>
      <div class="p-mb-2">Item 2</div>
      <div>Item 3</div>
    </div>
    <div class="p-d-flex p-flex-column p-flex-md-row">
      <div class="p-mb-2 p-mr-2">Item 1</div>
      <div class="p-mb-2 p-mr-2">Item 2</div>
      <div class="p-mb-2 p-mr-2">Item 3</div>
    </div>


    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Button from 'primevue/button';
import Calendar from 'primevue/calendar';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Button,
    Calendar
  },
  created() {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month -1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today,invalidDate];
  },
  data() {
    return {
      date1: null,
    }
  }
}
</script>
