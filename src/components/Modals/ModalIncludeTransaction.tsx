import { useState } from "react";
import { TransactionProps } from "../../utils/storageManager";
import { Button, ButtonSecondary } from "../Button";

interface includeTransactionProps {
  isOpenModal: boolean,
  setIsOpenModal(value: boolean): void,
  setTransaction(transaction: TransactionProps): void
}

// Função para receber os dados do usuário referente a uma entrada de dinheiro
export function IncludeTransaction({ isOpenModal, setIsOpenModal, setTransaction }: includeTransactionProps) {
  const [valueAppetizer, setValueAppetizer] = useState<string>('')
  const [dateTransaction, setDateTransaction] = useState<string>('')
  const [typeTransaction, setTypeTransaction] = useState<'Entradas' | 'Saída' | 'Investido'>('Entradas')

  function getValueAppetizer({ target }: any) {
    setValueAppetizer(target.value)
  }

  function getDateTransaction({ target }: any) {
    setDateTransaction(target.value)
  }

  function getTypeTransaction({ target }: any) {
    setTypeTransaction(target.value)
  }

  //formato do objeto para uma transação de Entrada
  const transactionObj: TransactionProps = {
    transactionType: typeTransaction,
    value: +valueAppetizer,
    date: dateTransaction
  };

  return (
    <>
      <span className="text-center text-lg font-semibold">
        Adicionar uma entrada
      </span>
      
      <input
        value={ valueAppetizer }
        onChange={ getValueAppetizer }
        className="border-gray-900 border-2 rounded p-1"
        type="text"
        placeholder="Digite um valor"
      />
      <input
        value={ dateTransaction }
        onChange={ getDateTransaction }
        className="border-gray-900 border-2 rounded p-1"
        type="datetime-local"
      />

      <fieldset id="type-transaction" className="flex gap-3">
        <div className="flex gap-1">
          <input type='radio' onChange={getTypeTransaction} id="Entradas" value="Entradas" name="type-transaction" />
          <label htmlFor="Entradas">Entradas</label>
        </div>
        
        <div className="flex gap-1">
          <input type='radio' onChange={getTypeTransaction} id="Saída" value="Saída" name="type-transaction" />
          <label htmlFor="Saída">Saída</label>
        </div>
        
        <div className="flex gap-1">
          <input type='radio' onChange={getTypeTransaction} id="investido" value="Investido" name="type-transaction" />
          <label htmlFor="Investido">Investido</label>
        </div>
      </fieldset>

      <div className="flex gap-2 justify-between">
        <Button.Root
          action={setTransaction}
          paramAction={transactionObj}
          closeModal={setIsOpenModal}
          isOpenModal={isOpenModal}
        >
          Adicionar transação
        </Button.Root>
          
        <ButtonSecondary 
          closeModal={setIsOpenModal}
          isOpenModal={isOpenModal}
        />
      </div>
      
    </>
  )
}
