import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';
function Header(){

    const [toogleMenu,setToogleMenu] = useState(false);

    return(
        <div className="Header">

            <header className="flex justify-between px-5 py-2 bg-primary">
                <a className="font-bold" href="#">Ragul</a>
                <nav className="hidden md:block">
                <ul className="flex text-white ">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                </nav>

                {toogleMenu && <nav className="block md:hidden">
                <ul className="flex flex-col text-white mobile-nav ">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                </nav>}
                <button onClick={ () => setToogleMenu(!toogleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5' /></button>
            </header>

        </div>
    )
};
export default Header;