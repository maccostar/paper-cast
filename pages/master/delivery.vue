<template>
    <div class='page'>
      <div class='title'>配信日選択</div>
      <div class='main-contents'>
          <div class='cal-header text-center'>
              <!-- // TODO クリックで今月先月行き来する@clickつける -->
              <v-btn text small class='button'>＜</v-btn>
              {{  month  }}
              <v-btn text small class='button'>＞</v-btn>
          </div>
          <v-sheet height="400">
            <v-calendar
              type="month"
              :now="today"
              :value="today"
              :light="true"
              :shortMonths="true"
            ></v-calendar>
          </v-sheet>
          <div class="send-bottom-area text-center">
              <!-- // TODO 配信ボタンクリックで送信するロジック@clickかく（暇があったら確認モーダルつける） -->
            <v-btn rounded color="primary" dark>配信</v-btn>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    return {
      // 現在日時を取得する
      date: await $axios.$get('https://api.coindesk.com/v1/bpi/currentprice.json')
    }
  },

  data () {
    return {
      today: '2019-11-16',
      selectedDate: [],
      // TODO 今月は後で空文字にする
      month: 'November 2019',
      nextMonth: '',
      prevMonth: ''
    }
  },

  mounted () {
    console.log(this)
    console.log(this.date)
    // this.getMonth()
  },

  method: {
    // TODO 現在月を取得するロジック書く
    getMonth () {
      this.month = JSON.parse(this.month)
      this.month = 'Nov'
      return this.month
    }
    // TODO 来月を取得するロジック書く
    // TODO 先月を取得するロジック書く
  }
}
</script>

<style scoped>
.title {
  margin-left: 10%;
  padding: 20px;
  color:#2196F3;
}
.button {
  color: black;
}
.cal-header {
    background: #FAFAFA;
    color: black;
    width: 100%;
    height: 60px;
    padding: 15px;
}
.page {
    background: white
}
.main-contents {
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 110px;
    width: 50%;
}
.send-bottom-area {
  margin-top: 30px;
}
</style>
