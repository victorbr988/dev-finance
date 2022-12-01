import { getUsernameInLocalStorage } from "../utils/storageManager";

export function Profile() {
  const userName: string | null = getUsernameInLocalStorage()

  return (
    <header className="w-full">
      <div className="flex gap-2 items-center">
        <div
          className="rounded-full w-10 h-10 text-center p-2 bg-[#008000]"
        >
          <span className="text-white text-lg font-medium">
          {userName![0].toUpperCase()}
        </span>
        </div>
        <h2>{userName}</h2>
      </div>
    </header>
  )
}