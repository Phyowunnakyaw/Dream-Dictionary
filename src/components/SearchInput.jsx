import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useTheme from '../hooks/useTheme';

export default function Search() {

  let [ search, setSearch ] = useState('');
  let navigate = useNavigate();
  let handleSearch = ( e ) => {
     e.preventDefault();
     if( search ) {
      navigate( `/${search}` );
     }
  };

  let { isDark } = useTheme();

  return (
         
         <div className=' p-4 flex flex-col justify-center items-center space-y-4 '>

             <h1 className={ `text-center font-semibold leading-7 ${ isDark ? ( 'text-white' ) : ( 'text-black' ) } ` }>  
                
                မြင်မက်ခဲ့သောအိပ်မက်ထဲမှ အဓိကဇာတ်ကောင်များ ( သို့ ) အရာဝတ္ထုများကို မြန်မာစာလုံးပေါင်းဖြင့် အောက်ပါအကွက်လေးထဲထည့်ပါ။ 
                
             </h1>

             <form onSubmit={ handleSearch } className=' w-1/2' >   

                  <div className=" relative">
        
                      <input type="search" value={ search } onChange={ (e) => setSearch( e.target.value ) } className={ `w-full p-3 ps-3 text-sm border-2 border-main rounded-md outline-none ${ isDark ? ( ' text-white bg-gray-950 ' ) : ( 'text-black bg-gray-50' ) } ` } />
                      <button type="submit" className="text-white absolute end-2.5 bottom-[7px] bg-blue-700 hover:bg-blue-800 font-medium rounded-md text-base px-4 py-1 ">Search</button>

                  </div>

             </form>


         </div>
  )
}
