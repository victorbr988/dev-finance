import { v4 } from 'uuid';

export interface TransactionProps {
  id?: string
  transactionType: 'Entradas' | 'Saída' | 'Investido';
  value: number;
  date: string;
};

// lista com todas as transações
let transactions: TransactionProps[] = [];

// função que envia o nome de usuário para o localStorage
export function insertNameInStorage(name: string) {
  localStorage.setItem("User", name)
}

export function getTransactionsInLocalStorage() {
  return JSON.parse(localStorage.getItem("transactions") as string)
}

// função que busca o nome do usuário dentro do localStorage
export function getUsernameInLocalStorage() {
  return localStorage.getItem("User")
}

// função que atualiza o localStorage
export function saveListTransactions() {
  localStorage.setItem("transactions", JSON.stringify(transactions))
};

// funcão que inclui cada transação dentro da lista de transações
export function includeTransaction(transaction: TransactionProps) {
  if(transaction.transactionType) {
    transactions.push({ id: v4(), ...transaction });
    saveListTransactions();
  }
};

// função que remove item do localStorage
export function excludeTransaction(id: string | undefined) {
  if (id) {
    const listTransactions = getTransactionsInLocalStorage();
    const transactionsFiltered = listTransactions.filter((trasactionObj: TransactionProps) => trasactionObj.id !== id)

    transactions = transactionsFiltered;
    saveListTransactions()
  }
}
