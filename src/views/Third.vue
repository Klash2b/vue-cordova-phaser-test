<template>
  <div>
    <abeille style="height: 100px;width:100px;position:absolute;top:0;left:0;" />
    <abeille style="height: 100px;width:100px;position:absolute;top:0;right:0;" />
    <abeille style="height: 100px;width:100px;position:absolute;bottom:0;left:0;" />
    <abeille style="height: 100px;width:100px;position:absolute;bottom:0;right:0;" />
    <abeille style="height: 100px;width:100px;position:absolute;bottom:50%;right:50%;" />
  </div>
</template>

<script>
import abeille from "@/components/Abeille";

export default {
  name: "third",
  components: { abeille },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped></style>
