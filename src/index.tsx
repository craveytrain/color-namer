import { List, Icon } from "@raycast/api";
import { useEffect, useState } from "react";
import { DistancedColor, getNearestColors } from "./get-nearest-colors";

export default function Command() {
	const [text, setText] = useState<string>();
	const [colors, setColors] = useState<DistancedColor[]>([]);

	useEffect(() => {
		if (!text) return;

		// find closest colors
		setColors(getNearestColors(text).slice(0, 10));
	}, [text]);

	function onSearchTextChange(text: string) {
		setText(text);
	}

	return (
		<List
			onSearchTextChange={onSearchTextChange}
			searchBarPlaceholder="#000000, rbg(0, 0, 0), hsl(0, 0, 0), black..."
			throttle
		>
			{!text && !colors.length ? (
				<List.EmptyView title="Type something to get started" />
			) : (
				colors?.map((color) => (
					<List.Item
						key={color.hex}
						title={color.name}
						subtitle={color.hex}
						icon={{ source: Icon.CircleFilled, tintColor: color.hex }}
					/>
				))
			)}
		</List>
	);
}
