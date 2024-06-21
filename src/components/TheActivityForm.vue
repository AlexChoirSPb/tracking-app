<script setup>
import { ref, nextTick } from "vue";

import BaseButton from "./BaseButton.vue";
import { PlusIcon } from "@heroicons/vue/24/outline";
import { BUTTON_TYPE_PRIMARY } from "../constants";

const newActivity = ref("");
const emit = defineEmits({
  createActivity: true,
});

function submit() {
  emit("createActivity", newActivity.value.trim());

  newActivity.value = ""; 

  nextTick(()=> {
	window.scrollTo(0, document.body.scrollHeight)
  })

}
</script>

<template>
  <form
    @submit.prevent="submit"
    class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4"
  >
    <input
      class="w-full rounded border px-4 text-xl"
      type="text"
      placeholder="Activity name"
      v-model="newActivity"
    />
    <BaseButton
      :disabled="newActivity.trim() === ''"
      :type="BUTTON_TYPE_PRIMARY"
    >
      <PlusIcon class="h-8" />
    </BaseButton>
  </form>
</template>
