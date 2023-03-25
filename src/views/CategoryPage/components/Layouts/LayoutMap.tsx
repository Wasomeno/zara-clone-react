import { HTMLAttributes, ReactElement } from "react";
import { LayoutOne } from "./1";
import { LayoutTwo } from "./2";
import { LayoutThree } from "./3";
import { LayoutFour } from "./4";

interface LayoutDetails {
  className?: string | undefined;
  component: Function;
}

export const LayoutMap = new Map<string, LayoutDetails>();

LayoutMap.set("1", {
  className: "h-96 w-full my-6 flex justify-center",
  component: (componentDetails: any): ReactElement => (
    <LayoutOne componentDetails={componentDetails} />
  ),
});
LayoutMap.set("2", {
  className: "flex justify-evenly items-center w-full my-6",
  component: (componentDetails: any): ReactElement => (
    <LayoutTwo componentDetails={componentDetails} />
  ),
});
LayoutMap.set("3", {
  className: "flex justify-around items-center w-full my-6",
  component: (componentDetails: any): ReactElement => (
    <LayoutThree componentDetails={componentDetails} />
  ),
});
LayoutMap.set("4", {
  className: "grid grid-cols-4 gap-4 justify-items-center my-6",
  component: (componentDetails: any): ReactElement => (
    <LayoutFour componentDetails={componentDetails} />
  ),
});
