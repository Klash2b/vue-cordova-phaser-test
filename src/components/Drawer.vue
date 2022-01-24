<template>
  <div>
    <v-toolbar class="indigo" flat/>

    <v-list-item v-for="(item, i) in items" :key="`item_${i}`"  :to="item.action">
      <v-list-item-icon>
        <v-icon v-text="item.icon"></v-icon>
      </v-list-item-icon>

      <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>


<script>
export default {
  name: "drawer",
  data: function() {
    return {
      items: [
        { icon: 'home', text: this.$t("drawer.home"), action: '/' },
        { icon: 'vibration', text: 'Second test', action: 'second' },
        { icon: 'vibration', text: 'Third test', action: 'third' },
        { icon: 'vibration', text: 'Fourth test', action: 'fourth' },
      ]
    }
  }
}
</script>
