// import axios from "axios"

 export const numberAction = (lastNum)=>(dispatch,getState)=> {
    dispatch({type:"changeNumber",payload:getState().number + lastNum})
 }

 export const changeNumber = ()=>(dispatch,getState)=> {
    dispatch({type:"clicked",payload:getState().lastChange.concat(getState().number)})
 }
//  export const getData = ()=>async(dispatch,getState)=> {
//     dispatch({type:"loading" , payload : {data:[],loading:true,error:""}})
//     try {
//         const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
//         dispatch({type:"success" , payload : {data:[...data],loading:false,error:""}})
//     } catch (error) {
//         dispatch({type:"faild" , payload : {data:[],loading:false,error:"data not find"}})
//     }
//  }