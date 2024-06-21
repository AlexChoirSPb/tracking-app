<script setup>
import ActivityItem from "../components/ActivityItem.vue";
import TheActivityForm from "../components/TheActivityForm.vue";
import TheActivityEmptyState from "../components/TheActivityEmptyState.vue";
import { validateActivities } from "../validators";

const props = defineProps({
  activities: {
    required: true,
    type: Array,
    validator: validateActivities,
  },
});
const emit = defineEmits({
  deleteActivity: true,
  createActivity: true,
});

</script>
<template>
  <div class="flex flex-col grow">
    <ul v-if="activities.length > 0" class="divide-y grow">
      <ActivityItem
        v-for="activity in activities"
        :key="activity.id"
        :activity="activity"
        @delete="emit('deleteActivity', activity)"
      />
    </ul>
	<TheActivityEmptyState v-else />
	<TheActivityForm @create-activity="emit('createActivity', $event)"/>
  </div>
</template>
