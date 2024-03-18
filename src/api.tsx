/** @format */

export const getSummaryStats = () => {
	return Promise.resolve({
		countPromo: 432,
		countCategory: 8,
		countCompany: 28,
		countActiveCompany: 570,
	});
};

export const getCompanyPromo = () => {
	return Promise.resolve({
		discountCount: 20,
		discountSrcImg: 'https://www.coral-print.ru/assets/images/printer-composition.jpg',
		discountTitle: 'Discount on this product',
		discountAbout: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit.',
	});
};

export const getSummarySales = () => {
	const sales = [];
	for (let i = 0; i < 6; i++) {
		sales.push({
			saleId: i + 1,
			logo: 'https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/0d70200090b21d6e0d3fde7eb894b303.png',
			companyName: 'Costco Wholesale',
			sold: Math.floor(Math.random() * 1000),
			income: Math.floor(Math.random() * 1000),
		});
	}

	return Promise.resolve(sales);
};

export const getSummaryPromotions = () => {
	const promotions = [];
	for (let i = 0; i < 7; i++) {
		promotions.push({
			promotionId: i + 1,
			logo: 'https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/0d70200090b21d6e0d3fde7eb894b303.png',
			companyName: 'Costco Wholesale',
			promotionName: 'Norem ipsum dolor',
			countItems: Math.floor(Math.random() * 100),
		});
	}

	return Promise.resolve(promotions);
};

export const getSummaryCategories = () => {
	const categories = [];
	for (let i = 0; i < 8; i++) {
		categories.push({
			categoryId: i + 1,
			groupItems: 'Products',
			countItems: Math.floor(Math.random() * 1001),
		});
	}

	return Promise.resolve(categories);
};

export const getSummaryCountries = () => {
	return Promise.resolve([
		{
			countryId: 1,
			countryTitle: 'Canada',
			count: 4,
		},
		{
			countryId: 2,
			countryTitle: 'USA',
			count: 4,
		},
		{
			countryId: 3,
			countryTitle: 'Italia',
			count: 2,
		},
		{
			countryId: 4,
			countryTitle: 'Ukraine',
			count: 2,
		},
		{
			countryId: 5,
			countryTitle: 'Spain',
			count: 2,
		},
	]);
};

export const getSummaryCompanies = () => {
	const companies = [];
	for (let i = 0; i < 11; i++) {
		const company = {
			companyId: i + 1,
			logo: 'https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/0d70200090b21d6e0d3fde7eb894b303.png',
			name: 'Costco Wholesale',
			category: 'product',
			status: getRandomStatus(),
			statusPromo: getRandomStatus(),
			country: 'USA',
			data: '24.10.2012',
			description:
				'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
		};

		companies.push(company);
	}

	return Promise.resolve(companies);
};

function getRandomStatus() {
	const statuses = ['active', 'not_active', 'suspended', 'pending'] as const;
	const randomIndex = Math.floor(Math.random() * statuses.length);
	return statuses[randomIndex];
}

export function getRandomColor() {
	const colors = ['#fb923c', '#60a5fa', '#fb7185', '#34d399', '#c084fc', '#1d4ed8'];
	const randomIndex = Math.floor(Math.random() * colors.length);
	return colors[randomIndex];
}
