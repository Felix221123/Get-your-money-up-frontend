interface BankStatement {
    bank_statement_uid: string;
    date: string;
    time: string;
    name: string;
    category: string;
    amount: number;
    currency: string;
    description: string;
    money_out: number;
    money_in: number;
}

export interface StatementDataInterface {
    statements: BankStatement[];
}
