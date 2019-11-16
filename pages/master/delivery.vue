<template>
  <div>
    <page-title title="配信日選択" />
    <div class="main-contents date-picker">
      <v-date-picker
        v-model="today"
        is-inline
      />
      <div class="button date-picker">
        <v-btn @click="onDelivery()" rounded color="primary" dark>
          配信
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import PageTitle from '~/components/PageTitle.vue'

export default {
  components: {
    PageTitle
  },
  data () {
    return {
      today: moment().format('YYYY-MM-DD')
    }
  },

  computed: {
  },

  mounted () {
  },

  methods: {
    async onDelivery () {
      await this.$axios.$put(`/api/deliveryDate/?deliveryDate=${+this.today.split('-').pop()}`)
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
.date-picker {
  padding-right: 9%;
  padding-left: 9%;
}
.button {
  padding: 10%;
  padding-left: 110px;
}
.main-contents {
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 110px;
    width: 50%;
}
.send-botton-area {
  padding-left: 100px;
  margin-right: auto;
  margin-top: 30px;
}
</style>
