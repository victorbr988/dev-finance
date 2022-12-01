import { Button } from "./Button";
import {FiFilter, FiPlusCircle} from 'react-icons/fi'
import { getTransactionsInLocalStorage, TransactionProps } from "../utils/storageManager";
import { CardTransaction } from "./CardTransaction";
import { useState } from "react";

interface BoxActivityProps {
  isOpenModal: boolean;
  setIsOpenModal(value: boolean): void;
  transactions: TransactionProps[];
  setTransactions(transactions: TransactionProps[]): void
}

export function BoxActivity({isOpenModal, setIsOpenModal, transactions, setTransactions }: BoxActivityProps) {
  const transactionsList = getTransactionsInLocalStorage();
  // let transactionsFiltered: TransactionProps[] | never[] = []
  const [transactionsFildered, setTransactionsFiltered] = useState<TransactionProps[] | never[]>([])

  function filterByAppetizer(data: TransactionProps[]) {
    const filterByAppet = data.filter((transactionObj: TransactionProps) => transactionObj.transactionType === "Entradas")
    setTransactionsFiltered(filterByAppet)
  }

  function filterByExpense(data: TransactionProps[]) {
    const filterByExpen = data.filter((transactionObj: TransactionProps) => transactionObj.transactionType === "Saída")
    setTransactionsFiltered(filterByExpen)
  }

  function filterByInvested(data: TransactionProps[]) {
    const filterByInvest = data.filter((transactionObj: TransactionProps) => transactionObj.transactionType === "Investido")
    setTransactionsFiltered(filterByInvest)
  }

  function renderTransactions(data: TransactionProps[] | never[]) {
    return data.map((transaction) => <CardTransaction
      key={transaction.id}
      setTransactions={setTransactions}
      transaction={transaction} 
    />)
  }

  return (
    <div className="bg-white shadow-lg h-96 flex flex-col gap-2 overflow-auto">
      <header className="flex justify-between items-center px-4 py-6">
        <h2>Histórico de transações</h2>
        <div className="flex gap-3">
          <Button.Root
            action={() => {}}
            paramAction={''}
            closeModal={setIsOpenModal}
            isOpenModal={isOpenModal}
          >
            <Button.WithIcon Icon={FiPlusCircle} name={"Adicionar"} />
          </Button.Root>

          <Button.Root
            action={filterByExpense}
            paramAction={transactionsList}
          >
            <Button.WithIcon Icon={FiFilter} name={"Saídas"} />
          </Button.Root>

          <Button.Root
            action={filterByAppetizer}
            paramAction={transactionsList}
          >
            <Button.WithIcon Icon={FiFilter} name={"Entradas"} />
          </Button.Root>

          <Button.Root
            action={filterByInvested}
            paramAction={transactionsList}
          >
            <Button.WithIcon Icon={FiFilter} name={"Investido"} />
          </Button.Root>
          <Button.Root
            action={filterByInvested}
            paramAction={[]}
          >
            <Button.WithIcon Icon={FiFilter} name={"All"} />
          </Button.Root>
        </div>
      </header>
      {
        transactionsFildered.length === 0 ? renderTransactions(transactions) : renderTransactions(transactionsFildered)
      }
    </div>
  )
}
