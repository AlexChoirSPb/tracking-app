<script setup>
import { computed } from "vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { isOptionsValid, isUndefinedOrNull } from "../validators";
import BaseButton from "./BaseButton.vue";
// const props = defineProps(["options", "placeholder", "selected"]);

// const props = defineProps({
//   selected: Number,
//   options: Array,
//   placeholder: String,
// });

const props = defineProps({
  selected: Number,
  options: {
    required: true,
    type: Array,
    validator: isOptionsValid,
  },
  placeholder: {
    required: true,
    type: String,
  },
});
const emit = defineEmits([["select"]]);
const isNotSelected = computed(() => isUndefinedOrNull(props.selected));
</script>

<template>
  <div class="flex gap-2">
    <BaseButton @click="emit('select', null)">
      <XMarkIcon class="h-8" />
    </BaseButton>
    <select
      class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl"
      @change="emit('select', +$event.target.value)"
    >
      <option :selected="isNotSelected" disabled value="">
        {{ placeholder }}
      </option>
      <option
        v-for="{ value, label } in options"
        :key="value"
        :value="value"
        :selected="value === selected"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>
