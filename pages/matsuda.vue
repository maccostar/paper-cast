<template>
  <button @click="print">Print</button>
</template>

<script>
export default {
  methods: {
    async print () {
      await this.$axios.$post('/api/sample', {
        printerEmail: 'epsonhacktrek08@print.epsonconnect.com',
        filePath: './server/images/vaiolet.jpg'
      })
    }
  }
}
</script>
