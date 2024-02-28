import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useTheme from '../hooks/useTheme'

export default function Answer( { data } ) {

    const { BlogDetail } = data;
    const BlogId = useParams();
    const id = BlogId.id

    const answers = BlogDetail.filter( answer => answer.BlogId == id );

    let { isDark } = useTheme();

  return (
         
         <div className=' max-w-6xl mx-auto p-12 py-20 '>     

             <div className=" border-2 border-main p-8 py-12 pb-52 ">

                 { answers.map ( answer => (

                     <div className=" py-4 border border-main border-x-0 border-t-0 " key={ answer.BlogDetailId }>

                         <p className={ ` text-base font-medium ${ isDark ? ( 'text-white' ) : ( 'text-black' ) } ` }> { answer.BlogContent } </p>

                     </div>

                 ) ) }

             </div>

             <Link to='/' className=" flex justify-end mt-8 ">

                 <button className=' bg-main text-sm font-bold text-white p-1 px-2 rounded'> နောက်သို့ </button>

             </Link>

         </div>
  )
}
