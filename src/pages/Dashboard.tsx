import { BoxTotalValuesTransactions } from "../components/CardTotalTransactions"
import { Profile } from "../components/Profile"
import {FiActivity, FiMinusCircle, FiPlusCircle} from "react-icons/fi"
import { BoxActivity } from "../components/BoxActivity"
import { Box } from "../components/Modals"
import { useEffect, useState } from "react"
import { getTransactionsInLocalStorage, includeTransaction, saveListTransactions, TransactionProps } from "../utils/storageManager"

export function Dashboard() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [transactions, setTransactions] = useState<TransactionProps[]>([])
  const [transaction, setTransaction] = useState<TransactionProps>({} as TransactionProps)

  useEffect(() => {
    setTransactions(getTransactionsInLocalStorage() || [])
  }, [])

  useEffect(() => {
    includeTransaction(transaction)
    setTransactions(getTransactionsInLocalStorage() || [])
  }, [transaction])

  return (
    <>
      {
        isOpenModal && (
          <Box.Modal>
            <Box.IncludeTransaction
              setTransaction={setTransaction}
              setIsOpenModal={setIsOpenModal}
              isOpenModal={isOpenModal}
            />
          </Box.Modal>
        )
      }
      
      <main className="px-40 py-10">
        <Profile />
        <section className="flex gap-3">
          <BoxTotalValuesTransactions
            Icon={FiPlusCircle}
            type="Entradas"
          />

          <BoxTotalValuesTransactions
            Icon={FiMinusCircle}
            type="Saída"
          />

          <BoxTotalValuesTransactions 
            Icon={FiActivity}
            type="Investido"
          />
        </section>
        <section className="mt-24">
          <BoxActivity
            transactions={transactions}
            setTransactions={setTransactions}
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
          />
        </section>
      </main>
    </>
    
  )
}