interface CategoryData {
    category: string;
    total_amount: number;
    money_in: number | null;
    money_out: number | null;
    currency: string;
}

export interface CategoryParsedDataInterface {
    categories: CategoryData[];
}
