<template>
  <svg v-on="$listeners" class="mti-svg-icon" :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script setup lang="ts" name="Svg">
import { defineProps, onMounted } from 'vue';
const { iconClass, className } = defineOptions({
  iconClass: {
    type: String
  },
  className: {
    type: String
  }
});


// computed: {
//     iconName () {
//       return `#icon-${this.iconClass}`;
//     },
//     svgClass () {
//       if (this.className) {
//         return `svg-icon ${this.className}`;
//       }
//       return 'svg-icon';
//     }
//   }
</script>
<style lang="less" scoped>
.svg-icon {
  width: 18px;
  height: 18px;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
</style>
<style lang="less"></style>