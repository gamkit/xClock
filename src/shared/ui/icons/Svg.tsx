import { ReactNode } from "react";
import { TBaseSvgProps } from "./types/types";

const Svg = ({
  role = "img",
  size = 24,
  width,
  height,
  ...props
}: TBaseSvgProps): ReactNode => {
  if (!width && !height) {
    width = size;
    height = size;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role={role}
      width={width}
      height={height}
      {...props}
    />
  );
};

export default Svg;
