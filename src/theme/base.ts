import { Theme } from "@material-ui/core";
import black from "./black";
import normal from "./normal";

export function themeCreator(theme: string): Theme {
  return themeMap[theme];
}

const themeMap: { [key: string]: Theme } = {
  black,
  normal
};
