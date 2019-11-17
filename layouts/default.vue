<template>
  <div>
    <v-toolbar class="background color">
      <img
        src="~assets/image/papercast-logo.png"
        alt="Vuetify.js"
        class="logo-image"
      >
      <v-spacer />

      <v-toolbar-items>
        <v-btn text>
          Link 1
        </v-btn>
        <v-btn text>
          Link 2
        </v-btn>
        <v-btn text>
          Link 3
        </v-btn>
      </v-toolbar-items>

      <template v-if="$vuetify.breakpoint.smAndUp" class="color">
        <div class="header-link">
          コンテンツ一覧
        </div>
        <div class="header-link">
          マイページ
        </div>
      </template>
    </v-toolbar>
    <v-app class="layout">
      <nuxt />
    </v-app>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.logo-image{
  width: 108px;
  height: auto;
  margin: 10px 0 0 33px;
}
.layout {
  padding: 70px;
}
.background {
  background:#000016;
  height: 80px !important;
}
.color {
  color: white;
}
.header-link {
  font-family: "Roboto", sans-serif;
  margin: 10px 40px 0 0;
}
</style>
