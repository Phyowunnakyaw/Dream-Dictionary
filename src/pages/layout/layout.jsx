import NavBar from '../../components/NavBar'
import { Outlet } from 'react-router-dom';
import useTheme from '../../hooks/useTheme'

export default function layout() {

     let { theme } = useTheme();

  return (
         
         <div className= { ` ${ theme === 'light' ? ( 'bg-white' ) : ( 'bg-black' ) } ` } >

              <NavBar />

              <div>

                   <Outlet />

              </div>

         </div>
  )
}
