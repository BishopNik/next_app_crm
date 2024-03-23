/** @format */

import { cache } from 'react';
import { QueryClient } from '@tanstack/react-query';

export const getQueryClient = cache(() => new QueryClient()) as () => QueryClient;

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
