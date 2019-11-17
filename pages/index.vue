<template>
  <div>
    <page-title title="コンテンツ一覧" />
    <div class="content-wrapper">
      <template v-for="(category, index) in sortComponents">
        <div :key="`category-${index}`" class="page-subtitle">
          {{ category.genre }}
        </div>
        <div :key="`cate-${index}`" class="d-flex align-content-start flex-wrap mb-8">
          <template v-for="(content, i) in category.contents">
            <v-card
              :key="`divider-${i}`"
              class="mr-5 mb-5"
              max-width="344"
              outlined
            >
              <v-list-item three-line>
                <v-list-item-content class="block">
                  <v-list-item-title class="headline mb-1">
                    {{ content.title }}
                  </v-list-item-title>
                  <div class="content-detail">
                    <v-list-item-subtitle>
                      {{ content.explain }}
                    </v-list-item-subtitle>
                    <v-list-item-subtitle class="mb-1 right">
                      {{ content.creatorName }}
                    </v-list-item-subtitle>
                  </div>
                  <v-list-item-subtitle class="mb-1 font-color-b">
                    配信頻度：{{ content.frequency }}
                  </v-list-item-subtitle>
                  <v-card-actions class="pl-0">
                    <v-btn color="blue darken-1 mr-0" class="delete-mw" text>
                      詳細
                    </v-btn>
                    <v-btn color="blue darken-1 ml-0 mr-0" class="delete-mw" text>
                      登録
                    </v-btn>
                  </v-card-actions>
                </v-list-item-content>
                <img
                  :src="content.coverThumbnail"
                  alt="Vuetify.js"
                  class="cover-thumbnail"
                >
              </v-list-item>
            </v-card>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'

export default {
  components: {
    PageTitle
  },
  data: () => ({
    contents: [
      {
        contentId: 0,
        genre: '日めくりカレンダー',
        title: '日めくり ニーチェ',
        explain: '哲学者の生きた言葉に学ぶ、人生の乗りこなし方',
        creatorName: 'ニーチェ',
        frequency: '毎日',
        coverThumbnail: require('~/assets/images/thumbnails/nietzsche.jpg'),
        hasBought: true
      },
      {
        contentId: 0,
        genre: '世界の絶景',
        title: '美しき世界の絶景',
        explain: '死ぬまでに一度は見たい絶景',
        creatorName: '',
        frequency: '毎日',
        coverThumbnail: require('~/assets/images/thumbnails/amazing-view.jpg'),
        hasBought: true
      },
      {
        contentId: 0,
        genre: '世界の絶景',
        title: '死ぬまでに行きたい！世界の絶景',
        explain: '死ぬまでに一度は見たい絶景',
        creatorName: '詩歩',
        frequency: '毎週火曜日',
        coverThumbnail: require('~/assets/images/thumbnails/before-die.jpg'),
        hasBought: true
      },
      {
        contentId: 0,
        genre: '偉人の格言',
        title: '日本史の偉人',
        explain: '名言、言葉、格言集はこちら',
        creatorName: '',
        frequency: '毎週月曜日',
        coverThumbnail: require('~/assets/images/thumbnails/soseki.jpeg'),
        hasBought: true
      },
      {
        contentId: 0,
        genre: '日めくりカレンダー',
        title: 'AUDREY',
        explain: 'Weekly Calendar',
        creatorName: 'Audrey Hepburn',
        frequency: '毎週月曜日',
        coverThumbnail: require('~/assets/images/thumbnails/audrey.jpg'),
        hasBought: true
      },
      {
        contentId: 0,
        genre: '日めくりカレンダー',
        title: 'まいにち、修造',
        explain: '心を元気にする本気の応援メッセージ',
        creatorName: '松岡 修造',
        frequency: '毎日',
        coverThumbnail: require('~/assets/images/thumbnails/syuzo.jpg'),
        hasBought: true
      }
    ]
  }),
  computed: {
    sortComponents () {
      const sortedComponents = []

      this.contents.forEach((content) => {
        const found = sortedComponents.find(element => element.genre === content.genre)
        if (!found) {
          sortedComponents.push(
            { genre: content.genre,
              contents: [
                content
              ]
            }
          )
        } else {
          const foundIndex = sortedComponents.findIndex(element => element.genre === content.genre)
          sortedComponents[foundIndex].contents.push(content)
        }
      })
      return sortedComponents
    }
  },
  methods: {
  }

}
</script>

<style lang=scss scoped>
.text-color {
  color: $primary-color;
}
.link-color {
  color: #2196F3;
}
.content-detail {
  min-height: 3.7rem;
  max-width: 12rem;
}
.page-subtitle {
  color: $primary-color;
  font-size: 1.2rem;
  margin: 1.2rem 0;
}
.content-wrapper {
  padding: 0 1rem;
}
.right {
  text-align: right;
  margin: 10px 10px 0 0;
}
.block {
  display: block;
  padding-bottom: 0;
}
.cover-thumbnail {
  max-height: 140px;
  max-width: 130px;
  margin: 15px 0;
}
.v-list-item--three-line {
  min-width: 341px;
}
.delete-mw {
  min-width: 0 !important;
  margin-left: 0 !important;
}
.font-color-b {
  color: rgba(0, 0, 0, 0.87) !important;
}
</style>
