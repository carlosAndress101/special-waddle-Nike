import {  hamburger } from "../assets"
import { navLinks } from '../constants/index'
import LogoNike from '../assets/icons/LogoNike'

const Nav = () => {
  return (
    <header className="padding-x py-4 absolute z-10 w-full">

      <nav className=" flex justify-between items-center max-container">

        <LogoNike className="h-[80px] w-[90px]"/>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a 
              href={item.href}
              className=" font-montserrat leading-normal text-lg text-slate-gray"
              >{item.label}</a>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block">
          <img src={hamburger} alt="logo hamburger" width={25} height={25}/>
        </div>
      </nav>

    </header>
  )
}

export default Nav
