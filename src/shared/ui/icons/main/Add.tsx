import { createSvg } from "../createSvg";

const Add = () => {
  return (
    <>
      <g>
        <path
          d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
          fill="currentColor"
        />
      </g>
    </>
  );
};

export default createSvg(Add, "add");
