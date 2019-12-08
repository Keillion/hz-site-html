<template>
  <div>
    <h1>Hello Keillion</h1>
    <p>Today is {{date}}</p>
  </div>
</template>

<script>
export default {
  name: 'chat',
  data() {
    return {
      date: (()=>{
        let time = new Date();
        return time.toDateString();
      })()
    }
  }
}
</script>
