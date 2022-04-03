import './header.css'

export const renderRightHeader=(modalType:string="",InputComponent:any={}):JSX.Element=>{
    if(modalType=="My Todos"){
      return(
        <div className='Modal-header'>
          <div className='Fields-container'>
            <InputComponent from  title="Name"/>
            <InputComponent title="Describtion"/>
          </div>
          <div onClick={()=>console.log("dd")}className="Exceute-btn" >Add Todo</div>
        </div>     
      )
    }
    else {
      return(
        <div className='Modal-header'>    
          <div className='Prev-assigment-field-container'>
            <label>Search Assigment</label>
            <input id='Search-assigment' type="text"  onFocus={()=>{console.log("focus")}}/>
            <div onClick={()=>console.log("dd")}className="Exceute-btn" >Search</div>
          </div>
        
        </div>
      )
    }
}
