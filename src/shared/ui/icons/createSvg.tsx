import { ReactNode } from "react";
import Svg from "./Svg";
import { TBaseSvgProps, TSvgSizeProps } from "./types/types";

export type TSvgProps = Omit<TBaseSvgProps, "id" | "viewBox"> & TSvgSizeProps;

export const createSvg = (
  Path: (pathProps: unknown) => ReactNode,
  displayName: string,
  viewBox = "0 0 24 24"
) => {
  const SvgComponent = (props: TSvgProps): ReactNode => {
    return (
      <Svg {...props} id={displayName} viewBox={viewBox}>
        <Path />
      </Svg>
    );
  };

  SvgComponent.displayName = `Svg_${displayName}`;

  return SvgComponent;
};
