import { PropsWithChildren } from "react";
import { ColumnProps } from "./definers/column";

export default function Column(props: PropsWithChildren<ColumnProps>) {
  let definerStyle = {
    gap: 0 + "px",
  };
  if (props.spacerPx !== undefined) {
    definerStyle.gap = props.spacerPx + "px";
  }
  return (
    <div className="flex flex-col" style={definerStyle}>
      {props.children}
    </div>
  );
}
