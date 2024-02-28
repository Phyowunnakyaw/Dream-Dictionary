import React from 'react';
import { Link } from 'react-router-dom';

 function Titles( { data } ) {

  const { BlogHeader } =  data ;

  return (
          
         <div className=' max-w-6xl mx-auto p-12 pt-8 '>

                <div className=" grid grid-cols-4 place-items-center gap-8 "> 

                { BlogHeader.map( header  => (
               
                    <Link to={ `/answer/${header.BlogId}` } key={ header.BlogId } >
                    
                         <div className=" bg-main p-2 text-center font-medium text-white leading-7 max-w-[200px] rounded "> { header.BlogTitle } </div>

                    </Link>

                  ) )
                }

                </div>

         </div>
  )
}

export default Titles;


