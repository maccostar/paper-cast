<template>
  <div>
    server response {{ sample.test }}
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    return {
      sample: await $axios.$get('/api/sample')
    }
  }
}
</script>
