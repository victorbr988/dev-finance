import { useState } from "react"
import { insertNameInStorage } from "../../utils/storageManager";
import { Button } from "../Button";

export function IncludeNameInApp() {
  const [nameUser, setNameUser] = useState<string>('');

  function getNameUser({ target }: any) {
    setNameUser(target.value);
  }

  return (
    <>
      <span className="text-center text-lg font-semibold">Adicionar nome de usuário</span>
      <input
        value={nameUser}
        onChange={getNameUser}
        className="border-gray-900 border-2 rounded p-1"
        placeholder="Digite seu nome"
        type="text"
      />

      <Button.Root
        action={insertNameInStorage}
        paramAction={nameUser}
        paramRoute='/dashboard'
      >
        Salvar nome de usuário
      </Button.Root>
    </>
  )
}
