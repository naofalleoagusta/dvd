export default function getDisplaySize() {
  const docEl = document.documentElement;

  return {
    maxY: (docEl.clientHeight || 0) - 80,
    maxX: (docEl?.clientWidth || 0) - 187,
  };
}
