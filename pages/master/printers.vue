<template>
  <div>
    <page-title title="配信先一覧" />
    <div class="main-contents">
      <div class="container">
        <ul>
          <li v-for="printer in printers" :key="printer" class="company-list">
            {{ printer }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'

export default {
  components: {
    PageTitle
  },
  async asyncData ({ $axios }) {
    return {
      printers: await $axios.$get('/api/printers')
    }
  }
}
</script>

<style scoped>
.title {
  margin-left: 10%;
  padding: 20px;
  color:#2196F3;
}
.container {
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 10px;
  border:2px solid rgb(209, 206, 206);
}
.printer-address {
    padding: 2px;
}
.company-list {
    padding: 2%;
    padding-left: 15%;
    padding-right: 5%;
}
ul {
  list-style: none;
}
.main-contents {
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 110px;
    width: 50%;
    color: black;
}
</style>
