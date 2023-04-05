<template>
  <div>
    <div class="timer">
      <p id="demo">
        <span>
          <span class="timer-num">{{ days }} дн.</span>
          <span class="padding-l">:</span>
          <!-- <span class="timer-cal"></span> -->
        </span>
        <span>
          <span v-if="hours < 10" class="timer-num">0{{ hours }} час.</span>
          <span v-if="hours > 9" class="timer-num">{{ hours }} час.</span>
          <span class="padding-l">:</span>
          <!-- <span class="timer-cal"></span> -->
        </span>
        <span>
          <span v-if="minutes < 10" class="timer-num">0{{ minutes }} мин.</span>
          <span v-if="minutes > 9" class="timer-num">{{ minutes }} мин.</span>
          <span class="padding-l">:</span>
          <!-- <span class="timer-cal"></span> -->
        </span>
        <span>
          <span v-if="seconds < 10" class="timer-num">0{{ seconds }} сек.</span>
          <span v-if="seconds > 9" class="timer-num">{{ seconds }} сек.</span>
          <!-- <span class="timer-cal"></span> -->
        </span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
    }, 1000);
  },
  props: ["date"],
  data() {
    return {
      timerdate: Math.trunc(new Date(this.date).getTime() / 1000),
      now: Math.trunc(new Date().getTime() / 1000)
    };
  },
  computed: {
    seconds() {
      return (this.timerdate - this.now) % 60;
    },
    minutes() {
      return Math.trunc((this.timerdate - this.now) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.timerdate - this.now) / 60 / 60) % 24;
    },
    days() {
      return Math.trunc((this.timerdate - this.now) / 60 / 60 / 24);
    }
  }
};
</script>
