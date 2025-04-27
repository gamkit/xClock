import { createSvg } from "../createSvg";

const Burger = () => {
  return (
    <>
      <g>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 4V0H36V4H0ZM0 14H36V10H0V14ZM0 24H36V20H0V24Z"
        />
      </g>
    </>
  );
};

export default createSvg(Burger, "burger", "0 0 36 24");
