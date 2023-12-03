<template>
<div class="box">
 <div class="text">
    Trwa połączenie...<br>Czas rozmowy: {{ seconds }}s
 </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      seconds: 0,
      intervalId: null
    };
  },
  mounted() {
    this.startTimer();
  },
  unmounted() {
    this.stopTimer();
  },
  methods: {
    startTimer() {
      this.intervalId = setInterval(() => {
        this.seconds++;
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.intervalId);
    }
  }
};
</script>