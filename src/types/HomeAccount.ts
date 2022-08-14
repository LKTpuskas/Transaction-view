export interface ProviderProps {
  title: string;
  account_number: string;
  sort_code: string;
  description: string;
}

type CurrencyISO = { currency_iso: string };

export interface Amount extends CurrencyISO {
  value: number;
}

export interface BalanceProps extends CurrencyISO {
  amount: number;
}

export interface TransactionProps {
  id: string;
  date: string;
  description: string;
  category_title: string;
  amount: Amount;
}

export interface HomeAccountProps {
  id: string;
  provider: ProviderProps;
  balance: BalanceProps;
  transactions: TransactionProps[];
}
