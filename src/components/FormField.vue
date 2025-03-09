<template>
  <view class="relative overflow-hidden">
    <input
      :type="type"
      :value="modelValue"
      @input="handleInput"
      v-bind="$attrs"
      class="w-full h-12 px-4 rounded-md text-base text-white placeholder:text-[#999] bg-[#15171e]"
    />
  </view>
</template>

<script lang="ts" setup>
import { type PropType, type InputTypeHTMLAttribute } from "vue";

// const props = withDefaults(
//   defineProps<{
//     modelValue?: string | number;
//     type: InputTypeHTMLAttribute;
//   }>(),
//   {
//     modelValue: "",
//     type: "text",
//   }
// );

defineProps({
  modelValue: {
    type: [String, Number, null] as PropType<string | number | null>,
    default: "",
  },
  type: {
    type: String as PropType<InputTypeHTMLAttribute>,
    default: "text",
  },
});

const emits = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
  (e: "input", event: Event): void;
  (e: "change", event: Event): void;
  (e: "blur", event: Event): void;
  (e: "focus", event: Event): void;
}>();

const handleInput = (event: Event) => {
  // 在uniapp端必须使用CustomEvent
  const value = (event as CustomEvent).detail.value;
  emits("update:modelValue", value);
  emits("input", event);
};

// const handleChange = (event: Event) => {
//   // #ifdef H5

//   emits("change", event);
//   // #endif
// };

// const handleBlur = (event: Event) => {
//   emits("blur", event);
// };

// const handleFocus = (event: Event) => {
//   emits("focus", event);
// };
</script>

<style lang="scss" scoped></style>
