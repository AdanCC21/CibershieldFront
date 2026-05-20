interface Prompts{
    children: React.ReactNode
}
export default function Card({ children }: Prompts) {
  return (
    <div className="flex flex-col p-4 gap-4 bg-white rounded-lg card-shadow w-full h-full">
      {children}
    </div>
  )
}
