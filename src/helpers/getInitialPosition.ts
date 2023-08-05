export default function getInitialPosition() {
  const el = document.getElementById("root");
  const maxY = (el?.offsetHeight || 0) - 80;
  const maxX = (el?.offsetWidth || 0) - 187;

  return { x: getRandomNumber(maxX, 0), y: getRandomNumber(maxY, 0) };
}

const getRandomNumber = (max: number, min: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};
