export function isCurrentTimeWithinSlot(
  timeSlotStart: Date,
  timeSlotEnd: Date,
) {
  const currentTime = new Date();
  return currentTime >= timeSlotStart && currentTime <= timeSlotEnd;
}

export function isCurrentDayWithinSlot(currentSchedule: number) {
  const currentTime = new Date();
  const currentDay = String(currentTime.getDay());
  return currentSchedule == Number(currentDay);
}
