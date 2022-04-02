
import { NavBarProps } from '../../interfaces/interfaces';
import { useDispatch } from 'react-redux'
import { setModalType } from '../../features/counter/counterSlice'
import './navbar.css'
const Navbar:React.FC<NavBarProps>=({paths,style})=> {

  const dispatch = useDispatch()
 
  return (

   <div className={style?"no-class":"Navbar-container"}style={style?style:{}}>   
        {
          paths.map((path:string)=>{return(<a href='#' onClick={()=>{dispatch(setModalType(path))}} className='Router-text'>{path}</a>) })
        }
   </div>
  )
}

export default Navbar