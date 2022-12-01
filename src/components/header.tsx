interface HeaderProps {
  name: string
}

export function Header({ name }: HeaderProps) {
  return (
    <header>
      <div className="bg-[#008000] rounded-full p-2">
        <span>{name[0]}</span>
      </div>
      <h2>{ name }</h2>
    </header>
  )
}