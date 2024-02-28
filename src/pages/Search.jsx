import React, { useEffect, useState } from 'react';
import { useLoaderData, useLocation, useParams } from 'react-router-dom';
import SearchDetail from '../components/SearchDetail';

export default function Search( { data } ) {

    const { search } = useParams();

  return (
         
         <div>

             <SearchDetail data={data} search={search} />

         </div>
  )
}
