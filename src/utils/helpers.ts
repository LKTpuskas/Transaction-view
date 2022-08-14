import { TransactionProps } from "../types/HomeAccount";

export const API_URL = "http://www.mocky.io/v2/5c62e7c33000004a00019b05";

export function filterResult(transactions: TransactionProps[]) {
  return transactions
    .sort((a, b) => a.amount.value - b.amount.value)
    .filter((_, index) => index <= 9)
}

export async function fetchApi(url = API_URL) {
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`Request failed with the status code ${res.status}`)
  }
  const jsonRes = await res.json()
  return jsonRes
}
