/** @format */

export const count = <T extends string, I extends Record<T, string>>(comp: I[], categoryId: T) => {
	return comp.reduce(
		(r, i) => {
			if (!r[i[categoryId]]) r[i[categoryId]] = 0;
			r[i[categoryId]] += 1;
			return r;
		},
		{} as Record<string, number>
	);
};

export function getRandomColor() {
	const colors = ['#fb923c', '#60a5fa', '#fb7185', '#34d399', '#c084fc', '#1d4ed8'];
	const randomIndex = Math.floor(Math.random() * colors.length);
	return colors[randomIndex];
}
