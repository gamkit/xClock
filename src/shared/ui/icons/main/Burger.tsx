import { createSvg } from "../createSvg";

const Burger = () => {
  return (
    <>
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 16V12H42V16H6ZM6 26H42V22H6V26ZM6 36H42V32H6V36Z"
          fill="currentColor"
        />
      </g>
    </>
  );
};

export default createSvg(Burger, "burger", '0 0 48 48');
