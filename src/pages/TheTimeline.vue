<script setup>
import TimelineItem from "../components/TimelineItem.vue";
import { isTimelineItemValid } from "../validators";

const props = defineProps({
  timelineItems: {
    required: true,
    type: Array,
    validator(timelineItems) {
      return timelineItems.every(isTimelineItemValid);
    },
  },
  activitySelectOptions: {
    required: true,
    type: Array,
  },
});
</script>

<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        :activity-select-options="activitySelectOptions"
      />
    </ul>
  </div>
</template>
