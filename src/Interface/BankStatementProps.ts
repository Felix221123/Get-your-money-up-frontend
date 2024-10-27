interface BankStatement {
    bank_statement_uid: string;
    date: string;
    time: string;
    name: string;
    category: string;
    amount: string;
    currency: string;
    description: string;
    money_out: string;
    money_in: string;
}

export interface StatementDataInterface {
    statements: BankStatement[];
}
