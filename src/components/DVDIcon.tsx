import { useEffect, useState } from "react";
import generateColor from "../helpers/generateColor";
import getInitialPosition from "../helpers/getInitialPosition";
import getDisplaySize from "../helpers/getDisplaySize";

type TCoordinate = { x: number; y: number };

const DVDIcon = () => {
  const [position, setPosition] = useState<TCoordinate>(getInitialPosition());

  const [deficit, setDeficit] = useState<TCoordinate>({
    x: 1,
    y: 1,
  });

  const [color, setColor] = useState(generateColor());

  const [hasReachedMax, setHasReachedMax] = useState<{
    x: boolean;
    y: boolean;
  }>({
    x: false,
    y: false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => ({
        x: prev.x + deficit.x,
        y: prev.y + deficit.y,
      }));
    }, 1);

    if (hasReachedMax.x || hasReachedMax.y) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deficit.x, deficit.y]);

  useEffect(() => {
    const { maxX, maxY } = getDisplaySize();
    if (position.x >= maxX) {
      setDeficit((prev) => ({ ...prev, x: -1 }));
      setColor(generateColor());
    }
    if (position.y >= maxY) {
      setDeficit((prev) => ({ ...prev, y: -1 }));
      setColor(generateColor());
    }
    if (position.x <= 0) {
      setDeficit((prev) => ({ ...prev, x: 1 }));
      setColor(generateColor());
    }
    if (position.y <= 0) {
      setDeficit((prev) => ({ ...prev, y: 1 }));
      setColor(generateColor());
    }

    setHasReachedMax({
      x: position.x > maxX || position.x < 0,
      y: position.y > maxY || position.y < 0,
    });
  }, [position.x, position.y]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 55 192.12 82.5"
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        fill: color,
        width: 192.12,
        height: 85.5,
      }}
    >
      <path d="M88.033 129.504c-11.207 0-20.187-1.895-20.187-4.205 0-2.309 8.98-4.201 20.187-4.201 11.123 0 20.109 1.893 20.109 4.201.001 2.31-8.986 4.205-20.109 4.205zm21.342-59.988S96.521 85.009 97.178 85.995c.914-.986-4.615-16.646-4.615-16.646s-1.153-3.296-4.773-14.086H74.686v-.085l-31.803.085H18.901l-2.394 10.132H38.845c11.613 0 18.704 4.697 16.723 13.021-2.139 9.064-12.275 12.936-23.072 12.936h-4.038l5.192-22.166H15.602l-7.663 32.379h25.628c19.281 0 37.572-10.132 40.872-23.149.577-2.391.496-8.407-.987-11.95 0-.084-.084-.247-.167-.492-.081-.084-.166-.661.167-.746.162-.081.492.248.492.333 0 0 .166.414.329.743l16.313 46.059 41.537-46.886 17.549-.082h4.285c11.621 0 18.789 4.697 16.809 13.021-2.145 9.064-12.355 12.936-23.152 12.936h-4.123l5.275-22.166h-18.047l-7.664 32.379h25.631c19.279 0 37.734-10.132 40.785-23.149 3.131-13.021-10.383-23.153-29.83-23.153H121.408c-10.133 11.943-12.033 14.253-12.033 14.253zM2.835 125.055c0 6.918 39.552 12.523 88.328 12.523 48.864 0 88.423-5.605 88.423-12.523 0-6.924-39.559-12.525-88.423-12.525-48.776-.001-88.328 5.601-88.328 12.525zm169.989 9.966v-.33h-1.977l-.082.33h.824l-.332 2.557h.414l.328-2.557h.825zm2.965 2.557v-2.887h-.33l-1.07 1.98-.488-1.98h-.33l-.912 2.887h.336l.736-2.225.498 2.225 1.154-2.225h.076v2.225h.33z" />
    </svg>
  );
};

export default DVDIcon;
