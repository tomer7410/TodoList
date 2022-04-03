import React from 'react'
import { MainProps } from '../../interfaces/interfaces'
import InputComponent from './Header/InputComponent/inputComponent'
import { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { renderRightHeader } from './Header/header'
import "./mainModal.css"
import AssigmentComponent from './Body/AssigmentComponent/assigmentComponent'
import AssigmentBtn from './Body/AssigmentComponent/AssigmentBtn/assigmentBtn'
const MainModal:React.FC<MainProps>=({style}):JSX.Element=> {
  const modalType = useSelector((state: RootState) => state.modalType.value)
  console.log(`count from main modal ${modalType}`);
  var a:Array<number>= new Array(7)
  return (  
  <div className={style? "no-class":'Modal-container'} style={style? style:{}}>
      {modalType=="My Todos"?renderRightHeader("My Todos",InputComponent):renderRightHeader()}
      <div className='Modal-body'>
        {
         Array(100).fill(0).map((assigment)=>{
            return (
              <div className='Row-container'>
                  <AssigmentComponent/>
                  {modalType=="My Todos"&&
                    <div className='Btn-container'>
                        <AssigmentBtn color="red" title="Edit"/>
                        <AssigmentBtn color="blue" title="Delete"/>
                        <AssigmentBtn color="black" title="Complete"/>
                        
                    </div>
                  }
              </div>
            )
         
          })
        }
      </div>
  </div>
  )
}
  
  export default MainModal