import convert from "color-convert";

export interface LABColor {
	L: number;
	A: number;
	B: number;
}

export function convertHexToLabObject(color: string): LABColor {
	const labArray = convert.hex.lab.raw(color);
	return {
		L: labArray[0],
		A: labArray[1],
		B: labArray[2],
	};
}
