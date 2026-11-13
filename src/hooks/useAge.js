import { useSyncExternalStore } from "react";

function calcAge() {
  const birthDate = new Date(1995, 7, 30);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}

const age = calcAge();

export function useAge() {
  return useSyncExternalStore(
    () => () => {},
    () => age,
    () => age,
  );
}

export function useCurrentYear() {
  const year = new Date().getFullYear();
  return useSyncExternalStore(
    () => () => {},
    () => year,
    () => year,
  );
}
