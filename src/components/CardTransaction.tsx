import { FiTrash2 } from "react-icons/fi";
import { excludeTransaction, getTransactionsInLocalStorage, TransactionProps } from "../utils/storageManager";
import { convertValueToCurrency } from "../utils/convertValueToCurrency";
import clsx from "clsx";
import { dateFormat } from "../utils/dateFormat";

interface CardTransactionProps {
  transaction: TransactionProps;
  setTransactions(transactions: TransactionProps[]): void
}

export function CardTransaction({ transaction, setTransactions }: CardTransactionProps) {

  function excludeTransactionList() {
    excludeTransaction(transaction.id)
    setTransactions(getTransactionsInLocalStorage());
  }

  return (
    <div className="flex py-3 px-4 items-center bg-white shadow-lg">
      <div 
        className={
          clsx('w-1/2 flex flex-col gap-1', {
          'text-[#008000]': transaction.transactionType === 'Entradas',
          'text-[#FF0000]': transaction.transactionType === 'Saída',
          'text-gray-900': transaction.transactionType === 'Investido',
          })
        }
      >
        <span className="text-sm">{transaction.transactionType}</span>
        <div className="flex gap-4">
          <p>{convertValueToCurrency(transaction.value)}</p>
          <p className="text-gray-900">{dateFormat(transaction.date)}</p>
        </div>
      </div>

      <div className="w-1/2 flex justify-end">
        <div className="bg-white shadow-lg p-2"
          onClick={excludeTransactionList}
        >
          <FiTrash2 
            className="text-[#FF0000] cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}