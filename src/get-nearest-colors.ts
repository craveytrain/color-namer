import { getDeltaE00 } from "delta-e";
import { colorList, Color } from "./get-color-list";
import { parseColor } from "./parse-color";

export interface DistancedColor extends Color {
	distance: number;
}

export function getNearestColors(string: string): DistancedColor[] {
	// attempt to parse the color
	const color = parseColor(string);

	// if color cannot be determined, throw error
	if (!color) {
		return [];
	}

	const distancedColorList = colorList.map(
		(c) => ({ ...c, distance: getDeltaE00(color.lab, c.lab) } as DistancedColor)
	);

	// sort colors based on nearest color
	return distancedColorList.sort((a, b) => a.distance - b.distance);
}
