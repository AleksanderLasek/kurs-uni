<template>
  <div class="box">
    <div class="text">
      Zaraz nastąpi połączenie z konsultantem.<br>Oczekiwanie: {{ seconds }}s
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      seconds: 0,
      intervalId: null,
    };
  },
  mounted() {
    this.startTimer();
  },
  unmounted() {
    this.stopTimer();
  },
  methods: {
    ...mapMutations(['updateWaitingTime']),
    startTimer() {
      this.intervalId = setInterval(() => {
        this.seconds++;
        this.updateWaitingTime(this.seconds);
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.intervalId);
    },
  },
};
</script>
