import getDisplaySize from "./getDisplaySize";

export default function getInitialPosition() {
  const { maxX, maxY } = getDisplaySize();

  return { x: getRandomNumber(maxX, 0), y: getRandomNumber(maxY, 0) };
}

const getRandomNumber = (max: number, min: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};
