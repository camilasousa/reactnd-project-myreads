export const debounce = (callback, wait, context) => {
  let timeout = null;
  const later = () => callback.apply(context);

  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
