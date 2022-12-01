import { ReactNode, useState } from "react"

interface ModalProps {
  children: ReactNode;
}

// caixa padrão de modal
export function ModalRoot({ children }: ModalProps) {
  return (
    <div className="w-full h-screen absolute top-0 bg-black/40 flex justify-center items-center">
      <div className="p-10 gap-4 w-96 bg-white rounded flex flex-col">
        { children }
      </div>
    </div>
  )
}
