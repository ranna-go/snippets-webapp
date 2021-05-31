import { writable } from 'svelte/store';

export type SnackbarType = 'info' | 'error' | 'success';

export interface SnackbarPayload {
  show: boolean;
  message: string;
  type: SnackbarType;
}

export const snackbarStore = writable<SnackbarPayload>({
  show: false,
} as SnackbarPayload);

let timer: number;

export function showSnackbar(
  message: string,
  type: SnackbarType,
  duration: number = 5000
) {
  snackbarStore.set({ show: true, message, type });
  if (timer) clearTimeout(timer);
  timer = setTimeout(
    () => snackbarStore.set({ show: false, message, type }),
    duration
  );
}
