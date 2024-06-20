<script setup>
import { ref } from "vue";
import BaseSelect from "./BaseSelect.vue";
import TimelineHour from "./TimelineHour.vue";

import { isTimelineItemValid } from "../validators";

const props = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid,
  },
});

const options = [
  { value: 1, label: "Coding" },
  { value: 2, label: "Reading" },
  { value: 3, label: "Training" },
];
const selectedActivityId = ref(2);
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10">
    <TimelineHour :hour ="timelineItem.hour"/>
    <BaseSelect
      :options="options"
      placeholder="Rest"
      :selected="selectedActivityId"
      @select="selectedActivityId = $event"
    />
  </li>
</template>
