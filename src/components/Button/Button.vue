<template>
  <view
    :class="[
      'custom-button',
      `custom-button__${type}`,
      `custom-button__${size}`,
      customClasses,
    ]"
    :style="computedStyles"
    @click="handeClick"
  >
    <slot></slot>
  </view>
</template>

<script lang="ts" setup>
import { computed, type PropType, type CSSProperties } from "vue";

type ButtonType = "primary" | "danger";
type ButtonSize = "normal" | "large";

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String as PropType<ButtonType>,
    default: "primary",
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: "normal",
  },
  customClasses: String,
  customStyles: {
    type: Object as PropType<CSSProperties>,
    default: () => {},
  },
});

const emits = defineEmits(["tap"]);

const handeClick = () => {
  if (props.disabled || props.loading) return;
  emits("tap");
};

const computedStyles = computed(() => ({
  ...props.customStyles,
  // width: props.size === "normal" ? "100%" : "100%",
  // height: props.size === "normal" ? "40px" : "50px",
  // borderRadius: props.size === "normal" ? "10px" : "15px",
}));
</script>

<style lang="scss" scoped>
.custom-button {
  @apply w-full min-w-min h-12 rounded-lg flex justify-center items-center text-base font-bold;
}
</style>