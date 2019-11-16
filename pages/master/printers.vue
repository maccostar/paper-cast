<template>
  <div class="page">
    <div class="title">
      配信先一覧
    </div>
    <div class="main-contents">
      <div class="container">
        <ul>
          <li v-for="item in data" :key="item.index" class="company-list">
            <div class="company-name">
              {{ item.companyName }}
            </div>
            <ul>
              <li v-for="(prenter, index2) in item.printers" :key="index2" class="printer-address">
                {{ prenter.address }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
    // TODO API取ってこれたらこれ↓消す
      data: [
        {
          companyId: 1,
          companyName: 'CompanyA',
          printers: [
            { address: 'aaaa@abc.abc' },
            { address: 'aaaa@abc.abc' },
            { address: 'aaaa@abc.abc' },
            { address: 'aaaa@abc.abc' }
          ]
        },
        {
          companyId: 2,
          companyName: 'CompanyB',
          printers: [
            { address: 'aaaa@abc.abc' },
            { address: 'aaaa@abc.abc' },
            { address: 'aaaa@abc.abc' }
          ]
        }
      ]
    }
  },
  async asyncData ({ $axios }) {
    return {
      // TODO プリンタ一覧を取得する
      date: await $axios.$get('https://api.coindesk.com/v1/bpi/currentprice.json')
    }
  },

  mounted () {
    console.log(this)
    console.log(this.data)
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
.company-name {
    font-size: 140%;
    font-weight: bold;
    color:rgb(41, 149, 238);
}
.printer-address {
    padding: 2px;
}
.company-list {
    padding: 2%;
    padding-left: 15%;
    padding-right: 5%;
}
.page {
    background: white
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
