import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}

export function useOnlineStatus() {
  return useSyncExternalStore(subscribe,
    () => {
      console.log("=======================client " + navigator.onLine)
      return navigator.onLine
    },
    () => {
      console.log("server")
      return true
    })
}