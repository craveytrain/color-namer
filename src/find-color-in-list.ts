import { Color, colorList } from "./get-color-list";
export function findColorInList(name: string): Color | undefined {
	return colorList.find((color) => color.name.toLowerCase() === name.toLowerCase());
}
