import { createSvg } from "../createSvg";

const Play = () => {
  return (
    <>
      <g>
        <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
      </g>
    </>
  );
};

export default createSvg(Play, "play");
