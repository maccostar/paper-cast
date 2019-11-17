<template>
  <div>
    <page-title title="配信日選択" />
    <v-container>
      <v-sheet
        elevation="2"
        class="mx-auto delivery-detail-wrapper"
      >
        <v-row justify="space-around">
          <v-col
            cols="2"
            md="6"
          >
            <v-card
              class="mx-auto"
              max-width="500"
            >
              <v-list disabled>
                <v-list-item-group
                  multiple
                  class="email-container"
                >
                  <template v-for="(printer, i) in printers">
                    <v-divider
                      v-if="!printer"
                      :key="`divider-${i}`"
                    />
                    <v-list-item
                      v-else
                      :key="`item-${i}`"
                      :value="printer"
                    >
                      <template>
                        <v-list-item-content>
                          <v-list-item-title v-text="printer" />
                        </v-list-item-content>
                      </template>
                    </v-list-item>
                  </template>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-col>
          <v-col
            cols="6"
            md="4"
            class="text-center"
          >
            <v-date-picker
              v-model="today"
              is-inline
            />
          </v-col>
        </v-row>
        <div class="text-center">
          <v-btn
            @click="onDelivery()"
            rounded
            color="primary button mt-12"
            dark
          >
            配信
          </v-btn>
        </div>
      </v-sheet>
    </v-container>
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
        <v-divider />
        <v-card-actions>
          <v-spacer />
          <v-btn
            @click="showModal = false"
            rounded
            color="primary"
            dark
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
      newEmail: '',
      showModal: false
    }
  },
  computed: {
  },
  async asyncData ({ $axios }) {
    return {
      printers: await $axios.$get('/api/printers')
    }
  },

  mounted () {
  },

  methods: {
    async onDelivery () {
      await this.$axios.$put(`/api/deliveryDate/?deliveryDate=${+this.today.split('-').pop()}`)
      this.showModal = true
    },
    async getPrinters () {
      this.printers = await this.$axios.$get('/api/printers')
    },
    closeModal () {
      this.showModal = false
    }
  }
}
</script>

<style lang=scss scoped>
.delivery-detail-wrapper {
  padding: 60px 40px;
  max-width: 1000px;
}
.email-container {
  padding: 50px 0;
  max-width: 370px;
  min-height: 373px;
  margin: auto;
}
ul {
  list-style: none;
}
.button {
  height: 46px !important;
  min-width: 142px !important;
}
</style>
