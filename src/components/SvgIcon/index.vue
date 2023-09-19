<template>
  <svg :class="svgClass" :style="{ color, width, height }">
    <use :xlink:href="iconName" />
  </svg>
</template>
<script setup name="SvgIcon">
import { defineProps, computed } from 'vue';
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  className: String,
  color: {
    type: String,
    default: "black"
  },
  width: {
    type: String,
    default: '16px'
  },
  height: {
    type: String,
    default: '16px'
  }
});

// icon classname
const svgClass = computed(() => {
  let className = props.className ? `icon-${props.className}` : '';
  return ['svg-icon', className]
});

// svg name
const iconName = computed(() => `#icon-${props.name}`);
</script>
<style scoped>
.svg-icon {
  vertical-align: -0.3em;
  overflow: hidden;
  fill: currentColor;
}
</style>