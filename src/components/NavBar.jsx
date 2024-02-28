import React, { useContext } from 'react';
import darkIcon from '../assets/dark.svg';
import lightIcon from '../assets/light.svg'
import useTheme from '../hooks/useTheme';

export default function NavBar() {

    let { theme, changeTheme, isDark } = useTheme();

  return (
        
         <div className=' bg-main '>

             <div className=" max-w-6xl mx-auto flex justify-between items-center px-12 py-8">

                 <h1 className=' text-white font-normal text-3xl'> အိမ်မက်အဘိဓာန် <span className=' text-black text-xl font-normal '> Dream Dictionary </span> </h1>

                 <div className="  flex items-center cursor-pointer">

                     { !isDark && <img src={ darkIcon } onClick={ () => changeTheme( 'dark' ) } className='w-9 border-2 border-black p-1 rounded-md' /> }
                     { isDark && <img src={ lightIcon } onClick={ () => changeTheme( 'light' ) } className='w-9 border-2 border-white p-1 rounded-md' /> }

                 </div>

             </div>

         </div>
  )
}
