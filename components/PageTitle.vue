<template>
  <div class="page-title">
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'title'
    }
  }
}

</script>

<style lang=scss scoped>
.page-title {
  color: $primary-color;
  font-size: 1.5rem;
  margin: 1.5rem 0;
}
</style>
