<template>
  <div>
    <page-title title="登録中のプリンター" />
    <v-card
      class="mx-auto"
      max-width="500"
    >
      <v-list flat>
        <v-list-item-group
          v-model="model"
          multiple
          class="email-container"
        >
          <template v-for="(item, i) in items">
            <v-divider
              v-if="!item"
              :key="`divider-${i}`"
            />
            <v-list-item
              v-else
              :key="`item-${i}`"
              :value="item"
            >
              <template>
                <v-list-item-content>
                  <v-list-item-title v-text="item" />
                </v-list-item-content>
                <img
                  @click="deleteEmail(item)"
                  src="~/assets/images/buttons/cancel-button.png"
                  alt="Vuetify.js"
                  class="cancel-button"
                >
              </template>
            </v-list-item>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card>

    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }" class="plusButton">
          <v-btn v-on="on" class="mx-2 plusButton" fab dark color="indigo">
            <v-icon dark>
              mdi-plus
            </v-icon>
          </v-btn>
        </template>

        <v-card>
          <v-card-title>
            <span class="headline text-color">新しいプリンターを追加</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Email*" required />
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Password*" type="password" required />
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn @click="dialog = false" color="blue darken-1" text>
              閉じる
            </v-btn>
            <v-btn @click="dialog = false" color="blue darken-1" text>
              登録
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'

export default {
  components: {
    PageTitle
  },
  data: () => ({
    items: [
      'example.example1@example.co.jp',
      'example.example2@example.co.jp',
      'example.example3@example.co.jp',
      'example.example4@example.co.jp'
    ],
    dialog: false,
    model: ['Carrots']
  }),
  methods: {
    deleteEmail (i) {
      this.items = this.items.filter(email => email !== i)
    }
  }

}
</script>

<style lang=scss scoped>
.text-color {
  color: $primary-color;
}
.cancel-button {
  width: 20px;
  height: auto;
}
.email-container {
  padding: 50px 0;
  max-width: 320px;
  margin: auto;
}
.plusButton {
  position: fixed;
  bottom: 30px;
  right: 30px;
}
</style>
