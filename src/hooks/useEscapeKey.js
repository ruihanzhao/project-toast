import { useEffect } from "react";

export function useEscapeKey(callback) {
  useEffect(() => {
    const onEscapeKeyDown = (event) => {
      if (event.code === "Escape") {
        callback([]);
      }
    };

    window.addEventListener("keydown", onEscapeKeyDown);

    return () => {
      window.removeEventListener("keydown", onEscapeKeyDown);
    };
  }, [callback]);
}
