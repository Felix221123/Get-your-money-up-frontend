
interface CategoryData {
    category: string;
    total_amount: number;
    money_in: number | null;
    money_out: number | null;
    currency: string;
}

interface SavingsData {
    average_disposable_income: number;
    forecasted_savings_list: [number, number][];
}

export interface CategoryParsedDataInterface {
    categories: CategoryData[];
    savingsData?: SavingsData[];
}
