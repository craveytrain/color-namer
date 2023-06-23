import colorNameList from "./colors.json";
import { LABColor } from "./convert-hex-to-lab-object";

export interface Color {
	name: string;
	hex: string;
	lab: LABColor;
}
export const colorList: Color[] = colorNameList;
