import { get, to } from "color-string";
import { convertHexToLabObject } from "./convert-hex-to-lab-object";
import { findColorInList } from "./find-color-in-list";
import { Color } from "./get-color-list";

export function parseColor(string: string): Color | undefined {
	let color = get(string);

	// if color cannot be parsed, prepend with hash
	if (!color) {
		color = get(`#${string}`);
	}

	// if the color is not parsed, look it up by name from the list
	if (!color) {
		return findColorInList(string);
	}

	// convert color to hex
	const hex = to.hex(color.value);

	// covert to color object
	return {
		name: "",
		hex,
		lab: convertHexToLabObject(hex),
	};
}
