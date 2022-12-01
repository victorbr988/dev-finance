import { ReactNode } from "react"
import { useNavigate } from "react-router-dom";
import { TransactionProps } from '../utils/storageManager'

interface ButtonProps {
  children: ReactNode;
  action(value: string | TransactionProps | TransactionProps[]): void;
  paramAction: string | TransactionProps | TransactionProps[]
  paramRoute?: string;
  closeModal?(value: boolean): void
  isOpenModal?: boolean
}

interface ButtonWithIconProps {
  Icon: any;
  name: string
}

interface ButtonSecondaryProps {
  closeModal?(value: boolean): void
  isOpenModal?: boolean
}

// botão padrão que executa a função de adicionar uma nova transação
export function ButtonRoot({ children, action, paramAction, paramRoute, closeModal, isOpenModal }: ButtonProps) {

  const navigate = useNavigate()

  function replaceRouter() {
    if (paramRoute) {
      navigate(paramRoute)
    }
  }

  function onCloseModal() {
    if (isOpenModal !== undefined) {
      closeModal!(!isOpenModal)
    }
  }

  return (
    <button
      onClick={ () => {
        action(paramAction);
        replaceRouter();
        onCloseModal()
      }}
      className="bg-gray-900 px-3 py-1 text-white rounded flex gap-2 items-center justify-center"
    >
      {children}
    </button>
  )
}

export function WithIcon({ Icon, name }: ButtonWithIconProps) {
  return (
    <>
      <Icon />
      <span>{ name }</span>
    </>
  )
}

export function ButtonSecondary({ closeModal, isOpenModal }: ButtonSecondaryProps) {
  return (
    <button
      className="bg-gray-100 p-1 px-3 py-1 font-medium text-gray-900 cursor-pointer text-sm"
      onClick={() => closeModal!(!isOpenModal)}
    >
      Cancelar
    </button>
  )
}

export const Button = {
  Root: ButtonRoot,
  WithIcon
};
