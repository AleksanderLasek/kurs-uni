<template>
  <div class="box">
    <div class="text">
      Trwa połączenie...<br>Czas rozmowy: {{ seconds }}s
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
    ...mapMutations(['updateCallTime']),
    startTimer() {
      this.intervalId = setInterval(() => {
        this.seconds++;
        this.updateCallTime(this.seconds);
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.intervalId);
    },
  },
};
</script>
