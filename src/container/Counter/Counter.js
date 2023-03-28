// import React, { useEffect } from 'react'
import Control from '../../components/Control/Control'
import Outgo from '../../components/Outgo/Outgo'
import "./Counter.css"
import {useDispatch, useSelector } from 'react-redux'
import { numberAction,changeNumber } from '../../redux/action'

const Counter = () => {
  const dispatch = useDispatch()
  const number = useSelector((store)=> store.number)
  const NewNumberSet = useSelector((store)=> store.lastChange)
  // const {data,loading,error} = useSelector((store)=> store.users)
  // useEffect(() => {
  //   dispatch(getData())
  // }, [])
  const clickAddOneHandler=()=> {
    dispatch(numberAction(+1))
  }
  const clickAddFiveHandler = ()=> {
    dispatch(numberAction(+5))
  }
  const clickRemoveOneHandler = ()=> {
    dispatch(numberAction(-1))
  }
  const clickRemoveFiveHandler = ()=> {
    dispatch(numberAction(-5))
  }
  const clickChangeNumberHandler=()=> {
    dispatch(changeNumber())
  }
  console.log(NewNumberSet)
  return (
    <div>
      <Outgo number={number}/>
      <div className="buttons">
      {/* {loading?<h1>loading...</h1>:error?<p>{error}</p>:<div  style={{display:"flex",flexDirection:"column"}}>{data.map(item=> <p key={item.id}>{item.name}</p>)}</div>} */}
      <Control label="add 1" click={clickAddOneHandler} className="btn p-3 btn-success"/>
      <Control label="add 5" click={clickAddFiveHandler} className="btn p-3 btn-info"/>
      <Control label="add -1" click={clickRemoveOneHandler} className="btn p-3 btn-warning"/>
      <Control label="add -5" click={clickRemoveFiveHandler} className="btn p-3 btn-danger"/>
      </div>
      <div className="center-element mt-5">
      <button className="btn btn-dark" onClick={clickChangeNumberHandler}>Add to save data</button>
      <ul style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      {NewNumberSet.map((item,index)=> {
        return <li key={index} style={{textAlign:"center",listStyle:"none",fontSize:"2rem",fontWeight:"500"}}>{item}</li>
      })}
      </ul>
      </div>
    </div>
  )
}

export default Counter