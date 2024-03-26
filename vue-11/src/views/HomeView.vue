<template>
  <div class="home">
    <Contents :contents="contents"></Contents>
  </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from "vue";
import Contents from "../components/Contents.vue";
export default {
  name: "HomeView",
  components: { Contents },
  setup() {
    const contents = ref([
      { id: 1, title: "Deneme 1", details: "Detail 0" },
      { id: 2, title: "Deneme 2", details: "Detail 00" },
      { id: 3, title: "Deneme 3", details: "Detail 000" },
      { id: 4, title: "Deneme 4", details: "Detail 0000" },
    ]);
    return { contents };
  },
};
</script>