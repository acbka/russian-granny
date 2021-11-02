import React from "react";

const useOnClickOutside = (ref: HTMLElement, setOpen: () => void) => {
  const listener = (event: MouseEvent) => {
    if (!ref || ref.contains(event.target as Node)) return;
    setOpen();
  };
  document.addEventListener("mousedown", listener);
  return () => {
    document.removeEventListener("mousedown", listener);
  };
};
export default useOnClickOutside;
