export interface TransactionForRequest {
  payment_method: string;
  account_number: string;
  transaction_id: string;
  amount: number;
  reference?: string | null;
  refund_reason?: string | null;
}

export interface TransactionInput {
  payment_method: string;
  account_number: string;
  transaction_id: string;
  amount: string;
  reference?: string | null;
  refund_reason?: string | null;
}
