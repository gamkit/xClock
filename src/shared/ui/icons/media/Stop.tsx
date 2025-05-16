import { createSvg } from "../createSvg";

const Stop = () => {
  return (
    <>
      <g>
        <path d="M6 6H18V18H6V6Z" fill="currentColor" />
      </g>
    </>
  );
};

export default createSvg(Stop, "stop");
