export interface TransactionType {
  type: string
  amount: number
  date: string
  status: string
}

export interface TransactionResponse {
  data: TransactionType[]
}
