import SearchInput from "../components/SearchInput"
import Titles from "../components/Titles"

function Home( { data } ) {
        
  return (
     
          <div className=' max-w-6xl mx-auto' > 

              <SearchInput data={ data } />
              
              <Titles data={ data } /> 
         
           </div>
  )        
}

export default Home;
