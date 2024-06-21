import { PAGE_TIMELINE, HOURS_IN_DAY, MIDNIGHT_HOUR } from "./constants";
import { isPageValid } from "./validators";

export function normalizePageHash() {
  const page = window.location.hash.slice(1);

  if (isPageValid(page)) {
    return page;
  }

  window.location.hash = PAGE_TIMELINE;

  return PAGE_TIMELINE;
}

export function generateTimelineItems() {
  const timelineItems = [];

  for (let hour = MIDNIGHT_HOUR; hour < HOURS_IN_DAY; hour++) {
    timelineItems.push({ hour });
  }

  return timelineItems;
}

export function generateActivitySelectOptions(activities) {
  return activities.map((activity) => ({
    label: activity.name,
    value: activity.id,
  }));
}

export function generateActivities() {
  return [
    {
      id: id(),
      name: "Coding",
      secondsToComplete: 3600,
    },
    {
      id: id(),
      name: "Trainig",
      secondsToComplete: 3600,
    },
    {
      id: id(),
      name: "Reading",
      secondsToComplete: 1800,
    },
  ];
}

export function generateActivity(name) {
  return {
    id: id(),
    name: name,
    secondsToComplete: 0,
  };
}

function id() {
  return +(Date.now().toString(10) + Math.random().toString(10).substring(2));
}
