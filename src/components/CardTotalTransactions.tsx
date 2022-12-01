import clsx from "clsx"
import { convertValueToCurrency } from "../utils/convertValueToCurrency";
import { getTransactionsInLocalStorage, TransactionProps } from "../utils/storageManager"

interface CardTransactionProps {
  type: 'Entradas' | 'Saída' | 'Investido';
  Icon: any
}

export function BoxTotalValuesTransactions({ type, Icon }: CardTransactionProps) {
  const transactions: TransactionProps[] = getTransactionsInLocalStorage() || []

  function returnTotalTransactions(list: TransactionProps[]) {
    if (list.length !== 0) {
      const transactionsByType = list.filter((transaction) => transaction.transactionType === type)
      const totalValueTransactions: number = transactionsByType.reduce((acc, curr) => acc + curr.value, 0)
      return convertValueToCurrency(totalValueTransactions);
    }
    return convertValueToCurrency(0)
  }

  return (
    <div className={clsx('bg-white shadow-xl w-60 rounded-md flex flex-col mt-20 p-5', {
      'text-[#008000]': type === 'Entradas',
      'text-[#FF0000]': type === 'Saída',
      'text-gray-900': type === 'Investido',
    })}>
      <h2 className="p-2 flex gap-2 items-center">
        <Icon />
        {type}
      </h2>

      <p className="flex gap-2 justify-center items-center text-lg">
        { returnTotalTransactions(transactions) }
      </p>
    </div>
  )
}