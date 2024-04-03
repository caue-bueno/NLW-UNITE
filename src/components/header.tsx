import nlwicon from '../assets/nlw-icon.svg'

export function Header() {
  return (
    <div className='flex items-center gap-5 p-2'>
      <img src={nlwicon} className='h-10 w-10'/>

      <nav className='flex items-center gap-5'>
        <a href="" className='font-medium text-sm text-zinc-300'>Eventos</a>
        <a href="" className='font-medium text-sm'>Participantes</a>
      </nav>
    </div>
  )
}