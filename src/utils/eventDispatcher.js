// moved these here because they are used in multiple components
export const handleMouseEnterLink = () => {
  window.dispatchEvent(new CustomEvent("cursor-enter-link"));
};
export const handleMouseLeaveLink = () => {
  window.dispatchEvent(new CustomEvent("cursor-leave-link"));
};
