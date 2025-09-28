interface Transaction {
  id: number;
  created_at: string;
  wallet: string;
  type: 'send-token' | 'nft-create' | 'transaction' | 'account-create';
  tx_id: string;
}

type TransactionType = Transaction['type'];