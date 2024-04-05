import nlwicon from '../assets/nlw-icon.svg'
import { NavLink } from './nav-link'

export function Header() {
  return (
    <div className='flex items-center gap-5 p-2'>
      <img src={nlwicon} className='h-10 w-10' />

      <nav className='flex items-center gap-5'>
        <NavLink href="/eventos" >Eventos</NavLink>
        <NavLink href="/participantes">Participantes</NavLink>
      </nav>
    </div>
  )
}