<template>
  <v-app class="layout">
  <v-card
    color="grey lighten-4"
    flat
    height="200px"
    tile>
    <v-toolbar
      prominent
      extended
      :dark="true">
      <div class="logo-image" />

      <v-spacer></v-spacer>

      <v-toolbar-title>
        配信先一覧&emsp;&emsp;&emsp;&emsp;&emsp;
      </v-toolbar-title>

      <v-toolbar-title>配信日選択&emsp;&emsp;&emsp;
      </v-toolbar-title>

    </v-toolbar>
  </v-card>
  <nuxt />
  </v-app>
</template>

<script>
export default {}
</script>

<style scoped>
.logo-image{
  background: center / cover url('~assets/image/papercast-logo.png');
  height: 180px;
  width: 220px;
}
.layout {
  padding: 70px;
}
</style>
