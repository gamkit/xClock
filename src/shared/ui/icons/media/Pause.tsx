import { createSvg } from "../createSvg";

const Pause = () => {
  return (
    <>
      <g>
        <path d="M10 5V19H6V5H10ZM18 5V19H14V5H18Z" fill="currentColor" />
      </g>
    </>
  );
};

export default createSvg(Pause, "pause");
