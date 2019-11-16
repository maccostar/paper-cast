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
    <v-dialog
      v-model="showModal"
      width="400"
    >
    <v-card
      height="200px"
    >
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          配信指示完了
        </v-card-title>

        <v-card-text
          color="Black"
        >
          <br>
          カレンダーを印刷しています。
          <br>
          しばらく落ちください。
          </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
             rounded
             color="primary"
             dark
            @click="showModal = false"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      today: moment().format('YYYY-MM-DD'),
      showModal: false
    }
  },

  computed: {
  },

  mounted () {
  },

  methods: {
    async onDelivery () {
      await this.$axios.$put(`/api/deliveryDate/?deliveryDate=${+this.today.split('-').pop()}`)
      this.showModal = true
    },
    closeModal () {
      this.showModal = false
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
