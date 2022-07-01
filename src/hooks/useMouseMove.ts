import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  window.addEventListener('mousemove', callback);

  return () => {
    window.removeEventListener('mousemove', callback);
  };
}

export function useMouseMove() {
    return useSyncExternalStore(subscribe,
      () => {
      console.log("mousemove")
      })
}