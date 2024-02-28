import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useTheme from '../hooks/useTheme';

export default function SearchDetail( { data, search } ) {

    let navigate = useNavigate();
    let [ results, setResults ] = useState( [] );
    let [ count, setCount ] = useState( 3 );

    useEffect( () => {

        const resultFilter = data.BlogDetail.filter( ( blog ) => {
            return blog.BlogContent.toLowerCase().includes( search.toLowerCase() )
        } )
        setResults( resultFilter )

    }, [ data, search ] );

    useEffect( () => {

        if( results.length === 0 ) {
            const GoHome = setTimeout(() => {
                navigate('/')
            }, 3000);

            const interval = setInterval(() => {
                setCount( ( count ) => count - 1 )
            }, 1000);

            return () => {
                clearTimeout( GoHome );
                clearInterval( interval )
            }
        }

    }, [ results, navigate ] )

    let { isDark } = useTheme();

  return (
         
         <div className=' max-w-6xl mx-auto p-12 '>

             <h1 className= { ` text-center ${ isDark ? ( 'text-white' ) : ( 'text-black' )  } ` } > သင်ရှာဖွေလိုသော အကြောင်းအရာ - <span className=' text-2xl '> " { search } " </span> </h1>

             { results.length === 0  ? (

                <div className=" border-2 border-main p-8 py-10 mt-12 ">

                    <p className= { ` text-center ${ isDark ? ( 'text-white' ) : ( 'text-black' )  } `}  > သင်ရှာဖွေလိုသော အကြောင်းအရာ မရှိပါ။ </p>
                    
                    <div className=" flex justify-center py-20 ">

                        <p className=' text-9xl font-bold text-main' > { count } </p>

                    </div>

                </div>

             ) : (

             <div className=' border-2 border-main p-8 py-12 mt-8 pb-[301px]' >

             { results.map( result => (
     
                    <div className=" py-4 border border-main border-x-0 border-t-0 " key={ result.BlogDetailId }>
                        
                        <p className={ ` ${ isDark ? ( 'text-white' ) : ( 'text-black' )  } `} > { result.BlogContent } </p> 

                    </div> 
                    
                )) 

             }

             </div>

             ) }

             <Link to='/' className=" flex justify-end mt-8 ">

                 <button className=' bg-main text-sm font-bold text-white p-1 px-2 rounded'> နောက်သို့ </button>

             </Link>

         </div>
  )
}
