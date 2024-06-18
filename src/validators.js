import { NAV_ITEMS, HOURS_IN_DAY, MIDNIGHT_HOUR } from "./constants";

export function isOptionsValid(options) {
  return options.every(isOptionValid);
}

function isOptionValid({ value, label }) {
  return typeof value === "number" && typeof label === "string";
}

export function isPageValid(page) {
  return Object.keys(NAV_ITEMS).includes(page);
}

export function isTimelineItemValid({ hour }) {
  return (
    typeof hour === "number" && hour >= MIDNIGHT_HOUR && hour < HOURS_IN_DAY
  );
}
